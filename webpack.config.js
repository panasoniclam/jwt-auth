const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') ;

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'index_bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
}