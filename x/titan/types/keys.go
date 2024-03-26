package types

const (
	// ModuleName defines the module name
	ModuleName = "titan"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_titan"
)

var (
	ParamsKey = []byte("p_titan")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
