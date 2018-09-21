<template>
    <div class="admin_not_login">
        <form class="admin_login_form form-signin col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
            <h2 class="form-signin-heading">thnu后台管理系统</h2>
            <label for="adminName">管理员</label>
            <input type="text" id="adminName" class="form-control btn-lg" placeholder="管理员名" autofocus autocomplete="on" v-model="loginForm.adminName">
            <label for="inputPassword">密码</label>
            <input type="password" id="inputPassword" class="form-control btn-lg" placeholder="管理员密码" v-model="loginForm.password">
            <button class="btn btn-lg btn-primary btn-block" @click="adminLogin" data-toggle="modal" data-target=".bs-example-modal-sm">登录</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginForm: {
                adminName: null,
                password: null
            }
        };
    },
    methods: {
        adminLogin: function() {
            if (this.loginForm.adminName && this.loginForm.password) {
                const userObj = {
                    adminName: this.loginForm.adminName,
                    password: this.loginForm.password
                };
                userObj.password = this.crypto(userObj.password);
                this.$loading("登录中...");
                this.axios
                    .post("/admin/login", userObj)
                    .then(response => {
                        if (response.data.status == "success") {
                            //登录成功
                            this.$loading.close();
                            //重新获取管理员信息，然后更新试图，不需要跳转
                            this.$store.dispatch("admin/getAdminSession");
                            this.$router.push('/admin');
                        } else {
                            this.$loading.close();
                            this.$toast.center("账号密码错误");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                this.$toast.center("请输入正确的信息");
            }
            this.loginTime = Date.now();
        }
    }
};
</script>
<style scoped>
.admin_not_login {
    position: fixed;
    height: 100%;
    overflow: auto;
    background: url("/static/images/bgc_login_admin.jpg") no-repeat center
        center;
    background-size: cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.admin_login_form {
    margin-top: 50px;
}
.admin_login_form label {
    color: #2c5f8d;
    font-size: 16px;
}
.admin_not_login h2 {
    color: #2c5f8d;
    text-align: center;
}
.admin_not_login input {
    margin-bottom: 20px;
}
.admin_not_login button {
    margin-top: 40px;
}
</style>
