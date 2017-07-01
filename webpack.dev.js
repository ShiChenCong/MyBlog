const webpack = require('webpack');
const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
// let autoprefixer = require('autoprefixer')
const dir = path.resolve(__dirname, '');
module.exports = {
	entry: dir + '/src/index.js',
	output: {
		path: dir + '/dist',
		filename: '[name].js',
		chunkFilename: '[name]-[id].[chunkhash:8].bundle.js'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'react', 'es2015', 'stage-0'
						],
						plugins: [
							[
								'import',
								[
									{
										libraryName: 'antd',
										style: 'css'
									}
								]
							],
							'transform-decorators-legacy'
						]
					}
				}
			}, {
				test: /\.css|less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader', {
							loader: 'postcss-loader',
							options: {
								plugins() {
									return [require('autoprefixer')()]
								}
							}
						},
						'less-loader'
					]
				}) //单独提取出来css  如果css太多打包到js里 js会很大
			}
		]
	},
	plugins: [
		// html 模板插件
		new HtmlWebpackPlugin({
			template: dir + '/index.html'
		}),
		//提取css
		new ExtractTextPlugin("[name].css"),
		// 热加载插件
		new webpack.HotModuleReplacementPlugin(),
		// 拆分依赖包JS到自己的文件
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module, count) {
				// node_modules内的任何必需模块都将提取给依赖包
				return (module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0)
			}
		})
	],
	devtool: 'cheap-module-source-map',
	devServer: {
		inline: true,
		hot: true,
		historyApiFallback: true
	}
}
