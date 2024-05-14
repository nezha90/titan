package keeper

import (
	"context"
	"cosmossdk.io/store/prefix"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/runtime"
	"github.com/cosmos/cosmos-sdk/types/query"

	"titan/x/reward/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ListExtractedVoucher(goCtx context.Context, req *types.QueryListExtractedVoucherRequest) (*types.QueryListExtractedVoucherResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ExtractedKey))

	var vouchers []types.Voucher
	pageRes, err := query.Paginate(store, req.Pagination, func(key []byte, value []byte) error {
		var amounts sdk.Coins
		err := json.Unmarshal(value, &amounts)
		if err != nil {
			return err
		}

		vouchers = append(vouchers, types.Voucher{
			Amounts:     string(key),
			Beneficiary: amounts.String(),
		})

		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryListExtractedVoucherResponse{Voucher: vouchers, Pagination: pageRes}, nil
}
