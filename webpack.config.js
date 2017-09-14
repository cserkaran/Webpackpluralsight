var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({name :'shared', filename : 'shared.js'});

module.exports = {
    context: path.resolve('js'),
    // entry: ["./utils", "./app"],
    entry:{
        about:'./about_page.js',
        home:'./home_page.js',
        contact:'./contact_page.js'
    },
    output: {
        path:path.resolve('build/js'),
        publicPath:'/public/assets/js',
        filename: "[name].js"
    },
    devServer:{
        contentBase:'public'
    },
    watch: true,

    plugins:[commonsPlugin],

    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader",
                enforce: 'pre'
            }
        ]
    },
    resolve: {
        extensions: ['.js','.es6']
    }
}