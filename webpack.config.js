const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' //path.resolve(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [{
                test: /.html$/,
                use: {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            },
            {
                test: /.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /.san$/,
                include: /src/,
                use: [
                    { loader: 'san-loader' }
                ]
            }
        ]
    }
};