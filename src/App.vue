<template>
    <div id="app">
        <app-header/>
        <div class="app__content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/AppHeader.vue'

    export default {
        name: "App",
        components: {
            'app-header': Header
        }
    }
</script>

<style lang="scss">
    @import "assets/css/reset.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
