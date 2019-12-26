//引入http核心模块
var http = require('http')
//引入fs核心模块
var fs = require('fs')
//引入art-template核心模块
var aTemplate = require("art-template");


var urlperson = require('url')

//www目录地址path
var wwwpath = 'D:\\www\\nodeApache'
//创建一个http服务
var server = http.createServer()


//自创建模块加载
var str = require('./item.js')
console.log(str)

server.on('request',function(req, res){
  
  res.setHeader('Content-Type', 'text/html');  //设置数据返回的格式
  var url = req.url
  var pathurl = urlperson.parse(url)
  var pathurall = urlperson.parse(url)
  
  var pathurl = pathurl.pathname
  // console.log(pathurl)
  // console.log(url)
  if (pathurl === '/') {
    fs.readFile('./view/index.html',function(error,data){
      if (error) {
        console.log('index.html 文件读取错误')
        return res.end ('404 nont found.')
      }
      fs.readdir(wwwpath,function(error,datainner){
        if (error) {
          console.log('文件夹读取错误')
          return res.end('文件读取错误')
        }
        data = data.toString()
        // console.log(datainner)
        var htmlStr = aTemplate.render(data,{
          data : datainner,
        })
        // console.log(htmlStr)
        // res.setHeader('Content-Length',Buffer.byteLength(htmlStr))  //设置返回数据的长度 
        res.end(htmlStr)
      })
    })
  } else if ( pathurl.indexOf('/public/') === 0) {
    fs.readFile('.' + url, function(error, data){
      if (error) {
        console.log('public静态读取错误')
        return res.end ('404 nont found.')
      }
      res.setHeader('Content-Type', 'text/css');  //设置数据返回的格式
      return res.end (data)
    })
  } else if (pathurl === '/www') {
    
      fs.readFile('./view/item.html', function (error, data) {
        if (error) {
          return res.end('模板文件index.html读取错误')
        }
        var data_html = data.toString()
        fs.readdir('./www/', function (error, data) {
          if (error) {
            console.log('www目录读取错误')
            return res.end('www目录读取错误')
          }
        console.log(data)
        var htmlStr = aTemplate.render(data_html,{
          data : data,
          title : '服务端渲染页面'
        })
        console.log(htmlStr)
        res.end(htmlStr)
      })
    })
  } else if (pathurl === '/item/') {
    console.log('来到item页面')
    fs.readFile('./view/item.html', function(error, data){
    if (error) {
      return res.end ('404 cosole')
    }
    res.end (data)
   })
  } else if (pathurl === '/rotate/') {
    console.log('来到rotate页面')
    fs.readFile('./view/rotate.html', function(error, data){
    if (error) {
      return res.end ('404 cosole')
    }
    res.end (data)
   })
  } else if (pathurl === '/published/') {
    var pramas = pathurall.query
    console.log(pathurall)
    // console.log(pramas)
    console.log('sssssssssssss')
    res.statusCode = 302
    res.setHeader('location','/')
    res.end()
  } else {  
    // console.log('来到404页面')
    fs.readFile('./view/404.html', function(error, data){
    if (error) {
      return res.end ('404 cosole')
    }
    res.end (data)
   })
  }
})

// 监听端口
server.listen('3000',function(error, data){
  if (error) {
    console.log('node connet error')
  } else {
    console.log('server is runing ...')
  }
})