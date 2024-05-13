package keeper

import (
	"cosmossdk.io/store/prefix"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/runtime"
	"titan/x/reward/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) AppendVoucher(ctx sdk.Context, newAmounts sdk.Coins, beneficiary string) {
	ok, amounts := k.GetVoucher(ctx, beneficiary, true)

	if ok {
		amounts = amounts.Add(newAmounts...)
	} else {
		amounts = newAmounts
	}

	bytes, _ := amounts.MarshalJSON()

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.UnExtractedKey))

	store.Set([]byte(beneficiary), bytes)
}

// GetVoucher
// flag = true -> UnExtractedKey
// flag = false -> ExtractedKey
func (k Keeper) GetVoucher(ctx sdk.Context, beneficiary string, flag bool) (bool, sdk.Coins) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	var keyPrefix string
	if flag {
		keyPrefix = types.UnExtractedKey
	} else {
		keyPrefix = types.ExtractedKey
	}
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
