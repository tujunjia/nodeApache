//模块的引用
var express = require('express')
var fs = require('fs')
//作者的模块方法加载
var Student = require('./student.js')
//创建路由容器
var router = express.Router()
//实例化服务
var app = express()


/**
 *首页渲染路由 
 */
router.get('/students', function(req, res) {
    Student.find(function (error, students) {
      if (error) {
        return  res.status('500').end('data文件读取错误')
      }
      console.log(students)
      res.render('index.html', {
        students:students,
      })})
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
