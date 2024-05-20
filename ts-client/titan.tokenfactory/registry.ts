import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateDenom } from "./types/titan/tokenfactory/tx";
import { MsgCreateDenomResponse } from "./types/titan/tokenfactory/tx";
import { QueryParamsRequest } from "./types/titan/tokenfactory/query";
import { QueryAllDenomRequest } from "./types/titan/tokenfactory/query";
import { QueryAllDenomResponse } from "./types/titan/tokenfactory/query";
import { MsgMintAndSendTokens } from "./types/titan/tokenfactory/tx";
import { MsgUpdateOwner } from "./types/titan/tokenfactory/tx";
import { QueryParamsResponse } from "./types/titan/tokenfactory/query";
import { Params } from "./types/titan/tokenfactory/params";
import { MsgUpdateDenom } from "./types/titan/tokenfactory/tx";
import { MsgUpdateOwnerResponse } from "./types/titan/tokenfactory/tx";
import { MsgUpdateParamsResponse } from "./types/titan/tokenfactory/tx";
import { MsgUpdateDenomResponse } from "./types/titan/tokenfactory/tx";
import { MsgMintAndSendTokensResponse } from "./types/titan/tokenfactory/tx";
import { MsgUpdateParams } from "./types/titan/tokenfactory/tx";
import { QueryGetDenomRequest } from "./types/titan/tokenfactory/query";
import { QueryGetDenomResponse } from "./types/titan/tokenfactory/query";
import { GenesisState } from "./types/titan/tokenfactory/genesis";
import { Denom } from "./types/titan/tokenfactory/denom";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/titan.tokenfactory.MsgCreateDenom", MsgCreateDenom],
    ["/titan.tokenfactory.MsgCreateDenomResponse", MsgCreateDenomResponse],
    ["/titan.tokenfactory.QueryParamsRequest", QueryParamsRequest],
    ["/titan.tokenfactory.QueryAllDenomRequest", QueryAllDenomRequest],
    ["/titan.tokenfactory.QueryAllDenomResponse", QueryAllDenomResponse],
    ["/titan.tokenfactory.MsgMintAndSendTokens", MsgMintAndSendTokens],
    ["/titan.tokenfactory.MsgUpdateOwner", MsgUpdateOwner],
    ["/titan.tokenfactory.QueryParamsResponse", QueryParamsResponse],
    ["/titan.tokenfactory.Params", Params],
    ["/titan.tokenfactory.MsgUpdateDenom", MsgUpdateDenom],
    ["/titan.tokenfactory.MsgUpdateOwnerResponse", MsgUpdateOwnerResponse],
    ["/titan.tokenfactory.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/titan.tokenfactory.MsgUpdateDenomResponse", MsgUpdateDenomResponse],
    ["/titan.tokenfactory.MsgMintAndSendTokensResponse", MsgMintAndSendTokensResponse],
    ["/titan.tokenfactory.MsgUpdateParams", MsgUpdateParams],
    ["/titan.tokenfactory.QueryGetDenomRequest", QueryGetDenomRequest],
    ["/titan.tokenfactory.QueryGetDenomResponse", QueryGetDenomResponse],
    ["/titan.tokenfactory.GenesisState", GenesisState],
    ["/titan.tokenfactory.Denom", Denom],
    
];

export { msgTypes }