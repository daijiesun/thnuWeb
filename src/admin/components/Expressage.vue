<template>
    <!-- 快递服务 -->
    <div class="thnu_expressage">
        <h4 class="text-primary">服务管理 > 快递服务 </h4>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
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
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in expressageList" :key="item._id">
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
            //快递单列表
            expressageList: []
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
