 var path = require('path');
 var webpack = require('webpack');
     
 module.exports = {
     entry: './Blog/Blog.es6.js',
     output: {
         filename: 'blog.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react'],
                     plugins : []
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool : 'source-map'
 };