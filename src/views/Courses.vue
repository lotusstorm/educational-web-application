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
        display: flex;
        justify-content: center;

        &__list {
            display: flex;
            flex-direction: column;
        }

        &__item {
            padding: 2px;
            cursor: pointer;

            &:hover {
                color: #42b983;
            }
        }
    }
</style>
