const webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    merge = require("webpack-merge"),
    path = require("path"),
    babelCfg = require("./babel.config"),
    p = p => path.join(__dirname, "../", p || "");

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                //add here any ES6 based library
                include: /(cx|src)/,
                loader: "babel-loader",
                query: babelCfg
            }
        ]
    },
    entry: {
        index: [p("src/index.js")]
    },
    output: {
        path: p("dist"),
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })        
    ]
};
