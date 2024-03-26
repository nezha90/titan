package titan_test

import (
	"testing"

	keepertest "titan/testutil/keeper"
	"titan/testutil/nullify"
	titan "titan/x/titan/module"
	"titan/x/titan/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TitanKeeper(t)
	titan.InitGenesis(ctx, k, genesisState)
	got := titan.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
