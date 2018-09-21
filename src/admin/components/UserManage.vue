<!--用户管理模块-->
<template>
    <div class="container-fluid">
        <h4 class="text-primary">用户管理 > 用户列表 </h4>
        <div class="table-responsive" v-if="userList">
            <table id="my_table" class="table table-striped table-hover">
                <thead class="text-primary">
                    <tr>
                        <td>序号</td>
                        <td>用户名</td>
                        <td>邮箱</td>
                        <td>创建时间</td>
                        <td>删除</td>
                        <td>修改</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in userList" :key="item._id">
                        <td>{{index+1}}</td>
                        <td>{{item.userName}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.userDate}}</td>
                        <td @click="removeUser(item._id,index)">
                            <span class="pointer glyphicon glyphicon-trash"></span>
                        </td>
                        <td @click="modifyUser(item._id,index)">
                            <span class="pointer glyphicon glyphicon-pencil"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="no_user container-fluid" v-else>
            <div class="title">
                <h1>暂无用户信息，请添加用户！</h1>
            </div>
        </div>
    </div>
</template>
<script>
import ModifyUser from "./ModifyUser.vue";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            // userList: []
        };
    },
    comments: {
        ModifyUser
    },
    mounted() {
        this.$store.dispatch("user/getList");
    },
    computed: {
        ...mapGetters({
            userList: "user/getUserList"
        })
    },
    methods: {
        removeUser: function(id, index) {
            const result = confirm("确定删除？该操作不可逆");
            const idObj = { userId: id };
            if (result) {
                this.axios
                    .post("/admin/deleteUser", idObj)
                    .then(response => {
                        if (response.data.status == "success") {
                            //删除本地数据，不用刷新就更新数据
                            this.userList.splice(index, 1);
                        } else {
                            this.$toast.center(response.data.message);
                        }
                    })
                    .catch(err => {
                        this.$toast.center("系统繁忙，稍后再试");
                    });
            }
        },
        modifyUser: function(id, index) {
            const result = confirm("您确定要修改该用户信息？");
            if (result) {
                this.$router.push({ path: `/admin/ModifyUser/${id}` });
            }
        }
    }
};
</script>
<style scoped>
h4 {
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
}
.my_show {
    display: none;
}
.no_user > .title {
    color: dodgerblue;
    padding-top: 30px;
    text-align: center;
}
.pointer:hover {
    cursor: pointer;
}
</style>


