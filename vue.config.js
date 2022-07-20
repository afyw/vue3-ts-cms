const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  publicPath: './',
  configureWebpack: {
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      })
    ]
  }
})
