// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension="
// @generated from file redpanda/api/dataplane/v1alpha1/secret.proto (package redpanda.api.dataplane.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Secret defienes the secret resource.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.Secret
 */
export class Secret extends Message<Secret> {
  /**
   * Secret identifier.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Secret labels.
   *
   * @generated from field: map<string, string> labels = 2;
   */
  labels: { [key: string]: string } = {};

  constructor(data?: PartialMessage<Secret>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.Secret";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Secret {
    return new Secret().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Secret {
    return new Secret().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Secret {
    return new Secret().fromJsonString(jsonString, options);
  }

  static equals(a: Secret | PlainMessage<Secret> | undefined, b: Secret | PlainMessage<Secret> | undefined): boolean {
    return proto3.util.equals(Secret, a, b);
  }
}

/**
 * SecretInput defienes the secret input for secret API actions.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.SecretInput
 */
export class SecretInput extends Message<SecretInput> {
  /**
   * Secret identifier.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Secret labels.
   *
   * @generated from field: map<string, string> labels = 2;
   */
  labels: { [key: string]: string } = {};

  /**
   * The secret data.
   *
   * @generated from field: bytes secret_data = 3;
   */
  secretData = new Uint8Array(0);

  constructor(data?: PartialMessage<SecretInput>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.SecretInput";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "secret_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SecretInput {
    return new SecretInput().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SecretInput {
    return new SecretInput().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SecretInput {
    return new SecretInput().fromJsonString(jsonString, options);
  }

  static equals(a: SecretInput | PlainMessage<SecretInput> | undefined, b: SecretInput | PlainMessage<SecretInput> | undefined): boolean {
    return proto3.util.equals(SecretInput, a, b);
  }
}

/**
 * ListSecretsResponse is the response of ListSecrets.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.ListSecretsResponse
 */
export class ListSecretsResponse extends Message<ListSecretsResponse> {
  /**
   * Secrets retrieved.
   *
   * @generated from field: repeated redpanda.api.dataplane.v1alpha1.Secret secrets = 1;
   */
  secrets: Secret[] = [];

  /**
   * Token to retrieve the next page.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListSecretsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.ListSecretsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "secrets", kind: "message", T: Secret, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSecretsResponse {
    return new ListSecretsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSecretsResponse {
    return new ListSecretsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSecretsResponse {
    return new ListSecretsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListSecretsResponse | PlainMessage<ListSecretsResponse> | undefined, b: ListSecretsResponse | PlainMessage<ListSecretsResponse> | undefined): boolean {
    return proto3.util.equals(ListSecretsResponse, a, b);
  }
}

/**
 * ListSecretsRequest is the request of ListSecrets.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.ListSecretsRequest
 */
export class ListSecretsRequest extends Message<ListSecretsRequest> {
  /**
   * List filter.
   *
   * @generated from field: redpanda.api.dataplane.v1alpha1.ListSecretsRequest.Filter filter = 1;
   */
  filter?: ListSecretsRequest_Filter;

  /**
   * Value of the next_page_token field returned by the previous response.
   * If not provided, the system assumes the first page is requested.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken = "";

  /**
   * Limit the paginated response to a number of items.
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize = 0;

  constructor(data?: PartialMessage<ListSecretsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.ListSecretsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "filter", kind: "message", T: ListSecretsRequest_Filter },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSecretsRequest {
    return new ListSecretsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSecretsRequest {
    return new ListSecretsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSecretsRequest {
    return new ListSecretsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListSecretsRequest | PlainMessage<ListSecretsRequest> | undefined, b: ListSecretsRequest | PlainMessage<ListSecretsRequest> | undefined): boolean {
    return proto3.util.equals(ListSecretsRequest, a, b);
  }
}

/**
 * Defines the filter for querying the secrets.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.ListSecretsRequest.Filter
 */
export class ListSecretsRequest_Filter extends Message<ListSecretsRequest_Filter> {
  /**
   * The secret ID or name to search for.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The secret labels to search for.
   *
   * @generated from field: map<string, string> labels = 2;
   */
  labels: { [key: string]: string } = {};

  constructor(data?: PartialMessage<ListSecretsRequest_Filter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.ListSecretsRequest.Filter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSecretsRequest_Filter {
    return new ListSecretsRequest_Filter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSecretsRequest_Filter {
    return new ListSecretsRequest_Filter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSecretsRequest_Filter {
    return new ListSecretsRequest_Filter().fromJsonString(jsonString, options);
  }

  static equals(a: ListSecretsRequest_Filter | PlainMessage<ListSecretsRequest_Filter> | undefined, b: ListSecretsRequest_Filter | PlainMessage<ListSecretsRequest_Filter> | undefined): boolean {
    return proto3.util.equals(ListSecretsRequest_Filter, a, b);
  }
}

/**
 * GetSecretRequest is the request of GetSecret.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.GetSecretRequest
 */
export class GetSecretRequest extends Message<GetSecretRequest> {
  /**
   * The id of the secret to retrieve.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<GetSecretRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.GetSecretRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSecretRequest {
    return new GetSecretRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSecretRequest {
    return new GetSecretRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSecretRequest {
    return new GetSecretRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetSecretRequest | PlainMessage<GetSecretRequest> | undefined, b: GetSecretRequest | PlainMessage<GetSecretRequest> | undefined): boolean {
    return proto3.util.equals(GetSecretRequest, a, b);
  }
}

/**
 * GetSecretResponse is the response of GetSecret.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.GetSecretResponse
 */
export class GetSecretResponse extends Message<GetSecretResponse> {
  /**
   * The created secret.
   *
   * @generated from field: redpanda.api.dataplane.v1alpha1.Secret secret = 1;
   */
  secret?: Secret;

  constructor(data?: PartialMessage<GetSecretResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.GetSecretResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "secret", kind: "message", T: Secret },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSecretResponse {
    return new GetSecretResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSecretResponse {
    return new GetSecretResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSecretResponse {
    return new GetSecretResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetSecretResponse | PlainMessage<GetSecretResponse> | undefined, b: GetSecretResponse | PlainMessage<GetSecretResponse> | undefined): boolean {
    return proto3.util.equals(GetSecretResponse, a, b);
  }
}

/**
 * CreateSecretRequest is the request of CreateSecret.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.CreateSecretRequest
 */
export class CreateSecretRequest extends Message<CreateSecretRequest> {
  /**
   * The input for the secret to create.
   *
   * @generated from field: redpanda.api.dataplane.v1alpha1.SecretInput secret = 1;
   */
  secret?: SecretInput;

  constructor(data?: PartialMessage<CreateSecretRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.CreateSecretRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "secret", kind: "message", T: SecretInput },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSecretRequest {
    return new CreateSecretRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSecretRequest {
    return new CreateSecretRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSecretRequest {
    return new CreateSecretRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateSecretRequest | PlainMessage<CreateSecretRequest> | undefined, b: CreateSecretRequest | PlainMessage<CreateSecretRequest> | undefined): boolean {
    return proto3.util.equals(CreateSecretRequest, a, b);
  }
}

/**
 * CreateSecretResponse is the response of CreateSecret.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.CreateSecretResponse
 */
export class CreateSecretResponse extends Message<CreateSecretResponse> {
  /**
   * The created secret.
   *
   * @generated from field: redpanda.api.dataplane.v1alpha1.Secret secret = 1;
   */
  secret?: Secret;

  constructor(data?: PartialMessage<CreateSecretResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.CreateSecretResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "secret", kind: "message", T: Secret },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSecretResponse {
    return new CreateSecretResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSecretResponse {
    return new CreateSecretResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSecretResponse {
    return new CreateSecretResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateSecretResponse | PlainMessage<CreateSecretResponse> | undefined, b: CreateSecretResponse | PlainMessage<CreateSecretResponse> | undefined): boolean {
    return proto3.util.equals(CreateSecretResponse, a, b);
  }
}

/**
 * UpdateSecretRequest is the request of UpdateSecret.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.UpdateSecretRequest
 */
export class UpdateSecretRequest extends Message<UpdateSecretRequest> {
  /**
   * The input for the secret to update.
   *
   * @generated from field: redpanda.api.dataplane.v1alpha1.SecretInput secret = 1;
   */
  secret?: SecretInput;

  constructor(data?: PartialMessage<UpdateSecretRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.UpdateSecretRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "secret", kind: "message", T: SecretInput },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSecretRequest {
    return new UpdateSecretRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSecretRequest {
    return new UpdateSecretRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSecretRequest {
    return new UpdateSecretRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateSecretRequest | PlainMessage<UpdateSecretRequest> | undefined, b: UpdateSecretRequest | PlainMessage<UpdateSecretRequest> | undefined): boolean {
    return proto3.util.equals(UpdateSecretRequest, a, b);
  }
}

/**
 * UpdateSecretResponse is the response of UpdateSecret.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.UpdateSecretResponse
 */
export class UpdateSecretResponse extends Message<UpdateSecretResponse> {
  /**
   * The updated secret.
   *
   * @generated from field: redpanda.api.dataplane.v1alpha1.Secret secret = 1;
   */
  secret?: Secret;

  constructor(data?: PartialMessage<UpdateSecretResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.UpdateSecretResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "secret", kind: "message", T: Secret },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSecretResponse {
    return new UpdateSecretResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSecretResponse {
    return new UpdateSecretResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSecretResponse {
    return new UpdateSecretResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateSecretResponse | PlainMessage<UpdateSecretResponse> | undefined, b: UpdateSecretResponse | PlainMessage<UpdateSecretResponse> | undefined): boolean {
    return proto3.util.equals(UpdateSecretResponse, a, b);
  }
}

/**
 * DeleteSecretRequest is the request of DeleteSecret.
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.DeleteSecretRequest
 */
export class DeleteSecretRequest extends Message<DeleteSecretRequest> {
  /**
   * The id of the secret to delete.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<DeleteSecretRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.DeleteSecretRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSecretRequest {
    return new DeleteSecretRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSecretRequest {
    return new DeleteSecretRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSecretRequest {
    return new DeleteSecretRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSecretRequest | PlainMessage<DeleteSecretRequest> | undefined, b: DeleteSecretRequest | PlainMessage<DeleteSecretRequest> | undefined): boolean {
    return proto3.util.equals(DeleteSecretRequest, a, b);
  }
}

/**
 * DeleteSecretResponse is the response of DeleteSecret
 *
 * @generated from message redpanda.api.dataplane.v1alpha1.DeleteSecretResponse
 */
export class DeleteSecretResponse extends Message<DeleteSecretResponse> {
  constructor(data?: PartialMessage<DeleteSecretResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.DeleteSecretResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSecretResponse {
    return new DeleteSecretResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSecretResponse {
    return new DeleteSecretResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSecretResponse {
    return new DeleteSecretResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSecretResponse | PlainMessage<DeleteSecretResponse> | undefined, b: DeleteSecretResponse | PlainMessage<DeleteSecretResponse> | undefined): boolean {
    return proto3.util.equals(DeleteSecretResponse, a, b);
  }
}

