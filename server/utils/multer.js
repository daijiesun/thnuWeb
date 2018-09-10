const multer = require('multer')
const storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        cb(null, 'public/upload/images')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        console.log("后台文件");
        console.log(file)
        const arry = file.originalname.split(".")
        const length = arry.length
        const newName = arry[0] + Date.now() + '.'+ arry[length-1]
        console.log("新名称");
        console.log(newName);
        cb(null, newName)
     }
 }); 
const upload = multer({
    storage: storage
});
module.exports = upload