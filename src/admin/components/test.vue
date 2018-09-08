<template>
  <div class="admin">
    <!-- 顶部 -->
    <nav class="navbar navbar-inverse ">
      <div class="container-fluid">
        <!-- 主页 -->
        <span class="navbar-brand" style="color: #fff" href="#">后台管理系统</span>
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
                    <li><router-link :to="'/admin/usermanage'">用户信息</router-link></li>
                    <li><router-link :to="'/admin/adduser'">添加用户</router-link></li>
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
                      <li><a href="#">快递服务管理</a></li>
                      <li><a href="#">快递服务管理</a></li>
                      <li><a href="#">兼职发布管理</a></li>
                      <li><a href="#">商品管理管理</a></li>
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
                      <li><a href="#">表白墙管理</a></li>
                      <li><a href="#">趣事管理</a></li>
                      <li><a href="#">贴吧管理</a></li>
                      <li><a href="#">新闻管理</a></li>
                    </ul>
                  </div>
                </div>
              </div>
          </ul>
        </aside>
        <!-- 右侧内容区域 -->
        <section class="admin_content col-xs-9 col-xs-offset-3 col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
          <span class="admin_content_top">当前用户：admin</span>
          <router-view/>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import UserManage from "./UserManage.vue";
export default {
    componentt: {
        UserManage
    }
};
</script>
<style lang="less" scoped>
@charset "UTF-8";
// 顶部栏
.admin {
    .admin_center {
        float: right;
        left: 10px;
        top: 10px;
    }
    .right_bar {
        padding-right: 20px;
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
.aside_active_cancel li{
  padding-top: 5px;
}
.aside_active_cancel span{
  cursor: pointer;
}
.aside_active_cancel li a:hover{
 color: blue;
}
.aside_active  li:hover {
    text-decoration: none;
}

// 右边内容
.admin_content {
    padding: 20px 30px;
}
</style>

