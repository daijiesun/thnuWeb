<template>
    <div class="nav">
        <router-link :to="{name: 'Admin'}"></router-link>
        <router-link :to="{name: 'Test'}"></router-link>
    </div>
</template>
<script>
import Admin from '../admin/components/admin.vue'
import Test from '../admin/components/test.vue'
export default {
    components: {
        Admin,
        Test,
    }
}
</script>
<style scoped>
    
</style>
