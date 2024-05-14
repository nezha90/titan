package keeper

import (
	"context"
	errorsmod "cosmossdk.io/errors"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"titan/x/reward/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowExtractedVoucher(goCtx context.Context, req *types.QueryShowExtractedVoucherRequest) (*types.QueryShowExtractedVoucherResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	_, err := sdk.AccAddressFromBech32(req.Beneficiary)
	if err != nil {
		return nil, errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid beneficiary address (%s)", err)
	}

	_, amounts := k.GetVoucher(ctx, req.Beneficiary, false)

	voucher := types.Voucher{
		Amounts:     amounts.String(),
		Beneficiary: req.Beneficiary,
	}

	return &types.QueryShowExtractedVoucherResponse{Voucher: &voucher}, nil
}
