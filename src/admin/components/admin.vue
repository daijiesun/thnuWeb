<template>
    <div class="admin container-fluid">
        <!-- 顶部栏 -->
        <nav class="top_nav navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="">
                    <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button> -->
                    <router-link :to="{name: 'Admin'}" class="navbar-brand">
                        <span class="glyphicon glyphicon-home" aria-hidden="true"></span> 后台管理</router-link>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">admin
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="#">个人中心</a>
                                </li>
                                <li>
                                    <a href="#">切换账号</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">退出</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <!-- 左侧菜单栏 -->
        <aside class="aside_nav">
            haha
        </aside>
        <!-- 右侧内容区域 -->
        <div class="content">
            ddfasdfasdf
        </div>
    </div>
</template>
<script>
export default {
    mounted() {}
};
</script>
<style lang="less" scoped>
* {
    list-style: none;
    margin: 0;
    padding: 0;
}

.admin {
    // position: relative;
}
//顶部栏
.top_nav {
    position: fixed;
    // top: 0,
    // left: 0;
}

// 左侧导航栏
.aside_nav {
    padding-top: 70px;
    float: left;
    height: 1000px;
    // position: absolute;
    width: 200px;
    background-color: #ccc;
    ul {
        cursor: pointer;
    }
    ul .menuGroup {
        // height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 16px;
        border-bottom: 1px solid #333;
        padding: 10px 0;
    }
}

// 右侧内容
.content {
    background-color: #c3c3c3;
    // width: 100%;
    overflow: hidden;
    padding-top: 70px;
}

</style>