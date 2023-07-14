const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    /*  This fixes an issue with using context created from within shared library:
    Object.assign(config.resolve.alias, {
      '@twilio-paste/core': path.resolve('./node_modules/@twilio-paste/core'),
      '@twilio-paste/icons': path.resolve('./node_modules/@twilio-paste/icons'),
    });
*/

    return config;
  },

  babel: async (options) => ({
    ...options,
    plugins: options.plugins.filter(
      (plugin) => !(typeof plugin === 'string' && plugin.includes('plugin-transform-classes')),
    ),
  }),

  typescript: {
    // This is a temporary workaround to fix Typescript 5 support in Storybook
    reactDocgen: 'react-docgen-typescript-plugin',
  },
};
