const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
	entry: {
		'main': './src/index.js'
	},

	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname, 'build'),
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: { presets: ['env', 'react'] }
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
	]
}

if(process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin()
	)
}

module.exports = config