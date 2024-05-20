/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Voucher } from "./voucher";

export const protobufPackage = "titan.reward";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryShowExtractedVoucherRequest {
  beneficiary: string;
}

export interface QueryShowExtractedVoucherResponse {
  voucher: Voucher | undefined;
}

export interface QueryShowUnextractedVoucherRequest {
  beneficiary: string;
}

export interface QueryShowUnextractedVoucherResponse {
  voucher: Voucher | undefined;
}

export interface QueryListExtractedVoucherRequest {
  pagination: PageRequest | undefined;
}

export interface QueryListExtractedVoucherResponse {
  voucher: Voucher[];
  pagination: PageResponse | undefined;
}

export interface QueryListUnextractedVoucherRequest {
  pagination: PageRequest | undefined;
}

export interface QueryListUnextractedVoucherResponse {
  voucher: Voucher[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryShowExtractedVoucherRequest(): QueryShowExtractedVoucherRequest {
  return { beneficiary: "" };
}

export const QueryShowExtractedVoucherRequest = {
  encode(message: QueryShowExtractedVoucherRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beneficiary !== "") {
      writer.uint32(10).string(message.beneficiary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowExtractedVoucherRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowExtractedVoucherRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryShowExtractedVoucherRequest {
    return { beneficiary: isSet(object.beneficiary) ? String(object.beneficiary) : "" };
  },

  toJSON(message: QueryShowExtractedVoucherRequest): unknown {
    const obj: any = {};
    if (message.beneficiary !== "") {
      obj.beneficiary = message.beneficiary;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryShowExtractedVoucherRequest>, I>>(
    base?: I,
  ): QueryShowExtractedVoucherRequest {
    return QueryShowExtractedVoucherRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryShowExtractedVoucherRequest>, I>>(
    object: I,
  ): QueryShowExtractedVoucherRequest {
    const message = createBaseQueryShowExtractedVoucherRequest();
    message.beneficiary = object.beneficiary ?? "";
    return message;
  },
};

function createBaseQueryShowExtractedVoucherResponse(): QueryShowExtractedVoucherResponse {
  return { voucher: undefined };
}

export const QueryShowExtractedVoucherResponse = {
  encode(message: QueryShowExtractedVoucherResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voucher !== undefined) {
      Voucher.encode(message.voucher, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowExtractedVoucherResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowExtractedVoucherResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.voucher = Voucher.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryShowExtractedVoucherResponse {
    return { voucher: isSet(object.voucher) ? Voucher.fromJSON(object.voucher) : undefined };
  },

  toJSON(message: QueryShowExtractedVoucherResponse): unknown {
    const obj: any = {};
    if (message.voucher !== undefined) {
      obj.voucher = Voucher.toJSON(message.voucher);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryShowExtractedVoucherResponse>, I>>(
    base?: I,
  ): QueryShowExtractedVoucherResponse {
    return QueryShowExtractedVoucherResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryShowExtractedVoucherResponse>, I>>(
    object: I,
  ): QueryShowExtractedVoucherResponse {
    const message = createBaseQueryShowExtractedVoucherResponse();
    message.voucher = (object.voucher !== undefined && object.voucher !== null)
      ? Voucher.fromPartial(object.voucher)
      : undefined;
    return message;
  },
};

function createBaseQueryShowUnextractedVoucherRequest(): QueryShowUnextractedVoucherRequest {
  return { beneficiary: "" };
}

export const QueryShowUnextractedVoucherRequest = {
  encode(message: QueryShowUnextractedVoucherRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beneficiary !== "") {
      writer.uint32(10).string(message.beneficiary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowUnextractedVoucherRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowUnextractedVoucherRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryShowUnextractedVoucherRequest {
    return { beneficiary: isSet(object.beneficiary) ? String(object.beneficiary) : "" };
  },

  toJSON(message: QueryShowUnextractedVoucherRequest): unknown {
    const obj: any = {};
    if (message.beneficiary !== "") {
      obj.beneficiary = message.beneficiary;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryShowUnextractedVoucherRequest>, I>>(
    base?: I,
  ): QueryShowUnextractedVoucherRequest {
    return QueryShowUnextractedVoucherRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryShowUnextractedVoucherRequest>, I>>(
    object: I,
  ): QueryShowUnextractedVoucherRequest {
    const message = createBaseQueryShowUnextractedVoucherRequest();
    message.beneficiary = object.beneficiary ?? "";
    return message;
  },
};

function createBaseQueryShowUnextractedVoucherResponse(): QueryShowUnextractedVoucherResponse {
  return { voucher: undefined };
}

export const QueryShowUnextractedVoucherResponse = {
  encode(message: QueryShowUnextractedVoucherResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voucher !== undefined) {
      Voucher.encode(message.voucher, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowUnextractedVoucherResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowUnextractedVoucherResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.voucher = Voucher.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryShowUnextractedVoucherResponse {
    return { voucher: isSet(object.voucher) ? Voucher.fromJSON(object.voucher) : undefined };
  },

  toJSON(message: QueryShowUnextractedVoucherResponse): unknown {
    const obj: any = {};
    if (message.voucher !== undefined) {
      obj.voucher = Voucher.toJSON(message.voucher);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryShowUnextractedVoucherResponse>, I>>(
    base?: I,
  ): QueryShowUnextractedVoucherResponse {
    return QueryShowUnextractedVoucherResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryShowUnextractedVoucherResponse>, I>>(
    object: I,
  ): QueryShowUnextractedVoucherResponse {
    const message = createBaseQueryShowUnextractedVoucherResponse();
    message.voucher = (object.voucher !== undefined && object.voucher !== null)
      ? Voucher.fromPartial(object.voucher)
      : undefined;
    return message;
  },
};

function createBaseQueryListExtractedVoucherRequest(): QueryListExtractedVoucherRequest {
  return { pagination: undefined };
}

export const QueryListExtractedVoucherRequest = {
  encode(message: QueryListExtractedVoucherRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExtractedVoucherRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExtractedVoucherRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryListExtractedVoucherRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryListExtractedVoucherRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryListExtractedVoucherRequest>, I>>(
    base?: I,
  ): QueryListExtractedVoucherRequest {
    return QueryListExtractedVoucherRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryListExtractedVoucherRequest>, I>>(
    object: I,
  ): QueryListExtractedVoucherRequest {
    const message = createBaseQueryListExtractedVoucherRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryListExtractedVoucherResponse(): QueryListExtractedVoucherResponse {
  return { voucher: [], pagination: undefined };
}

export const QueryListExtractedVoucherResponse = {
  encode(message: QueryListExtractedVoucherResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.voucher) {
      Voucher.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExtractedVoucherResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExtractedVoucherResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.voucher.push(Voucher.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryListExtractedVoucherResponse {
    return {
      voucher: Array.isArray(object?.voucher) ? object.voucher.map((e: any) => Voucher.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryListExtractedVoucherResponse): unknown {
    const obj: any = {};
    if (message.voucher?.length) {
      obj.voucher = message.voucher.map((e) => Voucher.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryListExtractedVoucherResponse>, I>>(
    base?: I,
  ): QueryListExtractedVoucherResponse {
    return QueryListExtractedVoucherResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryListExtractedVoucherResponse>, I>>(
    object: I,
  ): QueryListExtractedVoucherResponse {
    const message = createBaseQueryListExtractedVoucherResponse();
    message.voucher = object.voucher?.map((e) => Voucher.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryListUnextractedVoucherRequest(): QueryListUnextractedVoucherRequest {
  return { pagination: undefined };
}

export const QueryListUnextractedVoucherRequest = {
  encode(message: QueryListUnextractedVoucherRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListUnextractedVoucherRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListUnextractedVoucherRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryListUnextractedVoucherRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryListUnextractedVoucherRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryListUnextractedVoucherRequest>, I>>(
    base?: I,
  ): QueryListUnextractedVoucherRequest {
    return QueryListUnextractedVoucherRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryListUnextractedVoucherRequest>, I>>(
    object: I,
  ): QueryListUnextractedVoucherRequest {
    const message = createBaseQueryListUnextractedVoucherRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryListUnextractedVoucherResponse(): QueryListUnextractedVoucherResponse {
  return { voucher: [], pagination: undefined };
}

export const QueryListUnextractedVoucherResponse = {
  encode(message: QueryListUnextractedVoucherResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.voucher) {
      Voucher.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListUnextractedVoucherResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListUnextractedVoucherResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.voucher.push(Voucher.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryListUnextractedVoucherResponse {
    return {
      voucher: Array.isArray(object?.voucher) ? object.voucher.map((e: any) => Voucher.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryListUnextractedVoucherResponse): unknown {
    const obj: any = {};
    if (message.voucher?.length) {
      obj.voucher = message.voucher.map((e) => Voucher.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryListUnextractedVoucherResponse>, I>>(
    base?: I,
  ): QueryListUnextractedVoucherResponse {
    return QueryListUnextractedVoucherResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryListUnextractedVoucherResponse>, I>>(
    object: I,
  ): QueryListUnextractedVoucherResponse {
    const message = createBaseQueryListUnextractedVoucherResponse();
    message.voucher = object.voucher?.map((e) => Voucher.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ShowExtractedVoucher items. */
  ShowExtractedVoucher(request: QueryShowExtractedVoucherRequest): Promise<QueryShowExtractedVoucherResponse>;
  /** Queries a list of ShowUnextractedVoucher items. */
  ShowUnextractedVoucher(request: QueryShowUnextractedVoucherRequest): Promise<QueryShowUnextractedVoucherResponse>;
  /** Queries a list of ListExtractedVoucher items. */
  ListExtractedVoucher(request: QueryListExtractedVoucherRequest): Promise<QueryListExtractedVoucherResponse>;
  /** Queries a list of ListUnextractedVoucher items. */
  ListUnextractedVoucher(request: QueryListUnextractedVoucherRequest): Promise<QueryListUnextractedVoucherResponse>;
}

export const QueryServiceName = "titan.reward.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ShowExtractedVoucher = this.ShowExtractedVoucher.bind(this);
    this.ShowUnextractedVoucher = this.ShowUnextractedVoucher.bind(this);
    this.ListExtractedVoucher = this.ListExtractedVoucher.bind(this);
    this.ListUnextractedVoucher = this.ListUnextractedVoucher.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  ShowExtractedVoucher(request: QueryShowExtractedVoucherRequest): Promise<QueryShowExtractedVoucherResponse> {
    const data = QueryShowExtractedVoucherRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ShowExtractedVoucher", data);
    return promise.then((data) => QueryShowExtractedVoucherResponse.decode(_m0.Reader.create(data)));
  }

  ShowUnextractedVoucher(request: QueryShowUnextractedVoucherRequest): Promise<QueryShowUnextractedVoucherResponse> {
    const data = QueryShowUnextractedVoucherRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ShowUnextractedVoucher", data);
    return promise.then((data) => QueryShowUnextractedVoucherResponse.decode(_m0.Reader.create(data)));
  }

  ListExtractedVoucher(request: QueryListExtractedVoucherRequest): Promise<QueryListExtractedVoucherResponse> {
    const data = QueryListExtractedVoucherRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListExtractedVoucher", data);
    return promise.then((data) => QueryListExtractedVoucherResponse.decode(_m0.Reader.create(data)));
  }

  ListUnextractedVoucher(request: QueryListUnextractedVoucherRequest): Promise<QueryListUnextractedVoucherResponse> {
    const data = QueryListUnextractedVoucherRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListUnextractedVoucher", data);
    return promise.then((data) => QueryListUnextractedVoucherResponse.decode(_m0.Reader.create(data)));
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
