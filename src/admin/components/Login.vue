<template>
    <div>
        <form class="form-signin col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
            <h2 class="form-signin-heading">请登录</h2>
            <label for="adminName" class="sr-only">管理员名</label>
            <input type="" id="adminName" class="form-control" placeholder="管理员名" required="" autofocus="">
            <label for="inputPassword" class="sr-only">密码</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="管理员密码" required="">
            <div class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
