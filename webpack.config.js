var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: ['./app/client/index.js'],
	output:{
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
	},

	module: {
		rules: [
            {
                test:/.js$/,
                loader: "babel-loader",
                include: path.join(__dirname, 'app'),
                exclude:/node_modules/,
                options: {
                    presets: ['es2015','react']
                }
            }
		]
	},
    plugins: [
        new HtmlWebpackPlugin({
            template:'./static/index.html',
            filename:'index.html',
            inject:'body'
        })
    ]
}