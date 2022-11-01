const { defineConfig } = require('@vue/cli-service');
const { PrimeVueResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        dts: true,
        resolvers: [PrimeVueResolver],
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView'],
          },
        ],
      }),
    ],
  },
});
