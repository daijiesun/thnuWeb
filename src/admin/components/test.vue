<template>
  <div class="admin">
    <div class="admin_is_login">
      <!-- 顶部 -->
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <!-- 主页 -->
          <span class="navbar-brand" style="color: #fff" href="#">后台管理系统</span>
          <button type="button" class="navbar-toggle" id="control_button" @click="toggleOwn">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- 个人信息框 -->
          <div class="right_bar">
            <div class="dropdown .dropdown-menu-right">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                admin
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">修改信息</a>
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
          <!-- hidden-xs -->
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
          <section class="admin_content col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
            啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈 啊哈哈哈
            <router-view/>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserManage from "./UserManage.vue";
import AddUser from "./AddUser.vue";
import crypto from "../../../tools/crypto.js";
import Login from "./Login.vue";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            loginTime: "2018/9/8--17:00"
        };
    },
    methods: {
        toggleOwn: function() {
            $(function() {
                $("#control_by").toggleClass("hidden-xs");
                console.log("切换");
            });
        }
    }
};
</script>
<style lang=less scoped>
.admin {
    margin-top: 54px;
    min-width: 333px;
}
/* 顶部 */
.right_bar {
    padding-top: 8px;
    float: right;
}
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
.admin_aside {
    border: 1px solid red;
    background-color: yellow;
}
.toggle_own {
    display: block;
}
.admin_content {
    background-color: pink;
}
</style>