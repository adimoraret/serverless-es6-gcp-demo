var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: { index: './index.js' },
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()]
}