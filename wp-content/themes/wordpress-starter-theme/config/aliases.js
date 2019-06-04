const path = require('path');
module.exports = {
    "@": path.resolve(__dirname, '../src'),
    "@js": path.resolve(__dirname, '../src/assets/js'),
    "@scss": path.resolve(__dirname, '../src/assets/sass'),
    "@fonts": path.resolve(__dirname, '../src/assets/fonts'),
    "@icons": path.resolve(__dirname, '../src/assets/icons'),
    "@img": path.resolve(__dirname, '../src/assets/images'),
    "@public": path.resolve(__dirname, '../src/assets'),
    "@lib/js": path.resolve(__dirname, '../src/assets/lib/js'),
    "@lib/scss": path.resolve(__dirname, '../src/assets/lib/scss'),
    "@frame": path.resolve(__dirname, '../src/framework'),
    "@components": path.resolve(__dirname, '../src/framework/components'),
    "@helpers": path.resolve(__dirname, "../src/assets/helpers")
};
