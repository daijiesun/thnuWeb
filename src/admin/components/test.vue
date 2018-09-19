<template>
    <div>
        <form name="fileinfo" id="myForm">
            标题：
            <input type="text" name="title" v-model="formData.title">
            内容：
            <input type="text"  name="content" v-model="formData.content">
            <input type="file" name="files" multiple>
            <button class="btn btn-default" @click="upload" type="button">提交</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: {}
        };
    },
    methods: {
        upload() {
            //获取表单数据
            var form = document.forms.namedItem("fileinfo");
            var form = document.getElementById("myForm");
            //创建表单对象，并添加数据
            var sumData = new FormData(form);
            //添加用户名
            sumData.append("userName", "userInfo.userName");
            const head = {
                header: {
                    "Content-type": "multipart/form-data"
                }
            };
            this.axios
                .post("/user/addFun", sumData, head)
                .then(res => {
                    if (res.data.status == "success") {
                        this.formData = {};
                        console.dir("成功");
                    } else {
                        console.log("失败");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
<style lang="less" scoped>
</style>

