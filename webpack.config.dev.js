import path from 'path';
import webpack from 'webpack';

export default {
	devtool: '#source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.resolve(__dirname, 'src/index')
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname) + '/dist',
		publicPath: '/'
	},
	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader', exclude: [/node_modules/]},
			{test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	target: 'web'
};
