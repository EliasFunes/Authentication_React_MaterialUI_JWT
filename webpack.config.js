const path = require('path');

module.exports = {
	//the entry file for the bundle
	entry:path.join(__dirname, '/app/client/src/app.js'),

	//the bundle file we will get in the result
	output:{
		path:path.join(__dirname, '/app/client/dist/js'),
		filename:'app.js'
	},

	module: {
		//apply loaders to files that meet given conditions
		rules: [
			{
				// test: /\.jsx?$/,
                test:/.js$/,
				include:path.join(__dirname, '/app/client/src'),
				loader:'babel-loader',
				options:{
					presets:['es2015', 'react']
				}	
			}
		]
	}
}