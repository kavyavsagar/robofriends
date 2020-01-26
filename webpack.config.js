module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname+'/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		},
		{
			test: /\.(css|scss)$/,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			use: ['file-loader']
		},
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['eslint-loader']
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}

}