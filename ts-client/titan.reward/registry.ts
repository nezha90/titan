import { GeneratedType } from "@cosmjs/proto-signing";
import { Voucher } from "./types/titan/reward/voucher";
import { QueryShowExtractedVoucherResponse } from "./types/titan/reward/query";
import { QueryShowUnextractedVoucherResponse } from "./types/titan/reward/query";
import { MsgUpdateParams } from "./types/titan/reward/tx";
import { MsgExtractVoucherResponse } from "./types/titan/reward/tx";
import { QueryShowUnextractedVoucherRequest } from "./types/titan/reward/query";
import { QueryListUnextractedVoucherRequest } from "./types/titan/reward/query";
import { GenesisState } from "./types/titan/reward/genesis";
import { MsgCreateVoucherResponse } from "./types/titan/reward/tx";
import { QueryParamsRequest } from "./types/titan/reward/query";
import { QueryShowExtractedVoucherRequest } from "./types/titan/reward/query";
import { MsgExtractVoucher } from "./types/titan/reward/tx";
import { QueryParamsResponse } from "./types/titan/reward/query";
import { QueryListExtractedVoucherResponse } from "./types/titan/reward/query";
import { QueryListUnextractedVoucherResponse } from "./types/titan/reward/query";
import { MsgCreateVoucher } from "./types/titan/reward/tx";
import { Params } from "./types/titan/reward/params";
import { MsgUpdateParamsResponse } from "./types/titan/reward/tx";
import { QueryListExtractedVoucherRequest } from "./types/titan/reward/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/titan.reward.Voucher", Voucher],
    ["/titan.reward.QueryShowExtractedVoucherResponse", QueryShowExtractedVoucherResponse],
    ["/titan.reward.QueryShowUnextractedVoucherResponse", QueryShowUnextractedVoucherResponse],
    ["/titan.reward.MsgUpdateParams", MsgUpdateParams],
    ["/titan.reward.MsgExtractVoucherResponse", MsgExtractVoucherResponse],
    ["/titan.reward.QueryShowUnextractedVoucherRequest", QueryShowUnextractedVoucherRequest],
    ["/titan.reward.QueryListUnextractedVoucherRequest", QueryListUnextractedVoucherRequest],
    ["/titan.reward.GenesisState", GenesisState],
    ["/titan.reward.MsgCreateVoucherResponse", MsgCreateVoucherResponse],
    ["/titan.reward.QueryParamsRequest", QueryParamsRequest],
    ["/titan.reward.QueryShowExtractedVoucherRequest", QueryShowExtractedVoucherRequest],
    ["/titan.reward.MsgExtractVoucher", MsgExtractVoucher],
    ["/titan.reward.QueryParamsResponse", QueryParamsResponse],
    ["/titan.reward.QueryListExtractedVoucherResponse", QueryListExtractedVoucherResponse],
    ["/titan.reward.QueryListUnextractedVoucherResponse", QueryListUnextractedVoucherResponse],
    ["/titan.reward.MsgCreateVoucher", MsgCreateVoucher],
    ["/titan.reward.Params", Params],
    ["/titan.reward.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/titan.reward.QueryListExtractedVoucherRequest", QueryListExtractedVoucherRequest],
    
];

export { msgTypes }