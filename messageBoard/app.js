//引包
var express = require('express')
//模板包引用
var artTemplate = require('art-template')
//body-parser引入
var bodyParser = require('body-parser')

var app = express()

// view engine setup
app.engine('art', require('express-art-template'));

var comment = [
  {
    title:'张三',
    message:'评论内容',
    dataTime:'2020-01-06'
  },
  {
    title:'张四',
    message:'评论内容',
    dataTime:'2020-01-06'
  },
  {
    title:'张五',
    message:'评论内容',
    dataTime:'2020-01-06'
  },
  {
    title:'张六',
    message:'评论内容',
    dataTime:'2020-01-06'
  },
  {
    title:'张三',
    message:'评论内容',
    dataTime:'2020-01-06'
  },
  {
    title:'张三',
    message:'评论内容',
    dataTime:'2020-01-06'
  },
  {
    title:'张三',
    message:'评论内容',
    dataTime:'2020-01-06'
  },
  
]
//开放静态资源文件
app.use('/public/', express.static('./public/'))
//路由主页
app.get('/', function(req, res){
  console.log('comment==>',comment)

  res.render('index.art', {
    comment:comment,
    title:"评论首页",
  })
})
//评论页面路由
app.get('/comment/', function(req, res){
  res.render('publish.art', {
    title:"评论添加页面",
  })
})

//路由评论发表(get)
app.get('/publish/', function(req, res){
  var dataComment = req.query
  console.log('dataComment==>',dataComment)
  dataComment.dataTime = '2020/01/06'
  comment.unshift(dataComment)
  console.log('comment in publish==>',comment)

  // res.status(302)
  // res.statusCode('301')
    res.statusCode = 302
    res.setHeader('location', '/')
    res.end()
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//路由评论发表(post)
app.post('/publish', function(req, res){
  var dataComment = req.body
  dataComment.dataTime = '2020/01/06'
  comment.unshift(dataComment)
  res.statusCode = 302
  res.setHeader('location', '/')
  res.end()
})


//端口监听
app.listen('3000', function(error, data){
  if (error) {
    return console.log(error)
    
  }
  console.log('server is runing ...')
})