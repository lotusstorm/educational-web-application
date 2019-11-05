<template>
    <header class="header">
        <nav class="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/courses">Courses</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped lang="scss">
    .nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
