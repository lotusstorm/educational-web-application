<template>
    <div class="container">
        <app-header
                :data="nav"
        />
        <hr>
        <router-view/>
    </div>

</template>

<script>
    import Header from '@/components/AppHeader.vue'

    export default {
        name: "Container",
        components: {
            'app-header': Header
        },
        data() {
            return {
                nav: [
                    {path: 'tests', value: 'Tests'},
                    {path: 'statistic', value: 'Statistic'},
                    {path: 'lessons', value: 'Lessons'}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav {
        padding: 5px;

        &__linc {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
