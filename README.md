# stylelint-config-get-off-my-lawn

> A highly opinionated, [sharable config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) of [stylelint](http://stylelint.io) rules to produce beautiful, readable CSS and Sass.

![stylelint-config-get-off-my-lawn](.github/logo.jpg)

As developers, we spend more time reading code than writing it. These rules aim to make reading CSS and Sass a priority.

That means some rules will feel oppressive or "over the top" for many developers, which is fine. If you don't like it, you can get off my lawn! ... Or extend the rules and override them with the ones that bother you. Either way. 😊

This config also comes with the following plugins, and corresponding rules, baked in.

-   [stylelint](https://www.npmjs.com/package/stylelint)
-   [stylelint-a11y](https://www.npmjs.com/package/stylelint-a11y)
-   [stylelint-no-indistinguishable-colors](https://www.npmjs.com/package/stylelint-no-indistinguishable-colors)
-   [stylelint-order](https://www.npmjs.com/package/stylelint-order)
-   [stylelint-react-native](https://www.npmjs.com/package/stylelint-react-native)
-   [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
-   [stylelint-selector-no-empty](https://www.npmjs.com/package/stylelint-selector-no-empty)

Each and every single rule has been meticulously poured over and purposefully hand picked or excluded.

stylelint-config-get-off-my-lawn will automatically enable and disable plugins (and thus rules) as possible based on your `package.json` dependencies. Not using React Nati e? Cool. stylelint-react-native won't be included. I think you get the idea... 😉

There are a couple of exceptions to the automatic enable / disable, which we'll discuss in the [usage](#usage) section below.

## Install

```
$ yarn add stylelint stylwelint-config-get-off-my-lawn --dev
```

## Usage

Create a [stylelint configuration](https://stylelint.io/user-guide/configure) of your liking, extend stylelint-config-get-off-my-lawn to gain all its awesomeness, and then (optionally) adjust any rules.

```json
{
    "extends": "stylelint-config-get-off-my-lawn",
    "rules": {
        // enable additional rules, override rule options, or completely disable a rule
    }
}
```

Additionally, there are a couple of scenarios where stylwelint-config-get-off-my-lawn cannot automatically detect usage. In this case, you will need to us a configuration format that will allow you to import additional rules.

#### CSS-inJS

Becuase there are many CSS-in-JS libraries (and new ones created all the time), we cannot automatically or acruarely detect usage, so you'll need to import and add these rules manually.

```js
const cssInJs = require('stylelint-config-get-off-my-lawn/src/css-in-js');

module.exports = {
    extends: 'stylelint-config-get-off-my-lawn',
    rules: {
        ...cssInJs
    }
};
```

#### Sass / Scss

Becuase there are many ways to add sass and scss to apps, we cannot automatically or acruarely detect usage, so you'll need to import and add these rules manually.

```js
const scss = require('stylelint-config-get-off-my-lawn/src/scss');

module.exports = {
    extends: 'stylelint-config-get-off-my-lawn',
    rules: {
        ...scss
    }
};
```

## Usage With Prettier

Love stylelint-config-get-off-my-lawn? Love [prettier](https://prettier.io/)? Well you're in luck!

stylelint-config-get-off-my-lawn will automatically detect if you're project is using prettier and it will apply [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier) to turn off all rules that are unnecessary or might conflict with prettier.

## Related

-   [eslint-config-get-off-my-lawn](https://www.npmjs.com/package/eslint-config-get-off-my-lawn) - A highly opinionated, [sharable config](http://eslint.org/docs/developer-guide/shareable-configs.html) of [ESLint](http://eslint.org) rules to produce beautiful, readable JavaScript.

## License

MIT © [Michael Novotny](http://manovotny.com)
