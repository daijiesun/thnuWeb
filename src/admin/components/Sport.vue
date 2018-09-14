<template>
    <!-- 校园活动 -->
    <div class="admin_sport">
        <h4 class="text-primary">服务管理 > 校园活动 </h4>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <td>发布人</td>
                        <td>标题</td>
                        <td>活动时间</td>
                        <td>内容</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in sportList" :key="item._id">
                        <td>{{item.userName}}</td>
                        <td>{{item.title}}</td>
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
            sportList: []
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
