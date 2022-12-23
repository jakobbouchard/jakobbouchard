// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		previewType: PreviewType;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

enum PreviewType {
	Disabled,
	Regular,
	Embed
}

// Helper for getting an Array's type
type Unpacked<T> = T extends (infer U)[] ? U : T;
