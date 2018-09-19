<template>
    <div class="per_mas">
        <div v-if="!userInfo.message">暂无消息！</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userInfo: {}
        };
    }
};
</script>
<style lang="less" scoped>
</style>


