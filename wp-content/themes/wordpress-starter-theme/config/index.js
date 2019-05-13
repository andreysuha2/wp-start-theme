const path = require('path');
module.exports = {
    localUrl: 'http://test-a.test',
    entry: {
        bundle: path.resolve(__dirname, '../src/main.js'),
        customizer: path.resolve(__dirname, '../src/customizer.js')
    },
    devServer: require('./devServer'),
    alias: require('./aliases'),
    copy: require('./copy')
};
