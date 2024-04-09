package tokenfactory_test

import (
	"testing"

	keepertest "titan/testutil/keeper"
	"titan/testutil/nullify"
	tokenfactory "titan/x/tokenfactory/module"
	"titan/x/tokenfactory/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		DenomList: []types.Denom{
			{
				Denom: "0",
			},
			{
				Denom: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TokenfactoryKeeper(t)
	tokenfactory.InitGenesis(ctx, k, genesisState)
	got := tokenfactory.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.DenomList, got.DenomList)
	// this line is used by starport scaffolding # genesis/test/assert
}
