<template>
    <div>
        <NavMenu/>
        <div class="padding">
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navigation from "./Navigation.vue";
import NavMenu from "./NavMenu.vue";
import Footer from "./Footer.vue";
export default {
    data() {
        return {};
    },
    components: {
        Navigation,
        NavMenu,
        Footer
    }
};
</script>
<style lang="less">
.padding{
    padding-top: 70px;
}
</style>


