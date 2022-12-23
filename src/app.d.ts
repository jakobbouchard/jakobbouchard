// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		previewMode: boolean;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

// Helper for getting an Array's type
type Unpacked<T> = T extends (infer U)[] ? U : T;
