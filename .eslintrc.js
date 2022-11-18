module.exports = {
    'env': {
        'node': true,
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'strict': ['error', 'global'],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single', 'avoid-escape'],
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'always',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never',
        }],
    },
};
