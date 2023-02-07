module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.tsx', '.ts', '.js', '.json']
            },
            typescript: {}
        }
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'import/extensions': [
            ERROR,
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                js: 'never'
            }
        ]
    }
};
