// 第三包引入
var express = require('express')
var artTemplate = require('art-template')

// nodeJs核心模块加载
var fs = require('fs')

var app = express()

app.get('/', function(req, res){
  fs.readFile('./data.json', 'utf-8', function(error, data){
    if (error) {
      return  res.statusCode('500').end('data文件读取错误')
    }
    app.engine('html', require('express-art-template'));
    artTemplate.render('index.html', function(error, data){
      if (error) {
        return  res.statusCode('500').end('服务器升级')
      }
      console.log(data)
      res.end('hello index')
    })

  })
})

app.listen('3000', function(error, data){
  if (error) {
    return console.log("server error")
  }
  console.log('server is runing ...')
})