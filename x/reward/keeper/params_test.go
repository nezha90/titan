package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "titan/testutil/keeper"
	"titan/x/reward/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.RewardKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
