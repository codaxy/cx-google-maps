const webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    merge = require("webpack-merge"),
    path = require("path"),
    babelCfg = require("./babel.config"),
    p = p => path.join(__dirname, "../", p || "");

module.exports = {
    resolve: {
        alias: {
            app: p("app")
        }
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                // add here any ES6 based library
                include: /[\\\/](app|cx|cx-react|cx-google-maps|cx-theme-\w*)[\\\/]/,
                // react-google-maps should not be built using babel
                exclude: /react-google-maps/,
                //add here any ES6 based library
                loader: "babel-loader",
                query: babelCfg
            },
            {
                test: /\.(png|jpg)/,
                loader: "file-loader"
            }
        ]
    },
    entry: {
        vendor: ["cx-react", p("app/polyfill.js")],
        app: [p("app/index.js")]
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),
        new HtmlWebpackPlugin({
            template: p("app/index.html"),
            hash: true
        })
    ]
};
