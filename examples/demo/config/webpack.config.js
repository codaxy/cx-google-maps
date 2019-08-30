const webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    path = require('path'),
    babelCfg = require('./babel.config'),
    p = p => path.join(__dirname, '../', p || '');

module.exports = {
    resolve: {
        alias: {
            app: p('app'),
            'cx-google-maps': 'cx-google-maps/src',
            //uncomment the line below to alias cx-react to cx-preact or some other React replacement library
            //'cx-react': 'cx-preact',
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                // add here any ES6 based library
                include: /[\\\/](app|cx|cx-react|cx-google-maps|cx-theme-\w*)[\\\/]/,
                // react-google-maps should not be built using babel
                exclude: /react-google-maps/,
                //add here any ES6 based library
                include: /[\\\/](app|cx|cx-react|cx-google-maps|cx-theme-\w*)[\\\/]/,
                loader: 'babel-loader',
                query: babelCfg,
            },
            {
                test: /\.(png|jpg)/,
                loader: 'file-loader',
            },
        ],
    },
    entry: {
        app: [p('app/polyfill.js'), p('app/index.js')],
    },
    output: {
        path: p('dist'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: p('app/index.html'),
            hash: true,
        }),
    ],
    optimization: {
        runtimeChunk: 'single'
    }
};
