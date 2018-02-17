const path = require("path");

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"],
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "vuex$": "vuex/dist/vuex.esm.js"
        }
    },
};
