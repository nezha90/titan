package keeper

import (
	"context"
	errorsmod "cosmossdk.io/errors"

	"titan/x/reward/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ExtractVoucher(goCtx context.Context, msg *types.MsgExtractVoucher) (*types.MsgExtractVoucherResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	ok, amounts := k.GetVoucher(ctx, msg.Creator, true)
	if !ok {
		return &types.MsgExtractVoucherResponse{}, errorsmod.Wrapf(types.ErrInvalidVoucher, "invalid voucher")
	}

	beneficiary, _ := sdk.AccAddressFromBech32(msg.Beneficiary)

	sdkError := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, beneficiary, amounts)
	if sdkError != nil {
		return nil, sdkError
	}

	k.MoveVoucher(ctx, msg.Creator, amounts)

	return &types.MsgExtractVoucherResponse{}, nil
}
