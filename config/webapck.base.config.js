'use strict'
const path = require('path')
const vueLoaderConfig = require('./vue-loader.conf')


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    context: path.resolve(__dirname, '..'),
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.(vue)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader',
                    options: vueLoaderConfig,
                }
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },
}
