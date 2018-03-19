module.exports = {
    clientloaders: [
        {
          test: /\.json$/,
          use: { loader: 'json-loader' },
          exclude: /node_modules?!(\/moment-timezone)/
        },
        {
          enforce: "pre",
          test: /\.(js)|(jsx)$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
        {
          test: /\.(js)|(jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          query: { presets: ["react-app"] }
        },
        {
          test: /\.(svg|png|gif|jpg|woff|woff2|eot|ttf|svg)$/,
          use: { loader: 'url-loader' }
        },
        {
          test: /\.otf$/,
          use: { loader: 'file-loader' }
        },
        {
          test: /\.s?css$/,
          use : [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ]
        }
      ],
    serverloaders: [
        {
          test: /\.json$/,
          use: { loader: 'json-loader' },
          exclude: /node_modules?!(\/moment-timezone)/
        },
        {
          enforce: "pre",
          test: /\.(js)|(jsx)$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
        {
          test: /\.(js)|(jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          query: { presets: ["react-app"] }
        },
        {
          test: /\.(svg|png|gif|jpg|woff|woff2|eot|ttf|svg)$/,
          use: { loader: 'url-loader' }
        },
        {
          test: /\.otf$/,
          use: { loader: 'file-loader' }
        },
        {
          test: /\.s?css$/,
          use : [
            { loader: 'isomorphic-style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ]
        }
    ]
}
