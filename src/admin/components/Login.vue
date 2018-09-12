<template>
    <div class="admin_not_login">
        <form class="admin_login_form form-signin col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
            <h2 class="form-signin-heading">请登录后台管理系统</h2>
            <label for="adminName">管理员名</label>
            <input type="text" id="adminName" class="form-control btn-lg" placeholder="管理员名" autofocus autocomplete="on" v-model="loginForm.adminName">
            <label for="inputPassword">密码</label>
            <input type="password" id="inputPassword" class="form-control btn-lg" placeholder="管理员密码" v-model="loginForm.password">
            <button class="btn btn-lg btn-primary btn-block" @click="adminLogin" data-toggle="modal" data-target=".bs-example-modal-sm">登录</button>
        </form>
        <!-- <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <h4 class="modal_title">提示信息</h4>
                    <p id="modal_content"></p>
                </div>
            </div>
        </div> -->
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
                const userObj = this.loginForm
                userObj.password = this.crypto(userObj.password);
                this.axios
                    .post("/admin/login", userObj)
                    .then(response => {
                        if (response.data.status == "success") {
                            //登录成功
                            this.$store.dispatch("admin/getAdminSession");
                        } else {
                            console.log("账号密码错误");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                // $("#modal_content").text("输入有误，请重新输入");
            }
            this.loginTime = Date.now();
        }
    }
};
</script>
<style scoped>
.admin_not_login {
    position: fixed;
    background: url("/static/bgc_login_admin.jpg") no-repeat center center;
    background-size: cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.admin_login_form {
    margin-top: 100px;
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
