<template>
    <!-- 趣事 -->
    <div class="thnu_fun">
        <h4 class="text-primary">服务管理 > 校园趣事 </h4>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead class="text-primary">
                    <tr>
                        <td>序号</td>
                        <td>发布人</td>
                        <td>标题</td>
                        <td>发布时间</td>
                        <td>内容</td>
                        <td>图片</td>
                        <td>移除</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in funList" :key="item._id">
                        <td>{{index + 1}}</td>
                        <td>{{item.userName}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.content}}</td>
                        <td>暂不显示!!!</td>
                        <!-- <td><img :src="item.photo[0]" alt=""></td> -->
                        <td>
                            <span class="pointer glyphicon glyphicon-trash" @click="removeOne(index,item._id)"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            funList: []
        };
    },
    mounted() {
        this.getList();
    },
    methods: {
        getList: function() {
            this.axios
                .get("admin/getFunList")
                .then(res => {
                    if (res.data.status == "success") {
                        this.funList = res.data.message.reverse();
                    } else {
                        this.$toast.center(res.data.message);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        removeOne(index, id) {
            const result = confirm("确定移除？一旦移除不可恢复");
            if (result) {
                this.axios
                    .get("admin/delOneFun" + "?id=" + id)
                    .then(res => {
                        if (res.data.status == "success") {
                            this.$toast.center(res.data.message);
                            this.funList.splice(index, 1);
                        } else {
                            this.$toast.center(res.data.message);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        this.$toast.center("系统繁忙，请稍后再试");
                    });
            }
            return;
        }
    }
};
</script>
<style lang="less" scoped>
h4 {
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
}
tbody span:hover {
    cursor: pointer;
}
</style>
