/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "titan.tokenfactory";

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

export interface MsgCreateDenom {
  owner: string;
  denom: string;
  description: string;
  ticker: string;
  precision: number;
  url: string;
  maxSupply: number;
  canChangeMaxSupply: boolean;
}

export interface MsgCreateDenomResponse {
}

export interface MsgUpdateDenom {
  owner: string;
  denom: string;
  description: string;
  url: string;
  maxSupply: number;
  canChangeMaxSupply: boolean;
}

export interface MsgUpdateDenomResponse {
}

export interface MsgMintAndSendTokens {
  owner: string;
  denom: string;
  amount: number;
  recipient: string;
}

export interface MsgMintAndSendTokensResponse {
}

export interface MsgUpdateOwner {
  owner: string;
  denom: string;
  newOwner: string;
}

export interface MsgUpdateOwnerResponse {
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

function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    owner: "",
    denom: "",
    description: "",
    ticker: "",
    precision: 0,
    url: "",
    maxSupply: 0,
    canChangeMaxSupply: false,
  };
}

export const MsgCreateDenom = {
  encode(message: MsgCreateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(34).string(message.ticker);
    }
    if (message.precision !== 0) {
      writer.uint32(40).int32(message.precision);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(56).uint64(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(64).bool(message.canChangeMaxSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.precision = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.url = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.maxSupply = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.canChangeMaxSupply = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDenom {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      precision: isSet(object.precision) ? Number(object.precision) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
      canChangeMaxSupply: isSet(object.canChangeMaxSupply) ? Boolean(object.canChangeMaxSupply) : false,
    };
  },

  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.precision !== 0) {
      obj.precision = Math.round(message.precision);
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.maxSupply !== 0) {
      obj.maxSupply = Math.round(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      obj.canChangeMaxSupply = message.canChangeMaxSupply;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(base?: I): MsgCreateDenom {
    return MsgCreateDenom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(object: I): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.precision = object.precision ?? 0;
    message.url = object.url ?? "";
    message.maxSupply = object.maxSupply ?? 0;
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    return message;
  },
};

function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {};
}

export const MsgCreateDenomResponse = {
  encode(_: MsgCreateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
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

  fromJSON(_: any): MsgCreateDenomResponse {
    return {};
  },

  toJSON(_: MsgCreateDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(base?: I): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(_: I): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    return message;
  },
};

function createBaseMsgUpdateDenom(): MsgUpdateDenom {
  return { owner: "", denom: "", description: "", url: "", maxSupply: 0, canChangeMaxSupply: false };
}

export const MsgUpdateDenom = {
  encode(message: MsgUpdateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(40).uint64(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(48).bool(message.canChangeMaxSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.url = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxSupply = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.canChangeMaxSupply = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDenom {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : "",
      maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
      canChangeMaxSupply: isSet(object.canChangeMaxSupply) ? Boolean(object.canChangeMaxSupply) : false,
    };
  },

  toJSON(message: MsgUpdateDenom): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.maxSupply !== 0) {
      obj.maxSupply = Math.round(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      obj.canChangeMaxSupply = message.canChangeMaxSupply;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDenom>, I>>(base?: I): MsgUpdateDenom {
    return MsgUpdateDenom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenom>, I>>(object: I): MsgUpdateDenom {
    const message = createBaseMsgUpdateDenom();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.maxSupply = object.maxSupply ?? 0;
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    return message;
  },
};

function createBaseMsgUpdateDenomResponse(): MsgUpdateDenomResponse {
  return {};
}

export const MsgUpdateDenomResponse = {
  encode(_: MsgUpdateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomResponse();
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

  fromJSON(_: any): MsgUpdateDenomResponse {
    return {};
  },

  toJSON(_: MsgUpdateDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDenomResponse>, I>>(base?: I): MsgUpdateDenomResponse {
    return MsgUpdateDenomResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenomResponse>, I>>(_: I): MsgUpdateDenomResponse {
    const message = createBaseMsgUpdateDenomResponse();
    return message;
  },
};

function createBaseMsgMintAndSendTokens(): MsgMintAndSendTokens {
  return { owner: "", denom: "", amount: 0, recipient: "" };
}

export const MsgMintAndSendTokens = {
  encode(message: MsgMintAndSendTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintAndSendTokens {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintAndSendTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.recipient = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMintAndSendTokens {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgMintAndSendTokens): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.recipient !== "") {
      obj.recipient = message.recipient;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMintAndSendTokens>, I>>(base?: I): MsgMintAndSendTokens {
    return MsgMintAndSendTokens.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintAndSendTokens>, I>>(object: I): MsgMintAndSendTokens {
    const message = createBaseMsgMintAndSendTokens();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? 0;
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgMintAndSendTokensResponse(): MsgMintAndSendTokensResponse {
  return {};
}

export const MsgMintAndSendTokensResponse = {
  encode(_: MsgMintAndSendTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintAndSendTokensResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintAndSendTokensResponse();
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

  fromJSON(_: any): MsgMintAndSendTokensResponse {
    return {};
  },

  toJSON(_: MsgMintAndSendTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMintAndSendTokensResponse>, I>>(base?: I): MsgMintAndSendTokensResponse {
    return MsgMintAndSendTokensResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintAndSendTokensResponse>, I>>(_: I): MsgMintAndSendTokensResponse {
    const message = createBaseMsgMintAndSendTokensResponse();
    return message;
  },
};

function createBaseMsgUpdateOwner(): MsgUpdateOwner {
  return { owner: "", denom: "", newOwner: "" };
}

export const MsgUpdateOwner = {
  encode(message: MsgUpdateOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOwner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newOwner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOwner {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      newOwner: isSet(object.newOwner) ? String(object.newOwner) : "",
    };
  },

  toJSON(message: MsgUpdateOwner): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.newOwner !== "") {
      obj.newOwner = message.newOwner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateOwner>, I>>(base?: I): MsgUpdateOwner {
    return MsgUpdateOwner.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateOwner>, I>>(object: I): MsgUpdateOwner {
    const message = createBaseMsgUpdateOwner();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
};

function createBaseMsgUpdateOwnerResponse(): MsgUpdateOwnerResponse {
  return {};
}

export const MsgUpdateOwnerResponse = {
  encode(_: MsgUpdateOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOwnerResponse();
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

  fromJSON(_: any): MsgUpdateOwnerResponse {
    return {};
  },

  toJSON(_: MsgUpdateOwnerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateOwnerResponse>, I>>(base?: I): MsgUpdateOwnerResponse {
    return MsgUpdateOwnerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateOwnerResponse>, I>>(_: I): MsgUpdateOwnerResponse {
    const message = createBaseMsgUpdateOwnerResponse();
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
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
  MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse>;
  UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>;
}

export const MsgServiceName = "titan.tokenfactory.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateDenom = this.CreateDenom.bind(this);
    this.UpdateDenom = this.UpdateDenom.bind(this);
    this.MintAndSendTokens = this.MintAndSendTokens.bind(this);
    this.UpdateOwner = this.UpdateOwner.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateDenom", data);
    return promise.then((data) => MsgCreateDenomResponse.decode(_m0.Reader.create(data)));
  }

  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse> {
    const data = MsgUpdateDenom.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateDenom", data);
    return promise.then((data) => MsgUpdateDenomResponse.decode(_m0.Reader.create(data)));
  }

  MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse> {
    const data = MsgMintAndSendTokens.encode(request).finish();
    const promise = this.rpc.request(this.service, "MintAndSendTokens", data);
    return promise.then((data) => MsgMintAndSendTokensResponse.decode(_m0.Reader.create(data)));
  }

  UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse> {
    const data = MsgUpdateOwner.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateOwner", data);
    return promise.then((data) => MsgUpdateOwnerResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
