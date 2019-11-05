<template>
    <div class="container">
        <nav class="container__header">
            <input
                    type="button"
                    @click="to('tests')"
                    value="Tests"
            > |
            <input
                    type="button"
                    @click="to('statistic')"
                    value="Statistic"
            > |
            <input
                    type="button"
                    @click="to('lessons')"
                    value="Lessons"
            >
        </nav>
        <hr>
        <router-view/>
    </div>

</template>

<script>
    export default {
        name: "Container",
        methods: {
            to(name) {
                this.$router.push({ name: name }, () => {});
            },
        }
    }
</script>

<style scoped>

</style>
