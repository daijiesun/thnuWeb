<template>
    <div class="login">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#loginModal" data-whatever="@mdo">登录</button>
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title text-primary" id="exampleModalLabel">登录</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="recipient-name" class="control-label">邮箱:</label>
                                <input type="text" class="form-control" id="recipient-name" placeholder="邮箱" v-model="formData.email">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="control-label">密码:</label>
                                <input type="password" class="form-control" id="message-text" placeholder="填写密码" v-model="formData.password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <a href="#" class="pull-left">还没账号？去注册></a>
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" @click="login">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Footer from "./Footer.vue";
export default {
    data() {
        return {
            formData: {}
        };
    },
    mounted() {
        $("#loginModal").on("shown.bs.modal", function() {
            $("#recipient-name").focus();
        });
    },
    methods: {
        login: function() {
            if (this.formData.password && this.formData.email) {
                const body = {
                    email: this.formData.email,
                    password: this.crypto(this.formData.password)
                };
                this.$loading("登录中...");
                this.axios.post("user/login", body).then(res => {
                    if (res.data.status == "success") {
                        this.$loading.close();
                        this.$toast.center(res.data.message);
                        window.location = "/";
                    } else {
                        this.$loading.close();
                        this.$toast.center(res.data.message);
                    }
                });
            } else {
                this.$toast.center("请填写邮箱或密码");
            }
        }
    }
};
</script>
<style lang="less" scoped>
h4 {
    text-align: center;
}
.modal-footer a {
    padding-top: 5px;
}
</style>

