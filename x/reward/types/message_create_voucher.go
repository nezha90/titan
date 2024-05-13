package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateVoucher{}

func NewMsgCreateVoucher(creator string, amounts string, beneficiary string) *MsgCreateVoucher {
	return &MsgCreateVoucher{
		Creator:     creator,
		Amounts:     amounts,
		Beneficiary: beneficiary,
	}
}

func (msg *MsgCreateVoucher) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = sdk.AccAddressFromBech32(msg.Beneficiary)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid beneficiary address (%s)", err)
	}

	_, err = sdk.ParseCoinsNormalized(msg.Amounts)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidCoins, "invalid amounts (%s)", err)
	}

	return nil
}
