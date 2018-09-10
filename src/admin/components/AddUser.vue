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
            <button type="button" class="btn btn-primary" @click="addUser" data-toggle="modal" data-target=".bs-example-modal-sm">添加用户</button>
        </form>
        <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <h4 class="modal_title">提示信息</h4>
                    <p id="modal_content"></p>
                </div>
            </div>
        </div>
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
        addUser: function() {
            if (this.registerForm.password != this.registerForm.passwordOk) {
                $("#modal_content").text("两次密码不一致");
                return;
            }
            var userObj = this.registerForm;
            delete userObj.passwordOk;
            this.axios
                .post("/admin/addUser", userObj)
                .then(response => {
                    if (response.data.status == "success") {
                        $("#modal_content").text("添加用户成功");
                    } else {
                        console.log(response.data);
                        $("#modal_content").text(response.data.message);
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


