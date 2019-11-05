<template>
    <div class="courses">
        <ul class="courses__list">
            <li
                    v-for="(cours, index) in getCourses"
                    :key="index"
                    class="courses__item"
                    @click="to(cours.id)"
            > {{ cours.name }} </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

	export default {
		name: "Courses",
        computed: {
            ...mapGetters([
                'getCourses',
            ]),
        },
        methods: {
            ...mapActions([
                'actionCurrentPage'
            ]),
            /**
             * Переход между страницами
             * */
            to(id) {
                this.actionCurrentPage(0);
                this.$router.push({name: 'lessons', params: { id }});
            },
        }
	}
</script>

<style scoped lang="scss">
    .courses {

        &__list {

        }

        &__item {
            cursor: pointer;
        }
    }
</style>
