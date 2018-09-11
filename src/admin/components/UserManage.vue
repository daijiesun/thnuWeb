<!--用户管理模块-->
<template>
    <div class="container-fluid">
        <table id="my_table" class="table table-striped table-hover" v-if="userList">
            <thead>
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
                <tr v-for="(item,index) in this.userList" :key="item._id">
                    <td>{{index+1}}</td>
                    <td>{{item.userName}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.userDate}}</td>
                    <td @click="removeUser(item._id,index)">
                        <span class="glyphicon glyphicon-trash"></span>
                    </td>
                    <td @click="modifyUser(item._id,index)">
                        <span class="glyphicon glyphicon-pencil"></span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="no_user container-fluid" v-else>
            <div class="title">
                <h1>客官，正在加载中！</h1>
            </div>
        </div>
    </div>
</template>
<script>
import ModifyUser from "./ModifyUser.vue";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    data() {
        return {};
    },
    comments: {
        ModifyUser
    },
    computed: {
        ...mapGetters({
            userList: "user/getUserList"
        })
    },
    mounted() {
        this.$store.dispatch("user/getUserList");
    },
    // created() {
    //     this.axios
    //         .get("/admin/userList")
    //         .then(response => {
    //             if (response.data.status == "success") {
    //                 this.userList = response.data.message;
    //             }
    //         })
    //         .catch(err => {
    //             console.log("获取列表失败");
    //         });
    // },
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
                            alert(response.data.message);
                        } else {
                            alert(response.data.message);
                        }
                    })
                    .catch(err => {
                        alert("系统繁忙，稍后再试");
                    });
            }
        },
        modifyUser: function(id, index) {
            const result = confirm("您确定要修改该用户信息？");
            if (result) {
                this.$router.push({ name: "ModifyUser" });
            }
        }
    }
};
</script>
<style scoped>
.my_show {
    display: none;
}
.no_user > .title {
    color: dodgerblue;
    padding-top: 30px;
    text-align: center;
}
</style>


