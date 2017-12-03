const path = require("path");
const ExamplePlugin = require("./examplePlugin.js");
const webpack = require("webpack");
const config = require("./config")
const HTMLWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "./build")
    },
    module: {
        rules: [
            ...(config.dev.useEslint ? [{
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    emitWarning: !config.dev.showEslintErrorsInOverlay
                }
            }] : []),
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    plugins: [
        new ExamplePlugin(),
        // new HTMLWebpackPlugin({
        //     filename: path.join(__dirname, "./src/index.html"),
        //     templatee: path.join(__dirname, "./src/index.html"),
        //     inject: true
        // })
    ]
}