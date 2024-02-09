// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: redpanda/api/dataplane/v1alpha1/secret.proto

package dataplanev1alpha1connect

import (
	context "context"
	errors "errors"
	http "net/http"
	strings "strings"

	connect "connectrpc.com/connect"

	v1alpha1 "github.com/redpanda-data/console/backend/pkg/protogen/redpanda/api/dataplane/v1alpha1"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion1_13_0

const (
	// SecretServiceName is the fully-qualified name of the SecretService service.
	SecretServiceName = "redpanda.api.dataplane.v1alpha1.SecretService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// SecretServiceGetSecretProcedure is the fully-qualified name of the SecretService's GetSecret RPC.
	SecretServiceGetSecretProcedure = "/redpanda.api.dataplane.v1alpha1.SecretService/GetSecret"
	// SecretServiceListSecretsProcedure is the fully-qualified name of the SecretService's ListSecrets
	// RPC.
	SecretServiceListSecretsProcedure = "/redpanda.api.dataplane.v1alpha1.SecretService/ListSecrets"
	// SecretServiceCreateSecretProcedure is the fully-qualified name of the SecretService's
	// CreateSecret RPC.
	SecretServiceCreateSecretProcedure = "/redpanda.api.dataplane.v1alpha1.SecretService/CreateSecret"
	// SecretServiceUpdateSecretProcedure is the fully-qualified name of the SecretService's
	// UpdateSecret RPC.
	SecretServiceUpdateSecretProcedure = "/redpanda.api.dataplane.v1alpha1.SecretService/UpdateSecret"
	// SecretServiceDeleteSecretProcedure is the fully-qualified name of the SecretService's
	// DeleteSecret RPC.
	SecretServiceDeleteSecretProcedure = "/redpanda.api.dataplane.v1alpha1.SecretService/DeleteSecret"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	secretServiceServiceDescriptor            = v1alpha1.File_redpanda_api_dataplane_v1alpha1_secret_proto.Services().ByName("SecretService")
	secretServiceGetSecretMethodDescriptor    = secretServiceServiceDescriptor.Methods().ByName("GetSecret")
	secretServiceListSecretsMethodDescriptor  = secretServiceServiceDescriptor.Methods().ByName("ListSecrets")
	secretServiceCreateSecretMethodDescriptor = secretServiceServiceDescriptor.Methods().ByName("CreateSecret")
	secretServiceUpdateSecretMethodDescriptor = secretServiceServiceDescriptor.Methods().ByName("UpdateSecret")
	secretServiceDeleteSecretMethodDescriptor = secretServiceServiceDescriptor.Methods().ByName("DeleteSecret")
)

// SecretServiceClient is a client for the redpanda.api.dataplane.v1alpha1.SecretService service.
type SecretServiceClient interface {
	// GetSecret retrieves the specific secret.
	GetSecret(context.Context, *connect.Request[v1alpha1.GetSecretRequest]) (*connect.Response[v1alpha1.GetSecretResponse], error)
	// ListSecrets lists the secrets based on optional filter.
	ListSecrets(context.Context, *connect.Request[v1alpha1.ListSecretsRequest]) (*connect.Response[v1alpha1.ListSecretsResponse], error)
	// CreateSecret creates the secret.
	CreateSecret(context.Context, *connect.Request[v1alpha1.CreateSecretRequest]) (*connect.Response[v1alpha1.CreateSecretResponse], error)
	// UpdateSecret updates the secret.
	UpdateSecret(context.Context, *connect.Request[v1alpha1.UpdateSecretRequest]) (*connect.Response[v1alpha1.UpdateSecretResponse], error)
	// DeleteSecret deletes the secret.
	DeleteSecret(context.Context, *connect.Request[v1alpha1.DeleteSecretRequest]) (*connect.Response[v1alpha1.DeleteSecretResponse], error)
}

// NewSecretServiceClient constructs a client for the redpanda.api.dataplane.v1alpha1.SecretService
// service. By default, it uses the Connect protocol with the binary Protobuf Codec, asks for
// gzipped responses, and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply
// the connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewSecretServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) SecretServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &secretServiceClient{
		getSecret: connect.NewClient[v1alpha1.GetSecretRequest, v1alpha1.GetSecretResponse](
			httpClient,
			baseURL+SecretServiceGetSecretProcedure,
			connect.WithSchema(secretServiceGetSecretMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		listSecrets: connect.NewClient[v1alpha1.ListSecretsRequest, v1alpha1.ListSecretsResponse](
			httpClient,
			baseURL+SecretServiceListSecretsProcedure,
			connect.WithSchema(secretServiceListSecretsMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		createSecret: connect.NewClient[v1alpha1.CreateSecretRequest, v1alpha1.CreateSecretResponse](
			httpClient,
			baseURL+SecretServiceCreateSecretProcedure,
			connect.WithSchema(secretServiceCreateSecretMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		updateSecret: connect.NewClient[v1alpha1.UpdateSecretRequest, v1alpha1.UpdateSecretResponse](
			httpClient,
			baseURL+SecretServiceUpdateSecretProcedure,
			connect.WithSchema(secretServiceUpdateSecretMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		deleteSecret: connect.NewClient[v1alpha1.DeleteSecretRequest, v1alpha1.DeleteSecretResponse](
			httpClient,
			baseURL+SecretServiceDeleteSecretProcedure,
			connect.WithSchema(secretServiceDeleteSecretMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// secretServiceClient implements SecretServiceClient.
type secretServiceClient struct {
	getSecret    *connect.Client[v1alpha1.GetSecretRequest, v1alpha1.GetSecretResponse]
	listSecrets  *connect.Client[v1alpha1.ListSecretsRequest, v1alpha1.ListSecretsResponse]
	createSecret *connect.Client[v1alpha1.CreateSecretRequest, v1alpha1.CreateSecretResponse]
	updateSecret *connect.Client[v1alpha1.UpdateSecretRequest, v1alpha1.UpdateSecretResponse]
	deleteSecret *connect.Client[v1alpha1.DeleteSecretRequest, v1alpha1.DeleteSecretResponse]
}

// GetSecret calls redpanda.api.dataplane.v1alpha1.SecretService.GetSecret.
func (c *secretServiceClient) GetSecret(ctx context.Context, req *connect.Request[v1alpha1.GetSecretRequest]) (*connect.Response[v1alpha1.GetSecretResponse], error) {
	return c.getSecret.CallUnary(ctx, req)
}

// ListSecrets calls redpanda.api.dataplane.v1alpha1.SecretService.ListSecrets.
func (c *secretServiceClient) ListSecrets(ctx context.Context, req *connect.Request[v1alpha1.ListSecretsRequest]) (*connect.Response[v1alpha1.ListSecretsResponse], error) {
	return c.listSecrets.CallUnary(ctx, req)
}

// CreateSecret calls redpanda.api.dataplane.v1alpha1.SecretService.CreateSecret.
func (c *secretServiceClient) CreateSecret(ctx context.Context, req *connect.Request[v1alpha1.CreateSecretRequest]) (*connect.Response[v1alpha1.CreateSecretResponse], error) {
	return c.createSecret.CallUnary(ctx, req)
}

// UpdateSecret calls redpanda.api.dataplane.v1alpha1.SecretService.UpdateSecret.
func (c *secretServiceClient) UpdateSecret(ctx context.Context, req *connect.Request[v1alpha1.UpdateSecretRequest]) (*connect.Response[v1alpha1.UpdateSecretResponse], error) {
	return c.updateSecret.CallUnary(ctx, req)
}

// DeleteSecret calls redpanda.api.dataplane.v1alpha1.SecretService.DeleteSecret.
func (c *secretServiceClient) DeleteSecret(ctx context.Context, req *connect.Request[v1alpha1.DeleteSecretRequest]) (*connect.Response[v1alpha1.DeleteSecretResponse], error) {
	return c.deleteSecret.CallUnary(ctx, req)
}

// SecretServiceHandler is an implementation of the redpanda.api.dataplane.v1alpha1.SecretService
// service.
type SecretServiceHandler interface {
	// GetSecret retrieves the specific secret.
	GetSecret(context.Context, *connect.Request[v1alpha1.GetSecretRequest]) (*connect.Response[v1alpha1.GetSecretResponse], error)
	// ListSecrets lists the secrets based on optional filter.
	ListSecrets(context.Context, *connect.Request[v1alpha1.ListSecretsRequest]) (*connect.Response[v1alpha1.ListSecretsResponse], error)
	// CreateSecret creates the secret.
	CreateSecret(context.Context, *connect.Request[v1alpha1.CreateSecretRequest]) (*connect.Response[v1alpha1.CreateSecretResponse], error)
	// UpdateSecret updates the secret.
	UpdateSecret(context.Context, *connect.Request[v1alpha1.UpdateSecretRequest]) (*connect.Response[v1alpha1.UpdateSecretResponse], error)
	// DeleteSecret deletes the secret.
	DeleteSecret(context.Context, *connect.Request[v1alpha1.DeleteSecretRequest]) (*connect.Response[v1alpha1.DeleteSecretResponse], error)
}

// NewSecretServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewSecretServiceHandler(svc SecretServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	secretServiceGetSecretHandler := connect.NewUnaryHandler(
		SecretServiceGetSecretProcedure,
		svc.GetSecret,
		connect.WithSchema(secretServiceGetSecretMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	secretServiceListSecretsHandler := connect.NewUnaryHandler(
		SecretServiceListSecretsProcedure,
		svc.ListSecrets,
		connect.WithSchema(secretServiceListSecretsMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	secretServiceCreateSecretHandler := connect.NewUnaryHandler(
		SecretServiceCreateSecretProcedure,
		svc.CreateSecret,
		connect.WithSchema(secretServiceCreateSecretMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	secretServiceUpdateSecretHandler := connect.NewUnaryHandler(
		SecretServiceUpdateSecretProcedure,
		svc.UpdateSecret,
		connect.WithSchema(secretServiceUpdateSecretMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	secretServiceDeleteSecretHandler := connect.NewUnaryHandler(
		SecretServiceDeleteSecretProcedure,
		svc.DeleteSecret,
		connect.WithSchema(secretServiceDeleteSecretMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/redpanda.api.dataplane.v1alpha1.SecretService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case SecretServiceGetSecretProcedure:
			secretServiceGetSecretHandler.ServeHTTP(w, r)
		case SecretServiceListSecretsProcedure:
			secretServiceListSecretsHandler.ServeHTTP(w, r)
		case SecretServiceCreateSecretProcedure:
			secretServiceCreateSecretHandler.ServeHTTP(w, r)
		case SecretServiceUpdateSecretProcedure:
			secretServiceUpdateSecretHandler.ServeHTTP(w, r)
		case SecretServiceDeleteSecretProcedure:
			secretServiceDeleteSecretHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedSecretServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedSecretServiceHandler struct{}

func (UnimplementedSecretServiceHandler) GetSecret(context.Context, *connect.Request[v1alpha1.GetSecretRequest]) (*connect.Response[v1alpha1.GetSecretResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("redpanda.api.dataplane.v1alpha1.SecretService.GetSecret is not implemented"))
}

func (UnimplementedSecretServiceHandler) ListSecrets(context.Context, *connect.Request[v1alpha1.ListSecretsRequest]) (*connect.Response[v1alpha1.ListSecretsResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("redpanda.api.dataplane.v1alpha1.SecretService.ListSecrets is not implemented"))
}

func (UnimplementedSecretServiceHandler) CreateSecret(context.Context, *connect.Request[v1alpha1.CreateSecretRequest]) (*connect.Response[v1alpha1.CreateSecretResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("redpanda.api.dataplane.v1alpha1.SecretService.CreateSecret is not implemented"))
}

func (UnimplementedSecretServiceHandler) UpdateSecret(context.Context, *connect.Request[v1alpha1.UpdateSecretRequest]) (*connect.Response[v1alpha1.UpdateSecretResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("redpanda.api.dataplane.v1alpha1.SecretService.UpdateSecret is not implemented"))
}

func (UnimplementedSecretServiceHandler) DeleteSecret(context.Context, *connect.Request[v1alpha1.DeleteSecretRequest]) (*connect.Response[v1alpha1.DeleteSecretResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("redpanda.api.dataplane.v1alpha1.SecretService.DeleteSecret is not implemented"))
}
