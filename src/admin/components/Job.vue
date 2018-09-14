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
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in jobList" :key="item._id">
                        <td>{{item.userName}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.conent}}</td>
                        <td>
                            <span class="pointer glyphicon glyphicon-trash"></span>
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
            jobList: []
        };
    }
};
</script>
<style lang="less" scoped>
h4 {
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
}
</style>

