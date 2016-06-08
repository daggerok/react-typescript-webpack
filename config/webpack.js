const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: "./src/index.tsx",

  output: {
    filename: "./dist/bundle.js",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" }
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'react-typescript-webpack',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        quoteCharacter: '"',
        decodeEntities: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true
      }
    })
  ],

  devServer: {
    watchDelay: 100,
    progress: true,
    inline: true,
    port: 8000,
    proxy: {
      "/api": "http://localhost:8080"
    }
  }

  // // When importing a module whose path matches one of the following, just
  // // assume a corresponding global variable exists and use that instead.
  // // This is important because it allows us to avoid bundling all of our
  // // dependencies, which allows browsers to cache those libraries between builds.
  // ,externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};
