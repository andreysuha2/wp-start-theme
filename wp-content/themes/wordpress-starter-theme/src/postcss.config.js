const autoprefixer = require('autoprefixer');

/*
If you want to use Grid CSS,
I recommend getting to know him, read a series of articles at the link below
https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/
*/
module.exports = {
    plugins: [
        autoprefixer(
            {
                grid: true
            }
        )
    ]
};
