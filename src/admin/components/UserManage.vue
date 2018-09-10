<!--用户管理模块-->
<template>
    <div class="container-fluid user">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <td>序号</td>
                    <td>用户名</td>
                    <td>创建时间</td>
                    <td>当前状态</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in this.userList" :key="item._id">
                    <td>{{index+1}}</td>
                    <td>{{item.userName}}</td>
                    <td>{{item.userDate}}</td>
                    <td>在线/离线</td>
                    <td>删除/修改</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userList: []
        };
    },
    mounted() {
        this.axios
            .get("/admin/userList")
            .then(response => {
                if (response.data.status == "success") {
                    this.userList = response.data.message;
                }
            })
            .catch(err => {
                console.log(object);
            });
    }
};
</script>
<style scoped>
</style>


