<template>
    <!-- 个人中心 -->
    <div class="thnu_personal container-fluid">
        <header class="row">
            <div class="container head_user col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                <img :src="userInfo.avatar" alt="">
                <span>{{userInfo.userName}}</span>
            </div>
            <div class="container head_nav col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                <ul class="nav nav-pills my_nav" role="tablist">
                    <li role="presentation" class="active">
                        <router-link :to="'/personalCenter/personalInformation'" href="#home" aria-controls="home" role="tab" data-toggle="tab">个人资料</router-link>
                    </li>
                    <li role="presentation">
                        <router-link :to="'/personalCenter/personalMessage'" href="#profile" aria-controls="profile" role="tab" data-toggle="tab">我的消息</router-link>
                    </li>
                    <li role="presentation" class="">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="tab" aria-expanded="false">
                            我要发布
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <router-link :to="'/personalCenter/addGoods'">发布闲置商品</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/addLose'">发布寻物启事</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/addSport'">发布校园活动</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/addExpressage'">发布快递</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/addJob'">发布兼职</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/addLove'">我要表白</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/addFun'">发布趣事</router-link>
                            </li>

                        </ul>
                    </li>
                    <li role="presentation" class="">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="tab" aria-expanded="false">
                            更多信息
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <router-link :to="'/personalCenter/myGoods'">我的闲置商品</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/mySport'">我发布的活动</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/myJob'">我发布的兼职</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/myExp'">我发布的快递</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/myLove'">我发布的告白</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/myFun'">我发布的趣事</router-link>
                            </li>
                            <li>
                                <router-link :to="'/personalCenter/myLose'">我的寻物启事</router-link>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <router-link :to="'/personalCenter/myPwd'">修改密码</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <br style="clear: both">
            </div>
        </header>
        <div class="content row">
            <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                <PersonalInformation v-if="this.$route.path == '/personalCenter'" />
                <transition name="component-fade" mode="out-in">
                    <router-view/>
                </transition>
            </div>
        </div>
    </div>

</template>
<script>
import PersonalInformation from "./PersonalInformation.vue";
import { mapGetters } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            userInfo: "user/getUserInfo"
        })
    },
    components: {
        PersonalInformation
    }
};
</script>
<style lang="less" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
}
header {
    // height: 200px;
    background: url(/static/images/personal.jpg) no-repeat center center;
    background-size: cover;
    .head_user {
        padding-top: 20px;
        //头像
        img {
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        //用户名
        span {
            font-size: 20px;
        }
    }
    //导航栏
    .head_nav {
        padding-top: 30px;
        a {
            color: black;
        }
        .my_nav > li.active > a,
        .my_nav > li.active > a:focus,
        .my_nav > li.active > a:hover {
            background: transparent;
            color: black;
        }
    }
}

.content {
    padding-top: 20px;
}
</style>


