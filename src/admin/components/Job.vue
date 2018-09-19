<template>
    <!-- 兼职模块 -->
    <div class="thnu_job">
        <h4 class="text-primary">服务管理 > 兼职发布 </h4>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <td>发布人</td>
                        <td>发布时间</td>
                        <td>内容</td>
                        <td>移除</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in jobList" :key="item._id">
                        <td>{{item.userName}}</td>
                        <td>{{item.date}}</td>
                        <td>
                            <div class="overflow">
                                <td>{{item.content}}</td>
                            </div>
                        </td>
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
        return {
            // jobList: []
        };
    },
    mounted() {
        this.$store.dispatch("user/getJobList");
    },
    computed: {
        ...mapGetters({
            jobList: "user/getJobList"
        })
    },
    methods: {
        removeOne(index, id) {
            const result = confirm("确定移除？一旦移除不可恢复");
            if (result) {
                this.axios
                    .get("admin/delOneJob" + "?id=" + id)
                    .then(res => {
                        if (res.data.status == "success") {
                            this.$toast.center(res.data.message);
                            this.jobList.splice(index, 1);
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

