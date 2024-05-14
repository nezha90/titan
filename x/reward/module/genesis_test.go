package reward_test

import (
	"testing"

	keepertest "titan/testutil/keeper"
	"titan/testutil/nullify"
	reward "titan/x/reward/module"
	"titan/x/reward/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.RewardKeeper(t)
	reward.InitGenesis(ctx, k, genesisState)
	got := reward.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
