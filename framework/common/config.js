const path = require('path');
const fs = require('fs');
const merge = require('deepmerge');
const prettier = require('prettier');

const ALLOWED_FW = ['shopify', 'bigcommerce', 'shopify_local'];
const FALLBACK_FW = 'shopify';

function withFrameworkConfig(defaultConfig = {}) {
    let framework = defaultConfig?.framework.name;
    if (!framework) {
        throw new Error('The api framework is missing, please add a valid provider!!!')
    }

    if(!ALLOWED_FW.includes(framework))
    {
        throw new Error(`The api framework: ${framework} cannot be found, please use one of ${ALLOWED_FW.join(', ')}`)
    }

    if (framework === 'shopify_local') {
        framework = FALLBACK_FW;
    }
    // const framework = 'bigcommerce';
    // '../shopify/next.config'
    console.log(path.join('../', framework, 'next.config'))
    const frameworkNextConfig = require(path.join('../', framework, 'next.config'));
    console.log('frameworkNextConfig', frameworkNextConfig)
    const config = merge(defaultConfig, frameworkNextConfig);
    console.log('config', config)
    const tsPath = path.join(process.cwd(), 'tsconfig.json')
    console.log(113, tsPath)
    const tsConfig = require(tsPath);
    console.log(112)
    tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`];
    tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`];
    console.log(11)
    // save file with new config ts
    fs.writeFileSync(tsPath, 
        prettier.format(JSON.stringify(tsConfig), { parser: 'json'})
    );
    return config;
}

module.exports = { withFrameworkConfig }