const path = require('path');
const webpack = require('webpack');

const serverConfig = require('./server.config');

const ifDev = process.env.NODE_ENV === 'dev';

var entry = {
    chuncai: [path.join(__dirname, `../src/${ifDev ? 'index' : 'chuncai'}`)]
};

let plugins = [];

if (ifDev) {
    entry.chuncai.push(`webpack-dev-server/client?http://${serverConfig.domain}:${serverConfig.port}`);
}
else {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        beautify: false,
        output: {
            comments: false
        },
        compress: {
            warnings: false,
            screw_ie8: false
        }
    }));
}

module.exports = {
    devtool: false,
    //页面入口文件配置
    entry: entry,
    //入口文件输出配置
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/dist/',
        library: 'chuncai',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    //插件项
    plugins: plugins,
    module: {
        //加载器配置
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'ts-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }]
        }, {
            test: /\.scss$/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                },
                'postcss-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg)$/,
            use: ['url-loader']
        }]
    },
    //其它解决方案配置
    resolve: {
        // root: path.join(__dirname, 'src'),
        extensions: ['.ts', '.js', '.json', '.scss'],
        alias: { // 设置别名

        }
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000
    },
    externals: {
    }
};
