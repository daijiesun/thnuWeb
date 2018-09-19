<template>
    <div class="add_exp container-fluid">
        <h2 class="">添加我的快递单</h2>
        <form>
            <div class="form-group">
                <label for="name" class="">您的真实姓名</label>
                <input type="text" class="form-control" id="name" v-model="formData.name" placeholder="请认真填写，保证能拿到快递" required="required" autofocus/>
            </div>
            <div class="form-group">
                <label for="order" class="">您的快递单号</label>
                <input type="text" class="form-control" id="order" v-model="formData.order" placeholder="请正确填写您的快递单号（取件码）" required/>
            </div>
            <div class="form-group">
                <label for="tel" class="">您的联系方式</label>
                <input type="text" class="form-control" id="tel" v-model="formData.tel" placeholder="请认真填写联系方式" required/>
            </div>
            <div class="form-group">
                <label for="money" class="">你能给的报酬</label>
                <input type="text" class="form-control" id="money" v-model="formData.money" placeholder="给多少钱" required/>
            </div>
            <div class="form-group">
                <label for="type" class="">快递的大小</label>
                <input type="text" class="form-control" id="type" v-model="formData.type" placeholder="（大/小）或者（简单描述）" required/>
            </div>
            <div class="form-group">
                <label for="getLocation" class="">您的快递所在地址</label>
                <input type="text" class="form-control" id="getLocation" v-model="formData.getLocation" placeholder="请认真填写，保证能拿到快递" required />
            </div>
            <div class="form-group">
                <label for="putLocation" class="">您的收件地址</label>
                <input type="text" class="form-control" id="putLocation" v-model="formData.putLocation" placeholder="请填写您的收获地址" required />
            </div>
            <div class="form-group">
                <label for="time" class="">您要求什么时候能送达</label>
                <input type="text" class="form-control" id="time" v-model="formData.time" placeholder="请认真填写，保证能拿到快递" />
            </div>
            <div>
                <button class="btn btn-default btn" @click="upload" type="button">发布任务</button>
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
                .post("/user/addExp", this.formData)
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
.add_exp {
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
form textarea,
form input {
    opacity: 0.9;
}
</style>

