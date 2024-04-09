package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgMintAndSendTokens{}

func NewMsgMintAndSendTokens(owner string, denom string, amount uint64, recipient string) *MsgMintAndSendTokens {
	return &MsgMintAndSendTokens{
		Owner:     owner,
		Denom:     denom,
		Amount:    amount,
		Recipient: recipient,
	}
}

func (msg *MsgMintAndSendTokens) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return nil
}
