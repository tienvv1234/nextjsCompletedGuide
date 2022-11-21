const path = require('path');
const merge = require('deepmerge')

function withFramewordConfig(defaultConfig = {}) {
    const framework = 'shopify';
    // const framework = 'bigcommerce';
    // '../shopify/next.config'
    console.log(path.join('../', framework, 'next.config'))
    const frameworkNextConfig = require(path.join('../', framework, 'next.config'));
    console.log(frameworkNextConfig)
    const config = merge(defaultConfig, frameworkNextConfig);
    console.log(config)
    return config;
}

module.exports = { withFramewordConfig }