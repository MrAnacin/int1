const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.export = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {test: /\.css$/, use:["style-loader", "css-loader"]},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "assets/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugin: [
        new CopyPlugin({
            patterns: [{from: "static", to: "static"}],
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
};