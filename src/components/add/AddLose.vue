<template>
    <div class="add_fun container-fluid">
        <h2 class="">寻物启事</h2>
        <form id="my-form">
            <div class="form-group">
                <label for="tel" class="">您的联系方式?</label>
                <input type="text" class="form-control" id="tel" name="tel" v-model="formData.tel" placeholder="请认真填写，方便联系您" required/>
            </div>
            <div class="form-group">
                <label for="content" class="">你想要写什么？</label>
                <textarea type="password" class="form-control" id="content" name="content" v-model="formData.content" rows=6 placeholder="请描述您的内容" required/>
            </div>
            <div class="form-group">
                <label for="exampleInputFile" class="text-danger">发图片？ 点这里
                    <span class="glyphicon glyphicon-hand-down"></span>
                </label>
                <input type="file" id="img" name="files" @change="uploadDone" multiple>
                <div v-for="item in imageList" :key="item" id="images">
                    <img :src="item" alt="">
                </div>
                <br style="clear: both">
                <button class="btn btn-default btn" @click="upload" type="button">发表</button>
            </div>
        </form>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            formData: {},
            imageList: []
            //这里定义表单数据，方便后面在不同方法中添加数据
            // sumData: new FormData()
        };
    },
    mounted() {
        this.$store.dispatch("user/getUserSession");
    },
    computed: {
        ...mapGetters({
            userInfo: "user/getUserInfo"
        })
    },
    methods: {
        //实现预览
        uploadDone(e) {
            const list = document.getElementById("img").files;
            const liObj = document.getElementById("images");
            for (var i = 0; i < list.length; i++) {
                if (list && list[i]) {
                    this.imageList.push(window.URL.createObjectURL(list[i]));
                }
            }
            // const files = e.target.files;
            // if (files) {
            //     //这里必须循环添加，不能直接data.append("files", files);
            //     //否则后台无法接收
            //     for (var i = 0; i < files.length; i++) {
            //         this.sumData.append("files", files[i]);
            //     }
            // }
        },
        upload() {
            if (!this.formData.content || !this.formData.tel) {
                this.$toast.center("输入内容不能为空");
                return;
            }
            var form = document.getElementById("my-form");
            var sumData = new FormData(form);
            // this.sumData.append("tel", this.formData.tel);
            // this.sumData.append("content", this.formData.content);
            sumData.append("userName", "userInfo.userName");
            this.$loading("发布中...");
            const head = {
                header: {
                    "Content-type": "multipart/form-data"
                }
            };
            this.axios
                .post("/user/addLose",sumData, head)
                .then(res => {
                    if (res.data.status == "success") {
                        this.$loading.close();
                        this.$toast.center(res.data.message);
                        this.formData = {};
                        this.imageList = [];
                    } else {
                        this.$loading.close();
                        this.$toast.center(res.data.message);
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
form textarea,
form input {
    opacity: 0.9;
}
.add_fun {
    // position: fixed;
    height: 100%;
    overflow: auto;
    background: url("/static/images/all_bg.jpg") repeat center center;
    background-size: cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
h2 {
    text-align: center;
    padding: 10px;
}
label {
    font-weight: 5px;
    font-size: 20px;
}
.btn {
    background-color: #337ab7;
    margin-top: 10px;
    color: white;
}
#images > img {
    padding: 3px;
    border: 1px solid #ccc;
    display: block;
    float: left;
    width: 150px;
    height: 200px;
}
</style>

