var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');;

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'postcss-loader', 'sass-loader'],
  publicPath: '/dist'
});

module.exports = {
	entry: {
		main: './src/scripts/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				use: isProd ? cssProd : cssDev
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true, //gzips files
		port: 9007,
		hot: true,
		open: true,
		inline: true
	},
	plugins: [
		new HtmlWebpackPlugin({
            title: 'Dot Column Graph Demo',
            hash: true,
            template: './src/index.html'
        }),
		new ExtractTextPlugin({
			filename: 'app.css',
			disable: !isProd,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
}