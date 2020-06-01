module.exports = {
    'alpha-value-notation': 'number',
    'at-rule-empty-line-before': [
        'always',
        {
            except: ['blockless-after-same-name-blockless', 'first-nested'],
            ignore: ['after-comment']
        }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-no-empty': [
        true,
        {
            ignore: ['comments']
        }
    ],
    'block-opening-brace-newline-after': 'always',
    'color-function-notation': 'legacy',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
        'always',
        {
            except: ['first-nested'],
            ignore: ['after-comment', 'stylelint-commands']
        }
    ],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'comment-word-blacklist': ['/^TODO:/'],
    'custom-media-pattern': '^[a-z][a-z0-9-]+$',
    'custom-property-empty-line-before': 'never',
    'custom-property-pattern': '^[a-z][a-z0-9-]+$',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': [
        'named-where-possible',
        {
            ignore: ['relative']
        }
    ],
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'hue-degree-notation': 'angle',
    indentation: 4,
    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': '^[a-z][a-z-]+[a-z]$',
    'length-zero-no-unit': true,
    linebreaks: 'unix',
    'max-empty-lines': 1,
    'max-nesting-depth': [
        4,
        {
            ignore: ['blockless-at-rules', 'pseudo-classes'],
            ignoreAtRules: ['media']
        }
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'never-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': [
        true,
        {
            // Change this to `true` once this issue is fixed.
            // https://github.com/stylelint/stylelint/issues/4683
            disallowInList: false
        }
    ],
    'no-empty-first-line': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'never',
    'number-max-precision': 2,
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
        'always',
        {
            except: ['after-single-line-comment', 'first-nested'],
            ignore: ['after-comment']
        }
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [
        '^[a-z](?:-[a-z\\d]|[a-z\\d])*$',
        {
            resolveNestedSelectors: true
        }
    ],
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-id-pattern': '^[a-z][a-z0-9-]+$',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-before': 'never',
    'selector-max-compound-selectors': 4,
    'selector-max-empty-lines': 0,
    'selector-max-id': 0,
    'selector-max-type': [
        0,
        {
            ignore: ['child', 'compounded', 'descendant', 'next-sibling']
        }
    ],
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'unicode-bom': 'never',
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': true
};
