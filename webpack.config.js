const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const config = {
    mode: 'production',
    optimization: {
        minimize: true,
        moduleIds: 'deterministic',
        minimizer: [
            // This is only used in production mode
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        // We want terser to parse ecma 8 code. However, we don't want it
                        // to apply any minification steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the 'compress' and 'output'
                        // sections only apply transformations that are ecma 5 safe
                        // https://github.com/facebook/create-react-app/pull/4234
                        ecma: 2018,
                    },
                    compress: {
                        ecma: 5,
                        // Disabled because of an issue with Uglify breaking seemingly valid code:
                        // https://github.com/facebook/create-react-app/issues/2376
                        // Pending further investigation:
                        // https://github.com/mishoo/UglifyJS2/issues/2011
                        comparisons: false,
                        // Disabled because of an issue with Terser breaking valid code:
                        // https://github.com/facebook/create-react-app/issues/5250
                        // Pending further investigation:
                        // https://github.com/terser-js/terser/issues/120
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        // Turned on because emoji and regex is not minified properly using default
                        // https://github.com/facebook/create-react-app/issues/2488
                        ascii_only: true,
                    },
                },
            }),
        ],
        // Automatically split vendor and commons
        // https://twitter.com/wSokra/status/969633336732905474
        // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
        splitChunks: {
            chunks: 'all',
            name: false,
        },
        // Keep the runtime chunk separated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        // https://github.com/facebook/create-react-app/issues/5358
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        pathinfo: false,
        // There will be one main bundle, and one file per asynchronous chunk.
        // In development, it does not produce real files.
        filename: 'static/js/[name].[contenthash:8].js',
        // There are also additional JS chunk files if you use code splitting.
        chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
        // webpack uses `publicPath` to determine where the app is being served from.
        // It requires a trailing slash, or the file assets will get an incorrect path.
        // We inferred the "public path" (such as / or /my-project) from homepage.
        publicPath: '/',
        // this defaults to 'window', but by setting it to 'this' then
        // module chunks which are built will work in web workers as well.
        globalObject: 'this',
    },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'bundle.[contenthash].js',
    //     publicPath: '/',
    // },
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic',
                                },
                            ],
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            [
                                '@babel/plugin-transform-runtime',
                                {
                                    regenerator: true,
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new WebpackManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: '/',
            generate: (seed, files, entrypoints) => {
                const manifestFiles = files.reduce((manifest, file) => {
                    const newManifest = { ...manifest, [file.name]: file.path };
                    return newManifest;
                }, seed);
                const entrypointFiles = entrypoints.main.filter(fileName => !fileName.endsWith('.map'));

                return {
                    files: manifestFiles,
                    entrypoints: entrypointFiles,
                };
            },
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '../dist/',
                    globOptions: {
                        ignore: ['**/*.html'],
                    },
                },
            ],
        }),
    ],
    devtool: false,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true,
    },
    performance: {
        hints: 'warning',
    },
};

module.exports = config;
