package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "titan/testutil/keeper"
	"titan/x/titan/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.TitanKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
