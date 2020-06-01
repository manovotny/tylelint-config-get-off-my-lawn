module.exports = {
    'scss/at-each-key-value-single-line': true,
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-named-arguments': 'never',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-if-no-null': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-named-arguments': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/comment-no-empty': true,
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/dimension-no-non-numeric-values': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-after': [
        'always',
        {
            except: ['last-nested', 'before-comment', 'before-dollar-variable'],
            ignore: ['before-comment', 'inside-single-line-block']
        }
    ],
    'scss/dollar-variable-empty-line-before': [
        'always',
        {
            except: ['after-comment', 'after-dollar-variable', 'first-nested']
        }
    ],
    'scss/dollar-variable-first-in-block': [
        true,
        {
            ignore: ['comments', 'imports']
        }
    ],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/double-slash-comment-empty-line-before': [
        'always',
        {
            except: ['first-nested'],
            ignore: ['between-comments', 'stylelint-commands']
        }
    ],
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/function-color-relative': true,
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/function-unquote-no-unquoted-strings-inside': true,
    'scss/map-keys-quotes': 'always',
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-mixins': true,
    'scss/no-global-function-names': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/selector-no-union-class-name': true
};
