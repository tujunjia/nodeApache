//引包
var express = require('express')

var artTemplate = require('art-template')


var app = express()

// view engine setup
app.engine('art', require('express-art-template'));

var comment = [
  {
    title:'张三',
    message:'评论内容',
    datsTime:'2020-01-06'
  },
  {
    title:'张四',
    message:'评论内容',
    datsTime:'2020-01-06'
  },
  {
    title:'张五',
    message:'评论内容',
    datsTime:'2020-01-06'
  },
  {
    title:'张六',
    message:'评论内容',
    datsTime:'2020-01-06'
  },
  {
    title:'张三',
    message:'评论内容',
    datsTime:'2020-01-06'
  },
  {
    title:'张三',
    message:'评论内容',
    datsTime:'2020-01-06'
  },
  {
    title:'张三',
    message:'评论内容',
    datsTime:'2020-01-06'
  },
  
]

//路由
app.get('/', function(req, res){
  res.render('index.art', {
    comment:comment,
    title:"评论首页",
  })
})


//端口监听
app.listen('3000', function(error, data){
  if (error) {
    return console.log(error)
    
  }
  console.log('server is runing ...')
})