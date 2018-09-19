<template>
    <div class="add_job container-fluid">
        <h2 class="">我要发布兼职</h2>
        <form>
            <div class="form-group">
                <label for="content" class="">填写信息</label>
                <textarea type="text" class="form-control" id="content" rows=8 v-model="formData.content" placeholder="请输入兼职的详细信息（地点，联系方式等等）" required autofocus/>
            </div>
            <div>
                <button class="btn btn-default btn" @click="upload" type="button">发布兼职信息</button>
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
            this.formData.userName = "userInfo.userName";
            this.$loading("发布中...");
            this.axios
                .post("/user/addJob", this.formData)
                .then(res => {
                    if (res.data.status == "success") {
                        this.$loading.close();
                        this.$toast.center(res.data.message);
                        this.formData = {};
                        this.imageList = [];
                        this.$router.push({name: 'MyJob'})
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
.add_job {
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

