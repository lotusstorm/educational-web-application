<template>
    <div id="app">
        <app-header :data="nav"/>
        <div class="app__content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/AppHeader.vue'

    export default {
        name: "App",
        data() {
            return {
                nav: [
                    {path: '/', value: 'Home'},
                    {path: '/courses', value: 'Courses'}
                ]
            }
        },
        components: {
            'app-header': Header
        },
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
