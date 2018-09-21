<template>
    <!-- 个人资料 -->
    <div class="container-fluid">
        <div class="row">
            <form class="per_info">
                <div class="form-group">
                    <label for="userName">用户名</label>
                    <input type="text" class="form-control" id="userName" placeholder="无" v-model="userInfo.userName">
                </div>
                <div class="form-group">
                    <label for="email">邮箱</label>
                    <input type="email" class="form-control" id="email" placeholder="无" v-model="userInfo.email">
                </div>
                <div class="form-group">
                    <label for="name">真实姓名</label>
                    <input type="text" class="form-control" id="name" placeholder="无" v-model="userInfo.name">
                </div>
                <div class="form-group">
                    <label for="tel">电话</label>
                    <input type="text" class="form-control" id="tel" placeholder="无" v-model="userInfo.tel">
                </div>
                <div class="form-group">
                    <label for="notes">个人简介</label>
                    <textarea type="text" class="form-control" id="notes" rows=4 placeholder="无" v-model="userInfo.notes" />
                </div>
                <div>
                    <button class="btn btn-danger" @click="upload" type="button">确认修改</button>
                </div>
            </form>
        </div>

    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters({
            userInfo: "user/getUserInfo"
        })
    },
    methods: {}
};
</script>
<style lang="less" scoped>
* {
    //去掉row默认的margin
    // margin: 0;
}
.per_info {
    // padding: 20px 30px;
}
</style>



