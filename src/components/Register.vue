<template>
    <div class="thnu_Register container-fuild row">
        <h3 class="text-primary">注册用户</h3>
        <form class="addUser">
            <div class="form-group">
                <label for="userName">用户名</label>
                <input type="text" class="form-control" id="userName" placeholder="注册成功后不能修改!" v-model="registerForm.userName">
            </div>
            <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" class="form-control" id="email" placeholder="邮箱地址" v-model="registerForm.email">
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input type="password" class="form-control" id="password" placeholder="密码" v-model="registerForm.password">
            </div>
            <div class="form-group">
                <label for="passwordOk">确认密码</label>
                <input type="password" class="form-control" id="passwordOk" placeholder="确认密码" v-model="registerForm.passwordOk">
            </div>
            <button type="button" class="btn btn-primary" @click="addUser" data-toggle="modal" data-target=".bs-example-modal-sm">注册用户</button>
        </form>

    </div>
</template>
<script>
import Footer from "./Footer.vue";
export default {
    data() {
        return {
            registerForm: {
                userName: null,
                password: null,
                passwordOk: null,
                email: null
            }
        };
    },
    mounted() {
        $("#userName").focus();
    },
    methods: {
        addUser: function() {
            if (this.registerForm.password != this.registerForm.passwordOk) {
                this.$toast.center("两次密码不一样");
                return;
            } else if (
                !(
                    this.registerForm.password &&
                    this.registerForm.passwordOk &&
                    this.registerForm.userName &&
                    this.registerForm.email
                )
            ) {
                this.$toast.center("输入内容不能为空");
                return;
            }
            this.$loading("提交中!!!");
            var userObj = {
                userName: this.registerForm.userName,
                password: this.registerForm.password,
                email: this.registerForm.email
            };
            userObj.password = this.crypto(userObj.password);
            this.axios
                .post("/admin/addUser", userObj)
                .then(response => {
                    if (response.data.status == "success") {
                        this.$loading.close();
                        this.$router.push("/");
                        this.$toast.center("添加成功,请登录!!!");
                    } else {
                        this.$loading.close();
                        this.$toast.center(response.data.message);
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
h3 {
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    padding-left: 60px;
}
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
