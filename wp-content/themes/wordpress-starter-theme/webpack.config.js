const config = require("./config");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: './js/bundle.js'
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    devtool: "source-map",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src'),
            "@js": path.resolve(__dirname, './src/assets/js'),
            "@scss": path.resolve(__dirname, './src/assets/sass'),
            "@fonts": path.resolve(__dirname, './src/assets/fonts'),
            "@icons": path.resolve(__dirname, './src/assets/icons'),
            "@img": path.resolve(__dirname, './src/assets/images'),
            "@public": path.resolve(__dirname, './src/assets')
        },
        extensions: [".scss", ".sass", ".js", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|ico|svg)/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "./images/[hash].[ext]",
                            limit: 10000
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './fonts/'
                    }
                }, {
                    loader: 'url-loader',
                    options: {
                        name: './fonts/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "/css/[name].css",
            chunkFilename: "[id].css"
        }),
        new BrowserSyncPlugin({
            proxy: config.localUrl,
            ...config.devServer
        })
    ]
};
