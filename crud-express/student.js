//模块的引用
var fs = require('fs')

var dataPath = './data.json'
/**
 * 学生信息查询的方法
 * return[]
 * 
 */
exports.find = function( callback ){
  fs.readFile(dataPath, 'utf8', function(error, data){
    if ( error ) {
    return  callback(error)
    }
    var students = JSON.parse(data).students
    callback(null, students)
  })
}

 /**
 * 学生信息存储的方法
 * return[]
 * 
 */

 exports.save = function(stuData,callback ) {
  fs.readFile(dataPath, 'utf8', function(error, data){
    if ( error ) {
    return  callback(error)
    }
    var students = JSON.parse(data).students
    stuData.id = students[0].id+1
    // stuData.id = students[students.length-1].id+1
    students.unshift(stuData)
    var fileData = JSON.stringify({
      students: students
    })
    fs.writeFile(dataPath, fileData, function(error) {
      if (error) {
      return  callback(error)
      }
      callback(null)
    })
  })
 }

 /**
 * 学生信息更新的方法
 * return[]
 * 
 */

 /**
 * 学生信息删除的方法
 * return[]
 * 
 */


 

 