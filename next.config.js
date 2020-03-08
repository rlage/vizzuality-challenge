const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? 'https://rlage.github.io/vizzuality-challenge/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: 'url-loader',
        options: {
            limit: 100000
        }
      }
    });

    // console.log(config.module.rules, dev);
    
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })

    // Important: return the modified config
    return config
  }/*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
}