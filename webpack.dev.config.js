var webpack = require('webpack');

module.exports = {

   entry: [
       './app/index.js',
       'webpack-dev-server/client?http://0.0.0.0:3001',
       'webpack/hot/only-dev-server'
   ],

   output: {
       path: '/',
       filename: 'bundle.js'
   },

   devServer: {
       hot: true,
       filename: 'bundle.js',
       publicPath: '/',
       historyApiFallback: true,
       contentBase: './public',
       proxy: {
           "**": "http://localhost:3000"
       }
   },

   plugins: [
       new webpack.HotModuleReplacementPlugin(),
       new webpack.optimize.OccurrenceOrderPlugin(),
       new webpack.NoEmitOnErrorsPlugin()
   ],

   module: {
       loaders: [
           {
               test: /\.(js|jsx)$/,
               loaders: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
                   cacheDirectory: true,
                   presets: ['es2015', 'react']
               })],
               exclude: /node_modules/,
           }
       ]
   }
};
