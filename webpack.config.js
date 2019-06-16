const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

var pathToClean = ['./dist'];

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.vue$/, use: 'vue-loader' },
            {
                test: /\.(ttf|svg|wof)$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.(jpg|jpeg|png|tiff|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8080,
                        name: "static/images/[hash:8]-[name].[ext]"
                    }
                }
            },
        ]
    },
};