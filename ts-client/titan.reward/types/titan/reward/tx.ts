/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "titan.reward";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

export interface MsgCreateVoucher {
  creator: string;
  amounts: string;
  beneficiary: string;
}

export interface MsgCreateVoucherResponse {
}

export interface MsgExtractVoucher {
  creator: string;
  beneficiary: string;
}

export interface MsgExtractVoucherResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgCreateVoucher(): MsgCreateVoucher {
  return { creator: "", amounts: "", beneficiary: "" };
}

export const MsgCreateVoucher = {
  encode(message: MsgCreateVoucher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amounts !== "") {
      writer.uint32(18).string(message.amounts);
    }
    if (message.beneficiary !== "") {
      writer.uint32(26).string(message.beneficiary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVoucher {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVoucher();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amounts = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgCreateVoucher {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amounts: isSet(object.amounts) ? String(object.amounts) : "",
      beneficiary: isSet(object.beneficiary) ? String(object.beneficiary) : "",
    };
  },

  toJSON(message: MsgCreateVoucher): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amounts !== "") {
      obj.amounts = message.amounts;
    }
    if (message.beneficiary !== "") {
      obj.beneficiary = message.beneficiary;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateVoucher>, I>>(base?: I): MsgCreateVoucher {
    return MsgCreateVoucher.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVoucher>, I>>(object: I): MsgCreateVoucher {
    const message = createBaseMsgCreateVoucher();
    message.creator = object.creator ?? "";
    message.amounts = object.amounts ?? "";
    message.beneficiary = object.beneficiary ?? "";
    return message;
  },
};

function createBaseMsgCreateVoucherResponse(): MsgCreateVoucherResponse {
  return {};
}

export const MsgCreateVoucherResponse = {
  encode(_: MsgCreateVoucherResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVoucherResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVoucherResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreateVoucherResponse {
    return {};
  },

  toJSON(_: MsgCreateVoucherResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateVoucherResponse>, I>>(base?: I): MsgCreateVoucherResponse {
    return MsgCreateVoucherResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVoucherResponse>, I>>(_: I): MsgCreateVoucherResponse {
    const message = createBaseMsgCreateVoucherResponse();
    return message;
  },
};

function createBaseMsgExtractVoucher(): MsgExtractVoucher {
  return { creator: "", beneficiary: "" };
}

export const MsgExtractVoucher = {
  encode(message: MsgExtractVoucher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.beneficiary !== "") {
      writer.uint32(18).string(message.beneficiary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExtractVoucher {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtractVoucher();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

  fromJSON(object: any): MsgExtractVoucher {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      beneficiary: isSet(object.beneficiary) ? String(object.beneficiary) : "",
    };
  },

  toJSON(message: MsgExtractVoucher): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.beneficiary !== "") {
      obj.beneficiary = message.beneficiary;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgExtractVoucher>, I>>(base?: I): MsgExtractVoucher {
    return MsgExtractVoucher.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgExtractVoucher>, I>>(object: I): MsgExtractVoucher {
    const message = createBaseMsgExtractVoucher();
    message.creator = object.creator ?? "";
    message.beneficiary = object.beneficiary ?? "";
    return message;
  },
};

function createBaseMsgExtractVoucherResponse(): MsgExtractVoucherResponse {
  return {};
}

export const MsgExtractVoucherResponse = {
  encode(_: MsgExtractVoucherResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExtractVoucherResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtractVoucherResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgExtractVoucherResponse {
    return {};
  },

  toJSON(_: MsgExtractVoucherResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgExtractVoucherResponse>, I>>(base?: I): MsgExtractVoucherResponse {
    return MsgExtractVoucherResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgExtractVoucherResponse>, I>>(_: I): MsgExtractVoucherResponse {
    const message = createBaseMsgExtractVoucherResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateVoucher(request: MsgCreateVoucher): Promise<MsgCreateVoucherResponse>;
  ExtractVoucher(request: MsgExtractVoucher): Promise<MsgExtractVoucherResponse>;
}

export const MsgServiceName = "titan.reward.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateVoucher = this.CreateVoucher.bind(this);
    this.ExtractVoucher = this.ExtractVoucher.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateVoucher(request: MsgCreateVoucher): Promise<MsgCreateVoucherResponse> {
    const data = MsgCreateVoucher.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateVoucher", data);
    return promise.then((data) => MsgCreateVoucherResponse.decode(_m0.Reader.create(data)));
  }

  ExtractVoucher(request: MsgExtractVoucher): Promise<MsgExtractVoucherResponse> {
    const data = MsgExtractVoucher.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExtractVoucher", data);
    return promise.then((data) => MsgExtractVoucherResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
