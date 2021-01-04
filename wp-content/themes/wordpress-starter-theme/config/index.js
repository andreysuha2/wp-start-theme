const path = require('path');
module.exports = {
    localUrl: 'http://0wp.local',
    entry: {
        bundle: path.resolve(__dirname, '../src/main.js'),
        editor: path.resolve(__dirname, '../src/editor.js'),
        customizer: path.resolve(__dirname, '../src/customizer.js')
    },
    devServer: require('./devServer'),
    alias: require('./aliases'),
    copy: require('./copy')
};
