
const fs = require('fs');
const webpack = require("webpack");
const path = require('path');
const config = require("./webpack.config.js");
const WebpackDevServer = require('webpack-dev-server');
const exec = require('child_process').exec;

for(let i in config.entry){
  config.entry[i].unshift("webpack-dev-server/client?http://localhost:9090/","webpack/hot/dev-server")
}
//config.plugins.push(new webpack.HotModuleReplacementPlugin());
let compiler = webpack(config);
const configAddress = require('./webpack.dll.config.js');

  let server = new WebpackDevServer(compiler,{
    contentBase:path.join(__dirname, configAddress.site + '/' + configAddress.siteStatic),
    publicPath:'/'+configAddress.siteStatic+'/',
    host:'localhost',
    inline:true,
    hot:true,
    compress:true
  });
  server.listen(9090,function(err){
    if(err){
      console.log(err)
    }
  });
fs.watch( configAddress.site + '/src/view/',function(){  //监控到模板的变化 所有模块全部打包 存在性能上的不足
	exec('npm run build',function(err,stdout,stderr){
		if(err){
		}else{
		}
	})
});