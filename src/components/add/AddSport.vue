<template>
    <div class="add_sport container-fluid">
        <h2 class="">发布校园活动</h2>
        <form>
            <div class="form-group">
                <label for="title" class="">活动标题</label>
                <input type="text" class="form-control" id="title" v-model="formData.title" placeholder="请输入标题" required autofocus/>
            </div>
            <div class="form-group">
                <label for="content" class="">活动具体信息</label>
                <textarea type="text" class="form-control" id="content" rows=8 v-model="formData.content" placeholder="请输入活动详细信息" required autofocus/>
            </div>
            <div>
                <button class="btn btn-default btn" @click="upload" type="button">发布活动信息</button>
            </div>
        </form>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            formData: {}
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
        upload() {
            if (!this.formData.content || !this.formData.title) {
                this.$toast.center("输入内容不能为空");
                return;
            }
            this.formData.userName = "userInfo.userName";
            this.$loading("发布中...");
            this.axios
                .post("/user/addSport", this.formData)
                .then(res => {
                    if (res.data.status == "success") {
                        this.$loading.close();
                        this.$toast.center(res.data.message);
                        this.formData = {};
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
.add_sport {
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
    // font-weight: 2px;
    font-size: 16px;
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

