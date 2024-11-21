module.exports = {
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/i,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        clean: true,
    },
    entry: {
        main: './src/main.js',
        index: './src/index.js',
        login: './src/login.js',
        home: './src/home.js',
    },
}