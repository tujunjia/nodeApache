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
    console.log(data)
    console.log(typeof data)
    var students = JSON.parse(data)
    console.log(students)
    console.log(typeof students)

    app.engine('html', require('express-art-template'));
    res.render('index.html', {
      students:students,
    })

  })
})

app.listen('3000', function(error, data){
  if (error) {
    return console.log("server error")
  }
  console.log('server is runing ...')
})