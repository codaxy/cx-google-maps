var webpack = require("webpack"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    { CleanWebpackPlugin } = require("clean-webpack-plugin"),
    merge = require("webpack-merge"),
    common = require("./webpack.config"),
    path = require("path"),
    p = p => path.join(__dirname, "../", p || "");

var specific = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                loaders: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].css"
        }),
        new CopyWebpackPlugin([{
            from: p("./assets"),
            to: p("../../docs/assets")
        }]),
        new CleanWebpackPlugin()
    ],

    output: {
        path: p("../../docs"),
        publicPath: "/"
    }
};

module.exports = merge(common, specific);