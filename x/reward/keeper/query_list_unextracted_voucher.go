package keeper

import (
	"context"

	"titan/x/reward/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ListUnextractedVoucher(goCtx context.Context, req *types.QueryListUnextractedVoucherRequest) (*types.QueryListUnextractedVoucherResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	return &types.QueryListUnextractedVoucherResponse{}, nil
}
