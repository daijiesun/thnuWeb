<template>
    <div class="admin">
        <div class="container-fluid row" v-if="!admin">
            <Login/>
        </div>
        <div class="admin_is_login" v-else>
            <!-- 顶部 -->
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                    <!-- 主页 -->
                    <router-link :to="'/admin'" class="navbar-brand" style="color: #fff" href="#">后台管理系统</router-link>>
                    <button type="button" class="navbar-toggle" id="control_button" @click="toggleOwn">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- 个人信息框 -->
                    <div class="right_bar">
                        <div class="dropdown .dropdown-menu-right">
                            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                                {{admin.adminName}}
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li role="presentation">
                                    <a role="menuitem" tabindex="-1" href="javascript:void(0);">修改信息</a>
                                </li>
                                <li class="divider"></li>
                                <li role="presentation">
                                    <a role="menuitem" tabindex="-1" @click="logout" href="javascript:;">退出登录</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>
            <!-- 下面部分 -->
            <div class="container-fluid">
                <div class="row">
                    <!-- 左侧导航栏 -->
                    <aside class="admin_aside hidden-xs col-sm-3 col-md-2" id="control_by">
                        <ul class="aside_active nav nav-sidebar panel-group" id="accordion">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title aside_active_cancel">
                                        <span class="" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            用户管理
                                        </span>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse">
                                    <ul class="aside_active_cancel">
                                        <li>
                                            <router-link :to="'/admin/userManage'">用户信息</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="'/admin/addUser'">添加用户</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--  -->
                            <div class="panel panel-default">
                                <div class="panel-heading aside_active_cancel">
                                    <h4 class="panel-title">
                                        <router-link :to="'/admin/notice'" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                            公告管理
                                        </router-link>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse">

                                </div>
                            </div>
                            <!--  -->
                            <div class="panel panel-default">
                                <div class="panel-heading aside_active_cancel">
                                    <h4 class="panel-title">
                                        <span data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                            校园服务管理
                                        </span>
                                    </h4>
                                </div>
                                <div id="collapseThree" class="panel-collapse collapse">
                                    <div class="panel-body aside_active_cancel">
                                        <ul>
                                            <li>
                                                <router-link :to="'/admin/service/expressage'">快递服务管理</router-link>
                                            </li>
                                            <li>
                                                <router-link :to="'/admin/service/lose'">寻物启事管理</router-link>
                                            </li>
                                            <li>
                                                <router-link :to="'/admin/service/job'">兼职发布管理</router-link>
                                            </li>
                                            <li>
                                                <router-link :to="'/admin/service/goods'">二手商品管理</router-link>
                                            </li>
                                            <li>
                                                <router-link :to="'/admin/service/sport'">校园活动管理</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!--  -->
                            <div class="panel panel-default">
                                <div class="panel-heading aside_active_cancel">
                                    <h4 class="panel-title">
                                        <span data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                                            校园八卦管理
                                        </span>
                                    </h4>
                                </div>
                                <div id="collapseFour" class="panel-collapse collapse">
                                    <div class="panel-body aside_active_cancel">
                                        <ul>
                                            <li>
                                                <router-link :to="'/admin/gossip/love'">表白墙管理</router-link>
                                            </li>
                                            <li>
                                                <router-link :to="'/admin/gossip/fun'">趣事管理</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </aside>
                    <!-- 右侧内容区域 -->
                    <section class="admin_content col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2" id="admin_content" @click="clickContent">
                        <transition name="component-fade" mode="out-in">
                            <AdminIndex v-if="this.$route.path == '/admin'" />
                            <router-view/>
                        </transition>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AdminIndex from "./AdminIndex.vue";
import UserManage from "./UserManage.vue";
import AddUser from "./AddUser.vue";
import crypto from "../../../tools/crypto.js";
import Login from "./Login.vue";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    data() {
        return {};
    },
    mounted() {
        this.$store.dispatch("admin/getAdminSession");
    },
    components: {
        UserManage,
        Login,
        AddUser,
        AdminIndex
    },
    computed: {
        ...mapGetters({
            admin: "admin/getAdminInfo"
        })
    },
    methods: {
        toggleOwn: function() {
            $(function() {
                $("#control_by").toggleClass("hidden-xs");
            });
        },
        clickContent: function() {
            var hidden = $("#control_by").hasClass("hidden-xs");
            if (!hidden) {
                $("#control_by").addClass("hidden-xs");
            }
        },
        logout: function() {
            this.axios("/admin/logout")
                .then(response => {
                    console.log("admin logo out");
                    this.$store.dispatch("admin/getAdminSession");
                    // window.location = "/";
                    this.$router.push({ name: "Admin" });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
<style lang="less" scoped>
@charset "UTF-8";
//过度动画
.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
}

//样式
.admin {
    margin-top: 54px;
    min-width: 333px;
}
//登录后的页面样式
// 顶部栏
.admin {
    .admin_center {
        float: right;
        left: 10px;
        top: 10px;
    }
    .right_bar {
        padding-top: 8px;
        padding-right: 2px;
        float: right;
    }
}
//左边菜单栏
.admin_aside {
    position: fixed;
    text-align: center;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding-top: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #4b4b5f;
    border-right: 1px solid #ccc;
}
ul {
    -webkit-padding-start: 0px;
}
//鼠标经过导航栏的样式
.aside_active_cancel a,
.aside_active_cancel li {
    display: block;
    text-decoration: none;
    list-style: none;
    color: #000;
    font-size: 16px;
    text-align: center;
}
.aside_active_cancel li {
    padding-top: 5px;
}
.aside_active_cancel span {
    cursor: pointer;
}
.aside_active_cancel li a:hover {
    background-color: #eee;
}
.aside_active li:hover {
    text-decoration: none;
}

// 右边主体内容
.admin_content {
    padding-top: 30px;
    padding-bottom: 30px;
}
.admin_content_top {
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 10px;
    text-align: center;
}
</style>

