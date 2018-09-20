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
@media (max-width: 768px) {
    .thnu_Navigation {
        padding: 0 10px;
        margin-top: 51px;
    }
}
@media (min-width: 768px) and (max-width: 992px) {
    .thnu_Navigation {
        padding: 50px 30px;
        margin-top: 51px;
    }
}
@media (min-width: 992px) and (max-width: 1200px) {
    .thnu_Navigation {
        padding: 50px 60px;
        margin-top: 51px;
    }
}
@media (min-width: 1200px) {
    .thnu_Navigation {
        padding: 50px 90px;
        margin-top: 51px;
    }
}
</style>

