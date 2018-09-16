const multer = require('multer')
const date = new Date()

const storage = multer.diskStorage({
  //函数方式设置路径，必须先创建文件夹
  // destination: function (req, file, cb) {
  //   const date = new Date()
  //   const year = date.getFullYear()
  //   const month = date.getMonth() + 1
  //   cb(null, 'public/upload/images')
  // },

  //路径直接给字符串可以先不用创建文件,multer自动创建
  //根据日期创建，防止文件夹达到最大数量的文件
  destination: 'public/upload/' + 'images_' + date.getFullYear() + '_' + (date.getMonth() + 1),

  // 给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    console.log("后台文件");
    console.log(file)
    const arry = file.originalname.split(".")
    const length = arry.length
    const newName = arry[0] + Date.now() + '.' + arry[length - 1]
    console.log("新名称");
    console.log(newName);
    cb(null, newName)
  }
});
const upload = multer({
  storage: storage
});
module.exports = upload
