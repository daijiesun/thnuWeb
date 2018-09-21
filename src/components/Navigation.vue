<template>
    <div class="thnu_Navigation">
        <SowingMap/>
        <Content/>
        <Bottom/>
    </div>
</template>
<script>
import SowingMap from "./Home/SowingMap.vue";
import Content from "./Home/Content.vue";
import Bottom from "./Home/Bottom.vue";
export default {
    components: {
        SowingMap,
        Content,
        Bottom
    }
};
</script>
<style scoped>
.thnu_Navigation {
}
</style>

