const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
const config = {
	entry: ['react-hot-loader/patch', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@assets': path.resolve(__dirname, 'src/assets'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				type: 'asset',
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin(),
	],
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	devServer: {
		static: {
			directory: './dist',
		},
		historyApiFallback: true,
		open: true,
	},
};

module.exports = (env, argv) => {
	if (argv.hot) {
		// Cannot use 'contenthash' when hot reloading is enabled.
		config.output.filename = '[name].[hash].js';
	}

	return config;
};
