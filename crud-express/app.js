// 第三包引入
var express = require('express')
var artTemplate = require('art-template')
var bodyParser = require('body-parser')
// nodeJs核心模块加载
var fs = require('fs')
//路由加载
var router = require('./router')
//实例化服务
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('html', require('express-art-template'));


app.use(router)

app.listen('3000', function(error, data){
  if (error) {
    return console.log("server error")
  }
  console.log('server is runing ...')
})