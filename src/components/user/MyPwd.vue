<template>
    <div class="addUser container-fluid row">
        <form>
            <div class="form-group">
                <label for="password">新密码</label>
                <input type="password" class="form-control" id="password" placeholder="请输入新密码" autofocus v-model="modifyForm.password">
            </div>
            <div class="form-group">
                <label for="passwordOk">确认新密码</label>
                <input type="password" class="form-control" id="passwordOk" placeholder="请确认新密码" v-model="modifyForm.passwordOk">
            </div>
            <button type="button" class="btn btn-primary" @click="modifyPassword">确认修改</button>
        </form>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            modifyForm: {
                password: null,
                passwordOk: null
            }
        };
    },
    methods: {
        //id: this.$route.params
        //修改用户
        modifyPassword: function() {
            console.log(this.$route.params.id);
            if (this.modifyForm.password !== this.modifyForm.passwordOk) {
                this.$toast.center("两次密码不同，请重新输入");
                return;
            } else if (
                !(this.modifyForm.password && this.modifyForm.passwordOk)
            ) {
                this.$toast.center("输入不能为空");
                return;
            }
            let passwordObj = {
                // id: this.$route.params.id,
                password: this.crypto(this.modifyForm.password)
            };
            this.axios
                .post("/admin/modifyPassword", passwordObj)
                .then(response => {
                    if (response.data.status == "success") {
                        this.$toast.center("修改成功");
                        this.$router.push({ path: "/personalCenter" });
                    } else {
                        this.$toast.center(response.data.message);
                    }
                })
                .catch(err => {
                    console.log(err);
                    this.$router.push({
                        path: "/personalCenter/personalInformation"
                    });
                });
        }
    }
};
</script>
<style scoped>
.addUser {
    width: 70%;
    margin: 20px auto;
}
.modal_title {
    border-bottom: 1px solid #ccc;
    padding: 5px;
    text-align: center;
}
#modal_content {
    text-align: center;
}
</style>


