<template>
  <div class="thnu_bottom row container-fluid">
    <div class="thnu_scenery col-xs-12 col-sm-6 col-md-3 col-lg-3">
      <h4>校园风景</h4>
      <section class="thnu_scenery_link">
        <a href="#" class=""><img :src="this.sceneryList[0].images[0].url" alt=""></a>
      </section>
    </div>
    <div class="thnu_job col-xs-12 col-sm-6 col-md-3 col-lg-3">
      <h4>兼职发布</h4>
      <div>
        <section class="thnu_job_link">
          <a href="#" class=""><img :src="this.jobList[0].images[0].url" alt=""></a>
        </section>
      </div>
    </div>
    <div class="thnu_goods col-xs-12 col-sm-6 col-md-3 col-lg-3">
      <h4>二手闲置</h4>
      <section class="thnu_goods_link row">
        <a href="#" class="col-xs-12 col-sm-6 col-md-12"><img :src="this.goodsList[0].images[0].url" alt=""></a>
        <a href="#" class="col-xs-hide-12 col-sm-6 col-md-12"><p>啊哈哈哈</p></a>
      </section>
    </div>
    <div class="thnu_club col-xs-12 col-sm-6 col-md-3 col-lg-3">
      <h4>校园活动</h4>
      <section class="thnu_club_link">
        <a href="#" class=""><img :src="this.clubList[0].images[0].url" alt=""></a>
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
                            url:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536761979683&di=455c3e40e08e22f60bf78318732190a9&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F19%2F79%2F59%2F5719ac9915d83.jpg"
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
                            url:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536762070832&di=cbc77a25937d0e653e0e1fb018a4c7bf&imgtype=0&src=http%3A%2F%2Fimages.3158.cn%2Fdata%2Fattachment%2Fjiaju%2Farticle%2F2013%2F04%2F03%2Fb28ba4dc81fbed390a9ead7a8b8d8f11.jpg"
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
                            url:
                                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536762105778&di=5ea67618daacda8c30eee50768f84887&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140524%2F0017029534230577_b.jpg"
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
    padding: 20px;
    // border: 1px solid #ccc;
    // border-radius: 10px;
}
//h4公共样式
.thnu_scenery h4,
.thnu_job h4,
.thnu_goods h4,
.thnu_club h4 {
    border-bottom: 1px solid #ccc;
}
//a公共样式
.thnu_scenery .thnu_scenery_link a,
.thnu_job .thnu_job_link a,
.thnu_goods .thnu_goods_link a,
.thnu_club .thnu_club_link a {
}
//图片公共样式
.thnu_scenery .thnu_scenery_link a > img,
.thnu_job .thnu_job_link a > img,
.thnu_goods .thnu_goods_link a > img,
.thnu_club .thnu_club_link a > img {
    width: 100%;
    height: 200px;
}

//鼠标经过公共样式
.thnu_scenery a:hover > img,
.thnu_job a:hover > img,
.thnu_goods a:hover > img,
.thnu_club a:hover > img {
    box-shadow: 3px 3px 1px;
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

