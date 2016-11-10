var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.scss$/, 
        loaders: ['style', 'css', 'postcss-loader','sass']
      }

      // ,{
      //   test: /\.css$/, 
      //   loader: "style-loader"
      // },{
      //   test: /\.css$/,
      //   loader: 'css-loader',
      //   query: {
      //       modules: true,
      //       localIdentName: '[name]__[local]___[hash:base64:5]'
      //   }
      // }

    ]
  }
};
