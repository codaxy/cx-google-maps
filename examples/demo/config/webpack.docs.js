var webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    merge = require("webpack-merge"),
    common = require("./webpack.config"),
    path = require("path"),
    p = p => path.join(__dirname, "../", p || "");

var sass = new ExtractTextPlugin({
    filename: "app.css",
    allChunks: true
});

var specific = {
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: sass.extract(["css-loader", "sass-loader"])
            },
            {
                test: /\.css$/,
                loaders: sass.extract(["css-loader"])
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        sass,
        new CopyWebpackPlugin([
            {
                from: p("assets"),
                to: p("../../docs/assets")
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: p("app/404.html"),
                to: p("../../docs")
            }
        ])
    ],

    output: {
        path: p("../../docs"),
        publicPath: "/cx-google-maps"
    }
};

module.exports = merge(common, specific);
