<template>
    <div class="admin_index container-fluid">
        <div class="center-block">
            <h4 class="text-primary ">当前管理员：{{admin.adminName}},登录时间：{{this.date}}</h4>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import time from "../../../tools/time.js";
export default {
    data() {
        return {
            date: null
        };
    },
    mounted() {
        this.date = time();
    },
    computed: {
        ...mapGetters({
            admin: "admin/getAdminInfo"
        })
    }
};
</script>
<style lang="less" scoped>
.center-block h4{
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid #000;
}
</style>

