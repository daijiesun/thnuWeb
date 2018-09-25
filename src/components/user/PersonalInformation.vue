<template>
    <!-- 个人资料 -->
    <div class="container-fluid">
        <div class="row">
            <form class="per_info" id="myform">
                <!-- <div class="form-group">
                    <label for="userName">用户名</label>
                    <input type="text" class="form-control" id="userName" name="userName" v-model="userInfo.userName" readonly="readonly">
                </div> -->
                <div class="form-group">
                    <label for="email">邮箱</label>
                    <input type="email" class="form-control" id="email" name="email" v-model="userInfo.email">
                </div>
                <div class="form-group">
                    <label for="name">真实姓名</label>
                    <input type="text" class="form-control" id="name" name="name" v-model="userInfo.name">
                </div>
                <div class="form-group">
                    <label for="tel">电话</label>
                    <input type="text" class="form-control" id="tel" name="tel" v-model="userInfo.tel">
                </div>
                <div class="form-group">
                    <label for="notes">个人简介</label>
                    <textarea type="text" class="form-control" id="notes" rows=4 name="notes" placeholder="无" v-model="userInfo.notes" />
                </div>
                <div>
                    <button class="btn btn-danger" @click="upload" type="button">确认修改</button>
                </div>
            </form>
        </div>

    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {};
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
        upload: function() {
            this.$loading("修改中");
            var form = document.getElementById("myform");
            //使用这种表单数据传递，后台必须有相应的设置
            var data = new FormData(form);
            const head = {
                header: {
                    "Content-type": "multipart/form-data"
                }
            };
            this.axios
                .post("user/modifyInfo", data, head)
                .then(res => {
                    if (res.data.status == "success") {
                        this.$loading.close();
                        this.$toast.center(res.data.message);
                        // this.$store.dispatch("user/getUserSession");
                    } else {
                        this.$loading.close();
                        this.$toast.center(res.data.message);
                    }
                })
                .catch(err => {
                    this.$loading.close();
                    console.log(err);
                    this.$toast.center("系统繁忙，刷新试试");
                });
        }
    }
};
</script>
<style lang="less" scoped>
.per_info {
    // padding: 20px 30px;
}
</style>



