<template>
    <div class="container-fluid row">
        <h4 class="text-primary">用户管理 > 添加用户</h4>
        <form class="addUser">
            <div class="form-group">
                <label for="userName">用户名</label>
                <input type="text" class="form-control" id="userName" placeholder="用户名" v-model="registerForm.userName">
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

            <button type="button" class="btn btn-primary" @click="addUser" data-toggle="modal" data-target=".bs-example-modal-sm">添加用户</button>
        </form>
    </div>
</template>
<script>
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
    mounted () {
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
            var userObj = {
                userName:this.registerForm.userName,
                password:this.registerForm.password,
                email:this.registerForm.email
            }
            userObj.password = this.crypto(userObj.password);
            this.axios
                .post("/admin/addUser", userObj)
                .then(response => {
                    if (response.data.status == "success") {
                        this.$router.push("userManage");
                         this.$toast.center("添加成功");
                    } else {
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
<style scoped>
h4{
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
   margin-left: 10px;
   margin-right: 10px;
   
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


