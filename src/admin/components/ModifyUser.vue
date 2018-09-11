<template>
    <div class="addUser container-fluid row">
        <form>
            <div class="form-group">
                <label for="userName">用户名</label>
                <input type="text" class="form-control" id="userName" placeholder="用户名" autofocus v-model="registerForm.userName">
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input type="password" class="form-control" id="password" placeholder="密码" v-model="registerForm.password">
            </div>
            <div class="form-group">
                <label for="passwordOk">确认密码</label>
                <input type="password" class="form-control" id="passwordOk" placeholder="确认密码" v-model="registerForm.passwordOk">
            </div>
            <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" class="form-control" id="email" placeholder="邮箱地址" v-model="registerForm.email">
            </div>
            <button type="button" class="btn btn-primary" @click="modifyUser">确认修改</button>
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
    methods: {
        modifyUser: function() {
            if (this.registerForm.password != this.registerForm.passwordOk) {
                alert("两次密码不一样");
                return;
            }
            var userObj = this.registerForm;
            delete userObj.passwordOk;
            this.axios
                .post("/admin/addUser", userObj)
                .then(response => {
                    if (response.data.status == "success") {
                        alert("添加成功");
                    } else {
                        alert(response.data.message);
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


