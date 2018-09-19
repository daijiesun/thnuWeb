<template>
    <div class="admin_index container-fluid">
        <div class="center-block">
            <h4 class="text-primary ">当前管理员：{{admin.adminName}},登录时间：{{this.date}}</h4>
            <div id="echarts"></div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
import time from "../../../tools/time.js";
var echarts = require("echarts");
// import echarts from "echarts";
export default {
    data() {
        return {
            date: null,
            exp: this.expList
        };
    },
    mounted() {
        this.date = time();
        this.getEcharts();
    },
    computed: {
        ...mapGetters({
            admin: "admin/getAdminInfo",
            loseList: "user/getLoseList",
            jobList: "user/getJobList",
            sportList: "user/getSportList",
            loveList: "user/getLoveList",
            funList: "user/getFunList",
            goodsList: "user/getGoodsList",
            expList: "user/getExpList"
        })
    },
    methods: {
        getEcharts() {
            var myChart = echarts.init(document.getElementById("echarts"));
            // 绘制图表
            myChart.setOption({
                title: {
                    text: "THNU社区后台数据统计图"
                },
                tooltip: {},
                xAxis: {
                    data: [
                        "寻物启事",
                        "闲置商品",
                        "表白墙",
                        "兼职",
                        "快递",
                        "活动",
                        "趣事"
                    ]
                },
                yAxis: {},
                series: [
                    {
                        name: "数据",
                        type: "bar",
                        data: [
                            
                        ]
                    }
                ]
            });
        }
    }
};
</script>
<style lang="less" scoped>
.center-block h4 {
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid #000;
}
#echarts {
    width: 700px;
    height: 400px;
}
</style>

