const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const dir = path.resolve(__dirname, '');

module.exports = {
	entry: dir + '/src/index.js',
	output: {
		path: dir + '/dist',
		filename: '[name].js'
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
					loader: 'babel-loader?stage=0',
					options: {
						presets: ['react', 'es2015']
					}
				}
			}, {
				test: /\.css|less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	},
	plugins: [
		// html 模板插件
		new HtmlWebpackPlugin({template:dir + '/index.html'}),
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
	devServer:{
        inline: true,
        hot:true,
        historyApiFallback: true
    }
}
