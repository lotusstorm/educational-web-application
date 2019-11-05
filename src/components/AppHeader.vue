<template>
    <header class="header">
        <nav class="nav">
            <router-link
                    v-for="(link, index) in data"
                    :key="index"
                    class="nav__link"
                    :to="link.path"
                    :tag="tag"
            >{{ link.value }}</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "AppHeader",
        props: {
            data: Array,
            tag: {
                type: String,
                default: 'a'
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav {
        padding: 10px;

        &__link {
            font-weight: bold;
            padding: 5px;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
