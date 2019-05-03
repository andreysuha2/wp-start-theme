const config = require("./config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: './js/bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "/css/[name].css",
            chunkFilename: "[id].css"
        }),
        new BrowserSyncPlugin({
            host: config.host,
            port: config.port,
            proxy: config.localUrl,
            files: ['{include,template-parts,woocommerce}/**/*.php', '*.php']
        })
    ]
};
