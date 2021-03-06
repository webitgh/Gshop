module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'views': '@/views',
          'components': '@/components',
          'api': '@/api',
          'store': '@/store',
          'common': '@/common',
        }
      }
    }
  }