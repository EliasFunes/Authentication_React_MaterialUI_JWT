const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    //the entry file for the bundle
    entry:path.join(__dirname, '/app/client/app.js'),

	//the bundle file we will get in the result
	output:{
		path:path.join(__dirname, 'build'),
		filename:'bundle.js'
	},

	module: {
		//apply loaders to files that meet given conditions
		rules: [
			{
				// test: /\.jsx?$/,
                test:/.js$/,
                loader:'babel-loader',
                include:path.join(__dirname, 'app'),
                exclude: /node_modules/,
                options:{
					presets:['es2015', 'react']
				}	
			}
		]
	},
    plugins: [
        new HtmlWebpackPlugin({
            template:'./app/server/static/index.html',
            filename:'index.html',
            inject:'body'
        })
    ]
}