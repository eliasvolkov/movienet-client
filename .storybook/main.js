module.exports = {
    stories: ["../src/components/**/*.stories.(ts|tsx|js|jsx|mdx)"],
    addons: [
        '@storybook/preset-create-react-app',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-knobs/register',
        '@storybook/addon-storysource',
        '@storybook/addon-controls',
        '@storybook/addon-backgrounds',
        '@storybook/addon-viewport',
    ],
};
