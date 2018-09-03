<template>
    <div class="admin">
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Brand</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Dropdown
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="#">Action</a>
                                </li>
                                <li>
                                    <a href="#">Another action</a>
                                </li>
                                <li>
                                    <a href="#">Something else here</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">Separated link</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <aside class="admin_aside col-sm-3 col-md-2">
            <li>
                <ul>用户管理
                    <li>用户管理</li>
                    <li>用户管理</li>
                    <li>用户管理</li>
                </ul>

            </li>
        </aside>
        <div class="admin_content col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.admin_aside {
    position: fixed;
    top: 51px;
    bottom: 0;
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
    z-index: 999;

}
.admin_content{
    padding-top: 50px;
    overflow: hidden;
}
</style>

