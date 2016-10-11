module.exports = {
    entry: './browser/index.js',
    output: {
        filename: './public/bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
    }
};