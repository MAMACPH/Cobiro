const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {

	return {
		context: path.resolve(__dirname, './src'),
		entry: {
			bundle: './index.js',
		},
		mode: env.NODE_ENV,
		output: {
			path: path.resolve(__dirname, './web/includes'),
			publicPath: '/web/includes/',
			filename: 'js/[name].[contenthash].js'
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},
				{
					test: /\.(css|scss)$/,
						use: [
							{
								loader: MiniCssExtractPlugin.loader,
								options: {
								  hmr: process.env.NODE_ENV === 'development'
								}
							},
							{
								loader: 'css-loader',
								options: { importLoaders: 2 }
							},
							{
								loader: 'postcss-loader'
							},
							{
								loader: 'sass-loader'
							}
						]
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: 'css/style.[contenthash].css',
				chunkFilename: 'css/[id].css',
			  }),
			new PurgecssPlugin({
				paths: glob.sync(
					path.join(__dirname, 'templates/**/*.twig'),
					path.join(__dirname, 'src/**/*.js')
				),
				whitelist: [
					'active',
					'expanded-accordion',
					'has-submenu',
					'has-subsubmenu',
					'expanded',
					'expand',
					'submenu-expanded'
				  ]
			}),
			new ManifestPlugin({
				filename: '../../manifest.json',
				publicPath: 'includes/'
			})
		]
	}
}
