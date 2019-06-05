const path = require("path");
const pack = require('./package.json')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssOptions = {
  plugins: {
    autoprefixer: {
      browsers: [
        'ie >= 11',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10',
      ],
    },
    'postcss-flexbugs-fixes': {},
  },
}

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: `${pack.name}-${pack.version}.js`,
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
      },
      { 
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              minimize: false,
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
            options: {
              // preferPathResolver: 'webpack',
              functions: {
                'namespace()' : () => {
                  let result = pack.namespace
                  result = sassUtils.castToSass(result);
                  return result
                }
              }
            },
          },
          {
            loader: 'postcss-loader',
            options: postcssOptions,
          },
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};
