import { defineCliConfig } from 'sanity/cli';
import { UserConfig } from 'vite';

export default defineCliConfig({
	api: {
		projectId: 'omwsdwsk',
		dataset: 'production'
	},
	vite: (viteConfig: UserConfig): UserConfig => ({
		...viteConfig,
		build: {
			...viteConfig.build,
			outDir: '../site/static/studio'
		}
	})
});
