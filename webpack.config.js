const path = require('path');

module.exports = {
	//the entry file for the bundle
	entry:path.join(__dirname, '/client/src/app.jsx'),

	//the bundle file we will get in the result
	output:{
		path:path.join(__dirname, 'client/dist/js'),
		filename:'app.js'
	},

	module: {
		//apply loaders to files that meet given conditions
		rules: [
			{
				test: /\.jsx?$/,
				include:path.join(__dirname, '/client/src'),
				loader:'babel-loader',
				options:{
					presets:['es2015', 'react']
				}	
			}
		]
	}
}