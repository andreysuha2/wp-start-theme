// Here your can create your aliases or edit existing alias.
const path = require('path');

module.exports = {
    "@": path.resolve(__dirname, '../src'),
    "@js": path.resolve(__dirname, '../src/assets/js'),
    "@scss": path.resolve(__dirname, '../src/assets/sass'),
    "@fonts": path.resolve(__dirname, '../src/assets/fonts'),
    "@icons": path.resolve(__dirname, '../src/assets/icons'),
    "@img": path.resolve(__dirname, '../src/assets/images'),
    "@public": path.resolve(__dirname, '../src/assets')
};