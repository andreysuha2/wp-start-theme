const config = require("./config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SassLintPlugin = require('sass-lint-webpack');

module.exports = {
    entry: config.entry,
    output: {
        filename: './js/[name].js',
        path: __dirname + '/dist'
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                terserOptions: {
                    output: { comments: false }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
            })
        ]
    },
    devtool: "source-map",
    resolve: {
        alias: config.alias,
        extensions: [".scss", ".sass", ".js", ".css"]
    },
    devServer: {
        host: config.devServer.host,
        port: config.devServer.port === "8000" ? "5050" : "8000",
        overlay: {
            errors: true,
            warnings: true
        },
        quiet: true,
        noInfo: true,
        clientLogLevel: 'none',
        hot: true,
        writeToDisk: true
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
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },

                ]
            },
            {
                test: /\.(png|jpe?g|svg)/i,
                exclude: [/fonts/],
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name].[ext]",
                            limit: 10000,
                            outputPath: './images/',
                            publicPath: '../images/'
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                include: [/fonts/],
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './fonts/',
                        publicPath: '../fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),
        new BrowserSyncPlugin({
            proxy: config.localUrl,
            host: config.devServer.host,
            port: config.devServer.port,
            files: [
                {
                    match: ['{include,template-parts,woocommerce}/**/*.php', '*.php'],
                    fn: function (event) {
                        if(event === "change") {
                            const bs = require("browser-sync").get("bs-webpack-plugin");
                            bs.reload();
                        }
                    }
                }
            ]
        }, {
            reload: false
        }),
        new CopyWebpackPlugin(config.copy),
        new SassLintPlugin()
    ]
};
