package types

const (
	// ModuleName defines the module name
	ModuleName = "reward"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_reward"
)

var (
	ParamsKey = []byte("p_reward")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
