'use strict'
// 用来合并对象
const merge = require('webpack-merge')
//  prodEnv 是一个对象
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
})
