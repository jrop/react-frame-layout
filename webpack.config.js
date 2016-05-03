module.exports = {
	entry: './test/index-source.js',
	devtool: 'inline-source-map',
	output: {
		filename: './test/index.js',
	},
	module: {
		loaders: [ {
			test: /\.js$/,
			loader: 'babel-loader',
		} ],
	},
}
