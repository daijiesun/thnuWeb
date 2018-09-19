<template>
    <!-- 表白墙 -->
    <div class="thnu_love">
        <h4 class="text-primary">服务管理 > 表白墙 </h4>

        <div class="table-responsive">
            <table class="table table-hover">
                <thead class="text-primary">
                    <tr>
                        <td>序号</td>
                        <td>发布人</td>
                        <td>发布时间</td>
                        <td>内容</td>
                        <td>图片</td>
                        <td>移除</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in loveList" :key="item._id">
                        <td>{{index + 1}}</td>
                        <td>{{item.userName}}</td>
                        <td>{{item.date}}</td>
                        <td>
                            <div class="overflow">
                                <td>{{item.content}}</td>
                            </div>
                        </td>
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
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    data() {
        return {};
    },
    mounted() {
        this.$store.dispatch("user/getLoveList");
    },
    computed: {
        ...mapGetters({
            loveList: "user/getLoveList"
        })
    },
    methods: {
        removeOne(index, id) {
            const result = confirm("确定移除？一旦移除不可恢复");
            if (result) {
                this.axios
                    .get("admin/delOneLove" + "?id=" + id)
                    .then(res => {
                        if (res.data.status == "success") {
                            this.$toast.center(res.data.message);
                            this.loveList.splice(index, 1);
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
.overflow {
    width: 150px;
    height: 30px;
    overflow: auto;
}
</style>
