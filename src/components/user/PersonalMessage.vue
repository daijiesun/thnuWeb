<template>
    <div class="per_mas">
        <div v-if="!userInfo.message">暂无消息！</div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        userInfo: "user/getUserInfo"
    }
};
</script>
<style lang="less" scoped>
</style>


