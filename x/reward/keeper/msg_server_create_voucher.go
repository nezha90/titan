package keeper

import (
	"context"

	"titan/x/reward/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateVoucher(goCtx context.Context, msg *types.MsgCreateVoucher) (*types.MsgCreateVoucherResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	sender, _ := sdk.AccAddressFromBech32(msg.Creator)

	amounts, _ := sdk.ParseCoinsNormalized(msg.Amounts)
	amounts = amounts.Sort()

	sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, sender, types.ModuleName, amounts)
	if sdkError != nil {
		return nil, sdkError
	}

	k.AppendVoucher(ctx, amounts, msg.Beneficiary)

	return &types.MsgCreateVoucherResponse{}, nil
}
