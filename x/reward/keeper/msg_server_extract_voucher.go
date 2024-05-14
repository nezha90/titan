package keeper

import (
	"context"

	"titan/x/reward/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ExtractVoucher(goCtx context.Context, msg *types.MsgExtractVoucher) (*types.MsgExtractVoucherResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgExtractVoucherResponse{}, nil
}
