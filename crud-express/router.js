//模块的引用
var express = require('express')
var fs = require('fs')
var artTemplate = require('art-template')
// var artTemplate = require('express-art-template')

//创建路由容器
var router = express.Router()
//实例化服务
var app = express()


/**
 *首页渲染路由 
 */
router.get('/students', function(req, res) {
  fs.readFile('./data.json', 'utf-8', function(error, data){
    if (error) {
      return  res.status('500').end('data文件读取错误')
    }
    var students = JSON.parse(data).students
    console.log(students)
    res.render('index.html', {
      students:students,
    })
  })
  
})

/**
 * 学生信息增加页面渲染
 */
router.get('/students/new', function(req, res){
  res.send('学生信息添加页面')
})

/**
 * 学生信息增加post
 */
router.post('/students/new', function(req, res){
  
})
module.exports = router
