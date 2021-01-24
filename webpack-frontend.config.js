const path = require("path")
const env = process.env.NODE_ENV

module.exports = {
    entry: {
        index: "./src/index.tsx",
        card:  "./src/card-page-index.tsx"
    },
    output: {
        filename: "[name]_bundle.js",
        path: path.resolve(__dirname, "dist-frontend")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig-frontend.json"
                    }
                }]
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    mode: env || 'development',
    devtool: 'source-map',
    watch: true
}

