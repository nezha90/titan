package keeper

import (
	"cosmossdk.io/store/prefix"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/runtime"
	"titan/x/reward/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) AppendVoucher(ctx sdk.Context, beneficiary string, newAmounts sdk.Coins) {
	ok, amounts := k.GetVoucher(ctx, beneficiary, true)

	if ok {
		amounts = amounts.Add(newAmounts...)
	} else {
		amounts = newAmounts
	}

	k.SetVoucher(ctx, beneficiary, amounts, true)
}

func (k Keeper) MoveVoucher(ctx sdk.Context, beneficiary string, newAmounts sdk.Coins) {
	k.DeleteVoucher(ctx, beneficiary)

	ok, amounts := k.GetVoucher(ctx, beneficiary, false)
	if ok {
		amounts = amounts.Add(newAmounts...)
	} else {
		amounts = newAmounts
	}

	k.SetVoucher(ctx, beneficiary, amounts, false)
}

func (k Keeper) DeleteVoucher(ctx sdk.Context, beneficiary string) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.UnExtractedKey))

	store.Delete([]byte(beneficiary))
}

func (k Keeper) SetVoucher(ctx sdk.Context, beneficiary string, amounts sdk.Coins, flag bool) {
	var keyPrefix string
	if flag {
		keyPrefix = types.UnExtractedKey
	} else {
		keyPrefix = types.ExtractedKey
	}

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(keyPrefix))

	bytes, _ := amounts.MarshalJSON()

	store.Set([]byte(beneficiary), bytes)
}

// GetVoucher
// flag = true -> UnExtractedKey
// flag = false -> ExtractedKey
func (k Keeper) GetVoucher(ctx sdk.Context, beneficiary string, flag bool) (bool, sdk.Coins) {
	var keyPrefix string
	if flag {
		keyPrefix = types.UnExtractedKey
	} else {
		keyPrefix = types.ExtractedKey
	}

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(keyPrefix))

	amountsBytes := store.Get([]byte(beneficiary))
	if amountsBytes == nil {
		return false, nil
	}

	var amounts sdk.Coins
	err := json.Unmarshal(amountsBytes, &amounts)
	if err != nil {
		return false, nil
	}

	amounts = amounts.Sort()

	return true, amounts
}
