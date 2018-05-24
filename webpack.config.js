const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    //devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'css/app.bundle.css',
            allChunks: true,
        }),
        // new CopyWebpackPlugin([{
        //     from: './src/images',
        //     to: 'images'
        // }])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader?sourceMap',
                    options: {
                        presets: ['env']
                    },
                }
            },
            {
                test:/\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader?sourceMap', 'postcss-loader?sourceMap', 'sass-loader?sourceMap'])
            }
        ]
    }
}