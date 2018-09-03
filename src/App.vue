<template>
  <div id="app">
    <NavMenu/>
    <router-view/>
  </div>
</template>

<script>
//绝对路径
import NavMenu from './components/NavMenu.vue';
export default {
  name: 'App',
  components:{
    NavMenu,
  }
}
</script>

<style>
</style>
