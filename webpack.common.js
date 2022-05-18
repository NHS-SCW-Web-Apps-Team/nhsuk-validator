const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'nhs-validator.js',
        library: {
            name: 'nhsValidator',
            type: 'umd'
        },
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false,
        },
    },
    externals: {
        jquery: 'jQuery',
        dayjs: 'dayjs',
        'libphonenumber-js': 'libphonenumber-js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        require("@babel/plugin-transform-async-to-generator"),
                        require("@babel/plugin-transform-arrow-functions"),
                        require("@babel/plugin-transform-modules-commonjs")
                    ],
                }
            }
        }]
    }
};
