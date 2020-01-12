//模块的引用
var fs = require('fs')

var dataPath = './data.json'
/**
 * 学生信息查询的方法
 * return[]
 * 
 */
exports.find(function( callback ){
  fs.readFile(dataPath, function(error, data){
    if ( error ) {
    return  callback(error)
    }
    callback(null, data)
  })
})

 /**
 * 学生信息存储的方法
 * return[]
 * 
 */

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

 