<template>
    <div class="my_goods">
        <div class="item">
            <h4 class="text-primary">{{userInfo.userName}}的快递单</h4>
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead class="text-primary">
                        <tr>
                            <td>用户名</td>
                            <td>姓名</td>
                            <td>快递单号</td>
                            <td>发布时间</td>
                            <td>电话</td>
                            <td>报酬</td>
                            <td>类型</td>
                            <td>取件地址</td>
                            <td>收件地址</td>
                            <td>送达时间</td>
                            <td>移除</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in myExpList" :key="item._id" v-show="item.userName == userInfo.userName">
                            <td>{{item.userName}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.order}}</td>
                            <td>{{item.date}}</td>
                            <td>{{item.tel}}</td>
                            <td>{{item.money}}</td>
                            <td>{{item.type}}</td>
                            <td>{{item.getLocation}}</td>
                            <td>{{item.putLocation}}</td>
                            <td>{{item.time}}</td>
                            <td>
                                <span class="pointer glyphicon glyphicon-trash remove" @click="removeOne(index,item._id)"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            index: null
        };
    },
    created() {
        this.$store.dispatch("user/getExpList");
    },
    computed: {
        ...mapGetters({
            userInfo: "user/getUserInfo",
            myExpList: "user/getExpList"
        })
    },
    methods: {
        removeOne(index, id) {
            const result = confirm("确定移除？一旦移除不可恢复");
            if (result) {
                this.axios
                    .get("user/delOneExp" + "?id=" + id)
                    .then(res => {
                        if (res.data.status == "success") {
                            this.$toast.center(res.data.message);
                            this.myExpList.splice(index, 1);
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
.item {
    // text-align: left;
    h4 {
        text-align: center;
    }
    .remove {
        cursor: pointer;
    }
}
</style>
