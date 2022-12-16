const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

/** @type {import("postcss-load-config").Config} */
const config = {
	plugins: [
		postcssPresetEnv({
			enableClientSidePolyfills: false,
			minimumVendorImplementations: 2,
			features: { 'nesting-rules': true }
		}),
		cssnano({ preset: 'default' })
	]
};

module.exports = config;
