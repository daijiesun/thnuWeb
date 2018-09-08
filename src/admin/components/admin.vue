<template>
    <div class="admin">
        <div class="admin_not_login container-fluid row" v-if="!admin">
            <form class="admin_login_form form-signin col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                <h2 class="form-signin-heading">请登录后台管理系统</h2>
                <label for="adminName">管理员名</label>
                <input type="" id="adminName" class="form-control btn-lg" placeholder="管理员名" required="true" oninvalid="setCustomValidity('请输入用户名');" autofocus autocomplete="on">
                <label for="inputPassword">密码</label>
                <input type="password" id="inputPassword" class="form-control btn-lg" placeholder="管理员密码" required="true" oninvalid="setCustomValidity('请输入密码');">
                <button class="btn btn-lg btn-primary btn-block" @click="adminLogin">登录</button>
            </form>
            <!-- <Login/> -->
        </div>
        <div class="admin_is_login" v-else>
            <!-- 顶部 -->
            <nav class="navbar navbar-inverse ">
                <div class="container-fluid">
                    <!-- 主页 -->
                    <span class="navbar-brand" style="color: #fff" href="#">后台管理系统</span>
                    <!-- 个人信息框 -->
                    <div class="right_bar">
                        <div class="dropdown .dropdown-menu-right">
                            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                                {{admin}}
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li role="presentation">
                                    <a role="menuitem" tabindex="-1" href="#">修改信息</a>
                                </li>
                                <li class="divider"></li>
                                <li role="presentation">
                                    <a role="menuitem" tabindex="-1" href="#">退出登录</a>
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
                    <aside class="admin_aside col-xs-3 col-sm-3 col-md-2">
                        <ul class="aside_active nav nav-sidebar panel-group" id="accordion">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title aside_active_cancel">
                                        <span data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            用户管理
                                        </span>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse">
                                    <ul class="aside_active_cancel">
                                        <li>
                                            <router-link :to="'/admin/usermanage'">用户信息</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="'/admin/adduser'">添加用户</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--  -->
                            <div class="panel panel-default">
                                <div class="panel-heading aside_active_cancel">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                            公告管理
                                        </a>
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
                                                <a href="#">快递服务管理</a>
                                            </li>
                                            <li>
                                                <a href="#">快递服务管理</a>
                                            </li>
                                            <li>
                                                <a href="#">兼职发布管理</a>
                                            </li>
                                            <li>
                                                <a href="#">商品管理管理</a>
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
                                                <a href="#">表白墙管理</a>
                                            </li>
                                            <li>
                                                <a href="#">趣事管理</a>
                                            </li>
                                            <li>
                                                <a href="#">贴吧管理</a>
                                            </li>
                                            <li>
                                                <a href="#">新闻管理</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </aside>
                    <!-- 右侧内容区域 -->
                    <section class="admin_content col-xs-9 col-xs-offset-3 col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
                        <div class="admin_content_top">当前用户：{{user}}，当前时间：{{loginTime}}</div>
                        <router-view/>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserManage from "./UserManage.vue";
// import Login from "./Login.vue"
export default {
    data() {
        return {
            loginTime: "2018/9/8--17:00",
            admin: null
        };
    },
    components: {
        UserManage
        // Login
    },
    methods: {
        adminLogin: function() {
            //
        }
    }
};
</script>
<style lang="less" scoped>
@charset "UTF-8";
//登录页面样式
.admin_not_login{
    position: fixed;
    background: url("/static/bgc_login_admin.jpg") no-repeat center center;
    background-size: cover;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
}
.admin_login_form {
    margin-top: 100px;
}
.admin_login_form label{
   color: #2C5F8D;
   font-size: 16px;
}
.admin_not_login h2{
    color: #2C5F8D;
    text-align: center;
}
.admin_not_login input{
    margin-bottom: 20px;
}
.admin_not_login button{
    margin-top: 40px;
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
        padding-right: 40px;
        padding-top: 10px;
        float: right;
    }
}
//左边菜单栏
.admin_aside {
    position: fixed;
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
//鼠标经过的样式修改
.aside_active_cancel a,
.aside_active_cancel li {
    display: block;
    text-decoration: none;
    list-style: none;
    color: #000;
    font-size: 16px;
}
.aside_active_cancel li {
    padding-top: 5px;
}
.aside_active_cancel span {
    cursor: pointer;
}
.aside_active_cancel li a:hover {
    color: blue;
}
.aside_active li:hover {
    text-decoration: none;
}

// 右边内容
.admin_content {
    padding: 10px 30px;
}
.admin_content_top {
    background-color: pink;
    font-size: 20px;
    line-height: 20px;
    padding: 5px auto;
    text-align: center;
}
</style>

