package keeper

import (
	"context"

	"titan/x/reward/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateVoucher(goCtx context.Context, msg *types.MsgCreateVoucher) (*types.MsgCreateVoucherResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateVoucherResponse{}, nil
}
