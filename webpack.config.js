const path = require('path')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')

module.exports = env => {
  const mode = env.TARGET_ENV === 'development' ? 'development' : 'production'

  return {
    mode: mode,
    context: __dirname,
    entry: './src/index.js',
    devtool: 'eval',
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.json', '.tsx']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: [/node_modules/, nodeModulesPath]
        },
        {
          include: path.resolve(__dirname, 'src'),
          test: /\.(js|jsx)$/,
          loader: 'babel-loader'
        },
        {
          test: /\.tsx?$/,
          loaders: ['babel-loader', 'ts-loader'],
          exclude: [/node_modules/, nodeModulesPath]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            }
          ]
        }
      ]
    }
  }
}
