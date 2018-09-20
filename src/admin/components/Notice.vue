<template>
    <!-- 公告管理模块 -->
    <div class="admin_notice">
        <h4 class="text-primary">公告管理 </h4>
        <form class="add_notice">
            <div class="form-group">
                <input type="text" class="form-control" id="content" autofocus placeholder="请输入新的公告" v-model="addContent">
            </div>
            <button class="btn btn-success" @click="addNotice">添加公告</button>
        </form>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead class="text-primary">
                    <tr>
                        <td>序号</td>
                        <td>发布时间</td>
                        <td>内容</td>
                        <td>移除</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in this.noticeList" :key="item._id">
                        <td>{{index+1}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.content}}</td>
                        <td>
                            <span class="pointer glyphicon glyphicon-trash" @click="removeNotice(index,item._id)"></span>
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
            noticeList: [],
            addContent: null
        };
    },
    created() {
        this.getNotice();
    },
    methods: {
        //获取公告
        getNotice: function() {
            this.axios
                .get("/admin/getNotice")
                .then(response => {
                    if (response.data.status == "success") {
                        this.noticeList = response.data.message;
                        this.noticeList.reverse();
                    } else {
                        this.noticeList = [];
                    }
                })
                .catch(err => {
                     this.$toast.center("获取数据发生错误，请稍后再试");
                });
        },
        // 移除公告
        removeNotice: function(index, id) {
            const result = confirm("移除后不能再恢复,是否继续");
            if (result) {
                this.axios
                    .post("/admin/delNotice" + "?id=" + id)
                    .then(response => {
                        if (response.data.status == "success") {
                            this.noticeList.splice(index, 1);
                        } else {
                             this.$toast.center(response.data.message);
                        }
                    })
                    .catch(err => {
                         this.$toast.center("系统繁忙，稍后再试");
                    });
            }
        },
        // 添加公告
        addNotice: function() {
            if (this.addContent) {
                this.axios
                    .post("/admin/addNotice", { content: this.addContent })
                    .then(res => {
                        if (res.data.status == "success") {
                            this.$toast.center("添加成功");
                            this.getNotice();
                            this.addContent = null;
                        } else {
                             this.$toast.center(res.data.message);
                        }
                    });
            } else {
                 this.$toast.center("输入内容不能为空");
            }
        }
    }
};
</script>
<style lang="less" scoped>
h4 {
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
}
.pointer:hover {
    cursor: pointer;
}
.add_notice {
    margin: 20px 5px;
}
</style>
