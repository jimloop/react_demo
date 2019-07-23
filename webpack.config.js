const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'),
    filename: 'index.html'
})

module.exports={
    mode: 'production',
     plugins: [
          htmlPlugin
     ],
    module: {     //所有第三方模块的配置规则
        rules: [{test: /\.js|jsx$/, loader: 'babel-loader', exclude: /node_modules/}]
    },
    resolve: {
        extensions: ['.js','.jsx','.json'],
        alias: {"@": path.join(__dirname,'./src')}
    }


}