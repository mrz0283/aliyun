'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

// 用来做路径拼接
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
})

// 导出一个对象 主要对webpack使用
module.exports = {
    context: path.resolve(__dirname, '../'),
    // 定义入口
    entry: {
        app: './src/main.js'
    },
    // 配置项目输出相关东西
    output: {
        // 定义输出的绝对路径
        path: config.build.assetsRoot,
        // 打包后文件名称   对应的是   entry的key名称
        filename: '[name].js',
        // 设置请求静态资源的路径
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        // 配置该项后在 import require 后可以不使用文件名
        extensions: ['.js', '.vue', '.json'],
        // 别名   每一个key对应一个配置的路径
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    // 处理项目中不同的模块     webpack中根据loader对文件进行不同的编译（根据后缀名进行匹配）
    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                // 对应正则     对应后缀名称
                test: /\.vue$/,
                // 处理对应后缀名的文件规则
                loader: 'vue-loader',
                // enfore:'pre'     在编译前对代码进行检测
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // 指定loader处理的目录
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                // 配置loader对应的一些参数
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}
