const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

/** @type {import("postcss-load-config").Config} */
module.exports = {
	plugins: [postcssPresetEnv({ stage: 1 }), cssnano({ preset: 'default' })]
};
