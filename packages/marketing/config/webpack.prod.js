const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')

const prodConfig = {

}

module.exports = merge(commonConfig, prodConfig)