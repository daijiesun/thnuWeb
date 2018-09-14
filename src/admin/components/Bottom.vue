<template>
    <div class="thnu_bottom row container-fluid">
        <!-- 兼职入口 -->
        <div class="thnu_job col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h4>找兼职？点这里
                <span class="glyphicon glyphicon-hand-down"></span>
            </h4>
            <div>
                <section class="thnu_job_link">
                    <a href="#" class=""><img :src="this.jobList[0].images[0].url" alt="" class="img-rounded">
                        <div class="describe pull-left">
                            <h6>工作内容：
                                <small>{{this.jobList[0].title}}</small>
                            </h6>
                            <h6>地点：
                                <small>{{this.jobList[0].location}}</small>
                            </h6>
                        </div>
                        <div class="describe pull-right">
                            <h6>描述：
                                <small>{{this.jobList[0].describe}}</small>
                            </h6>
                            <h6>联系电话：
                                <small>{{this.jobList[0].phone}}</small>
                            </h6>
                        </div>
                    </a>
                </section>
            </div>
        </div>
        <!-- 二手入口 -->
        <div class="thnu_goods col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h4>闲置？点这里
                <span class="glyphicon glyphicon-hand-down"></span>
            </h4>
            <section class="thnu_goods_link ">
                <a href="#" class=""><img :src="this.goodsList[0].images[0].url" alt="" class="img-thumbnail">
                    <div class="describe pull-left">
                        <h6>物品名称：
                            <small>{{this.goodsList[0].goodsName}}</small>
                        </h6>
                        <h6>描述：
                            <small>{{this.goodsList[0].describe}}</small>
                        </h6>
                    </div>
                    <div class="describe pull-right">
                        <h6>价格：
                            <small>{{this.goodsList[0].price}}</small>
                        </h6>
                        <h6>联系电话：
                            <small>{{this.goodsList[0].phone}}</small>
                        </h6>
                    </div>
                </a>
            </section>
        </div>
        <!-- 活动入口 -->
        <div class="thnu_club col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h4>校园活动
                <span class="glyphicon glyphicon-glass"></span>
            </h4>
            <section class="thnu_club_link">
                <a href="#" class=""><img :src="this.clubList[0].images[0].url" alt="" class="img-thumbnail">
                    <div class="describe pull-left">
                        <h6>活动名称：
                            <small>{{this.clubList[0].clubName}}</small>
                        </h6>
                        <h6>描述：
                            <small>{{this.clubList[0].describe}}</small>
                        </h6>
                    </div>
                    <div class="describe pull-right">
                        <h6>时间：
                            <small>{{this.clubList[0].time}}</small>
                        </h6>
                        <h6>地点：
                            <small>{{this.clubList[0].location}}</small>
                        </h6>
                    </div>
                </a>
            </section>
        </div>
        <!-- 风景入口 -->
        <div class="thnu_scenery col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h4>校园风景
                <span class="glyphicon glyphicon-camera"></span>
            </h4>
            <section class="thnu_scenery_link">
                <a href="#" class="">
                    <img :src="this.sceneryList[0].images[0].url" alt="" class="img-rounded" />
                    <div class="describe pull-left">
                        <h6>景点名称：
                            <small>{{this.sceneryList[0].title}}</small>
                        </h6>
                        <h6>描述：
                            <small>{{this.sceneryList[0].describe}}</small>
                        </h6>
                    </div>
                </a>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //校园风景数据
            sceneryList: [
                {
                    title: "大喷泉",
                    describe: "世界上最小的喷泉，没有之一",
                    images: [
                        {
                            url:
                                "http://pic20.photophoto.cn/20110708/0037037130641578_b.jpg"
                        }
                    ]
                }
            ],
            //兼职发布数据
            jobList: [
                {
                    title: "搬砖",
                    describe: "一天两百",
                    location: "通化",
                    phone: "123456789",
                    images: [
                        {
                            url: "/static/images/jianzhi.jpg"
                        }
                    ]
                }
            ],
            //二手闲置数据
            goodsList: [
                {
                    goodsName: "苹果X",
                    describe: "9.9新",
                    price: "价格面议",
                    phone: "123456789",
                    images: [
                        {
                            url: "/static/images/ershou.jpg"
                        }
                    ]
                }
            ],
            //校园活动数据
            clubList: [
                {
                    clubName: "运动会",
                    time: "2020-2-20",
                    describe: "脑补去吧",
                    location: "体育馆",
                    images: [
                        {
                            url: "/static/images/huodong.jpg"
                        }
                    ]
                }
            ]
        };
    }
};
</script>
<style  lang="less" scoped>
//div公共样式
.thnu_scenery,
.thnu_job,
.thnu_goods,
.thnu_club {
    // padding: 20px;
}
//h4公共样式
.thnu_scenery h4,
.thnu_job h4,
.thnu_goods h4,
.thnu_club h4 {
    border-bottom: 1px solid #ccc;
    padding-left: 25px;
}
//a公共样式
.thnu_scenery .thnu_scenery_link a,
.thnu_job .thnu_job_link a,
.thnu_goods .thnu_goods_link a,
.thnu_club .thnu_club_link a {
    text-decoration: none;
}

//描述样式
.thnu_scenery .thnu_scenery_link a .describe,
.thnu_job .thnu_job_link a .describe,
.thnu_goods .thnu_goods_link a .describe,
.thnu_club .thnu_club_link a .describe {
    padding-left: 25px;
    color: black;
    width: 50%;
    // padding: 0 20px;
}

//图片公共样式
.thnu_scenery .thnu_scenery_link a > img,
.thnu_job .thnu_job_link a > img,
.thnu_goods .thnu_goods_link a > img,
.thnu_club .thnu_club_link a > img {
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 200px;
}

//鼠标经过公共样式
.thnu_scenery a:hover > img,
.thnu_job a:hover > img,
.thnu_goods a:hover > img,
.thnu_club a:hover > img {
    box-shadow: 3px 3px 1px;
    text-decoration: none;
}

.thnu_scenery {
}

.thnu_job {
}
.thnu_goods {
}
.thnu_club {
}
</style>

