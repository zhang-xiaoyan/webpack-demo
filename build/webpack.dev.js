const common = require('./webpack.common');
const merge  = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        port: 8080,
        hot: true
    }
});
