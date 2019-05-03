const config = require("./config");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: config.host,
            port: config.port,
            proxy: config.localUrl,
            files: ['{include,template-parts,woocommerce}/**/*.php', '*.php']
        })
    ]
};
