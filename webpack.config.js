const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'  // Path to your HTML template
      })
    ],
    module: {
      rules: [
       {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
       },
       // ...
      ]
     }
  }
  // entry: './src/index.js',
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './src/index.html'  // Path to your HTML template
  //   })
  // ]
};


//sass
// module.exports = {
//   // ...
//   module: {
//    rules: [
//     {
//      test: /\.scss$/,
//      use: ["style-loader", "css-loader", "sass-loader"]
//     },
//     // ...
//    ]
//   }
//  };