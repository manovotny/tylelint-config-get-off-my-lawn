const dotProp = require('dot-prop');
const readPkgUp = require('read-pkg-up');

const a11y = require('./src/a11y');
const noIndistinguishableColors = require('./src/no-indistinguishable-colors');
const order = require('./src/order');
const reactNative = require('./src/react-native');
const selectorNoEmpty = require('./src/selector-no-empty');
const stylelint = require('./src/stylelint');

const pkg = readPkgUp.sync() || {};

const getUsage = (dependency) =>
    dotProp.get(pkg, `packageJson.dependencies.${dependency}`) ||
    dotProp.get(pkg, `packageJson.devDependencies.${dependency}`);

const config = {
    plugins: [
        'stylelint-a11y',
        'stylelint-no-indistinguishable-colors',
        'stylelint-order',
        'stylelint-selector-no-empty',
        'stylelint-scss'
    ],
    rules: {
        ...a11y,
        ...noIndistinguishableColors,
        ...order,
        ...selectorNoEmpty,
        ...stylelint
    }
};

if (getUsage('prettier')) {
    config.rules = {
        ...config.rules,
        ...require('stylelint-config-prettier').rules
    };
}

if (getUsage('react-native')) {
    config.plugins.push('stylelint-react-native');
    config.rules = {
        ...config.rules,
        ...reactNative
    };
}

module.exports = config;
