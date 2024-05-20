/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "titan.reward";

export interface Voucher {
  amounts: string;
  beneficiary: string;
}

function createBaseVoucher(): Voucher {
  return { amounts: "", beneficiary: "" };
}

export const Voucher = {
  encode(message: Voucher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amounts !== "") {
      writer.uint32(10).string(message.amounts);
    }
    if (message.beneficiary !== "") {
      writer.uint32(18).string(message.beneficiary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Voucher {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoucher();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amounts = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.beneficiary = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Voucher {
    return {
      amounts: isSet(object.amounts) ? String(object.amounts) : "",
      beneficiary: isSet(object.beneficiary) ? String(object.beneficiary) : "",
    };
  },

  toJSON(message: Voucher): unknown {
    const obj: any = {};
    if (message.amounts !== "") {
      obj.amounts = message.amounts;
    }
    if (message.beneficiary !== "") {
      obj.beneficiary = message.beneficiary;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Voucher>, I>>(base?: I): Voucher {
    return Voucher.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Voucher>, I>>(object: I): Voucher {
    const message = createBaseVoucher();
    message.amounts = object.amounts ?? "";
    message.beneficiary = object.beneficiary ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
