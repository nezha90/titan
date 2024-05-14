package keeper

import (
	"context"

	errorsmod "cosmossdk.io/errors"

	"titan/x/tokenfactory/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) UpdateOwner(goCtx context.Context, msg *types.MsgUpdateOwner) (*types.MsgUpdateOwnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDenom(
		ctx,
		msg.Denom,
	)
	if !isFound {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, "denom does not exist")
	}

	// Checks if the msg owner is the same as the current owner
	if msg.Owner != valFound.Owner {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var denom = types.Denom{
		Owner:              msg.NewOwner,
		Denom:              msg.Denom,
		Description:        valFound.Description,
		MaxSupply:          valFound.MaxSupply,
		Supply:             valFound.Supply,
		Precision:          valFound.Precision,
		Ticker:             valFound.Ticker,
		Url:                valFound.Url,
		CanChangeMaxSupply: valFound.CanChangeMaxSupply,
	}

	k.SetDenom(
		ctx,
		denom,
	)

	return &types.MsgUpdateOwnerResponse{}, nil
}
