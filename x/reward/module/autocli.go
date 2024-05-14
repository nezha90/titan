package reward

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "titan/api/titan/reward"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod:      "CreateVoucher",
					Use:            "create-voucher [amounts] [beneficiary]",
					Short:          "Send a create-voucher tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "amounts"}, {ProtoField: "beneficiary"}},
				},
				{
					RpcMethod:      "ExtractVoucher",
					Use:            "extract-voucher [beneficiary]",
					Short:          "Send a extract-voucher tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "beneficiary"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
