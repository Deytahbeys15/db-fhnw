var webpack = require('webpack');

 
module.exports = {
 devtool: 'source-map',
 entry: {
  main:'./main.js'
 },
 output: { path: './dist', filename: '[name].js' },
 module: {
  loaders: [
   {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: { presets: ['es2015', 'react'] }
   },
   { 
    test: /\.css$/,
    loader: "style-loader!css-loader"
   },
   {
    test: /.*\.(gif|png|jpe?g|svg)$/i,
    loaders: [
     'file?hash=sha512&digest=hex&name=[name].[ext]',
     'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
    ]
   },
   {
    test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    loader : 'file-loader'
   }
  ]
 }
};



// prod
/*
 plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
*/
