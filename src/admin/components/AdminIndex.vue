<template>
    <div class="admin_index container-fluid">
        <div class="center-block">
            <h4 class="text-primary ">当前管理员：{{admin.adminName}},登录时间：{{this.date}}{{expList.length}}</h4>
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
            loseList: [],
            jobList: [],
            sportList: [],
            loveList: [],
            funList: [],
            goodsList: [],
            expList: []
        };
    },
    created() {
        this.getData();
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
        getData() {
            this.axios
                .get("/user/getLoseList")
                .then(res => {
                    if (res.data.status == "success") {
                        this.loseList = res.data.message;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            this.axios
                .get("/user/getJobList")
                .then(res => {
                    if (res.data.status == "success") {
                        this.jobList = res.data.message;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            this.axios
                .get("/user/getSportList")
                .then(res => {
                    if (res.data.status == "success") {
                        this.sportList = res.data.message;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            this.axios
                .get("/user/getLoveList")
                .then(res => {
                    if (res.data.status == "success") {
                        this.loveList = res.data.message;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            this.axios
                .get("/user/getFunList")
                .then(res => {
                    if (res.data.status == "success") {
                        this.funList = res.data.message;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            this.axios
                .get("/user/getGoodsList")
                .then(res => {
                    if (res.data.status == "success") {
                        this.goodsList = res.data.message;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            this.axios
                .get("/user/getExpList")
                .then(res => {
                    if (res.data.status == "success") {
                        this.expList = res.data.message;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getEcharts() {
            var myChart = echarts.init(document.getElementById("echarts"));
            // 绘制图表
            function fetchData(cb) {
                // 通过 setTimeout 模拟异步加载
                setTimeout(function() {
                    cb({
                        categories: [
                            "衬衫",
                            "羊毛衫",
                            "雪纺衫",
                            "裤子",
                            "高跟鞋",
                            "袜子"
                        ],
                        data: [5, 20, 36, 10, 10, 20]
                    });
                }, 1000);
            }

            // 初始 option
            option = {
                title: {
                    text: "异步数据加载示例"
                },
                tooltip: {},
                legend: {
                    data: ["销量"]
                },
                xAxis: {
                    data: []
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: []
                    }
                ]
            };

            fetchData(function(data) {
                myChart.setOption({
                    xAxis: {
                        data: data.categories
                    },
                    series: [
                        {
                            // 根据名字对应到相应的系列
                            name: "销量",
                            data: data.data
                        }
                    ]
                });
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
    // width: 700px;
    height: 400px;
}
</style>

