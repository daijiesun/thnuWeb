<template>
    <div class="admin_index container-fluid">
        <div class="center-block row">
            <h4 class="text-primary ">当前管理员：{{admin.adminName}},登录时间：{{this.date}}</h4>
            <div class="echarts-parent">
                <h4 class="text-primary">THNU社区后台数据统计图</h4>
                <div id="echarts"></div>
            </div>
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
            date: null
        };
    },
    created() {
        // this.getData();
    },
    mounted() {
        this.date = time();
        this.getEcharts();
    },
    computed: {
        ...mapGetters({
            admin: "admin/getAdminInfo"
        })
    },
    methods: {
        getEcharts() {
            var myChart = echarts.init(document.getElementById("echarts"));
            // 绘制图表
            myChart.showLoading();
            myChart.setOption({
                // title: {
                //     top:"0px",
                //     text: "THNU社区后台数据统计图"
                // },
                tooltip: {},
                // legend: {
                //     data: ["data"]
                // },
                series: [
                    {
                        top: "100px",
                        name: "data",
                        type: "pie",
                        redius: "70%",
                        data: []
                    }
                ]
            });
            this.axios.get("/admin/getIndexInfo").then(res => {
                if (res.data.status == "success") {
                    const dataList = res.data.message.data;
                    const nameList = res.data.message.name;
                    const list = [];
                    for (let i = 0; i < dataList.length; i++) {
                        list.push({ value: dataList[i], name: nameList[i] });
                    }
                    // console.log(list);
                    myChart.hideLoading();
                    myChart.setOption({
                        series: [
                            {
                                name: "data",
                                data: list
                            }
                        ]
                    });
                }
            });
            window.onresize = function() {
                myChart.resize();
            };
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
.echarts-parent {
    padding-top: 30px;
    width: 100%;
    height: 400px;
    h4{
        border-bottom: none;
    }
}
#echarts {
    // top: 50px;
    height: 100%;
}
</style>

