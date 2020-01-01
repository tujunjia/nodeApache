var express = require('express')

//创建服务器
var app = express()

//在Express中开放一个静态资源
app.use('/public/', express.static('./public/'))
//首页的处理
app.get('/', function (req , res) {
  res.send('欢迎来到首页')
})


app.listen('3000', function(error, data){
  if (error) {
    console.log('node connet error')
  } else {
    console.log('server is runing ...')
  }

})