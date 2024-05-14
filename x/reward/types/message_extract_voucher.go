package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgExtractVoucher{}

func NewMsgExtractVoucher(creator string, beneficiary string) *MsgExtractVoucher {
	return &MsgExtractVoucher{
		Creator:     creator,
		Beneficiary: beneficiary,
	}
}

func (msg *MsgExtractVoucher) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
