const path = require('path');
const fs = require('fs')
const merge = require('deepmerge')

function withFramewordConfig(defaultConfig = {}) {
    const framework = 'shopify';
    // const framework = 'bigcommerce';
    // '../shopify/next.config'
    console.log(path.join('../', framework, 'next.config'))
    const frameworkNextConfig = require(path.join('../', framework, 'next.config'));
    console.log('frameworkNextConfig', frameworkNextConfig)
    const config = merge(defaultConfig, frameworkNextConfig);
    console.log('config', config)
    const tsPath = path.join(process.cwd(), 'tsconfig.json')
    const tsConfig = require(tsPath);
    tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`];
    tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`];
    // save file with new config ts
    fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2))
    return config;
}

module.exports = { withFramewordConfig }