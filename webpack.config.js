module.exports = {
    module: {
        rules: [
            {
                test:/\.js/,
                excludes:/node_modules/,
                use: {
                    loader:"babel-loader"
                }
            }
        ]
    }
}