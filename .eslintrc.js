module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },

    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
    },
    rules: {
        'linebreak-style': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'no-param-reassign': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
