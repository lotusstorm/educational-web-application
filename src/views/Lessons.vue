<template>
    <div class="lessons">
        <ul class="lessons__list">
            <li
                v-for="(leson, index) in render"
                :key="index"
                class="lessons__item"
            > {{ leson.title }} </li>
        </ul>
        <app-pagination/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Pagination from '@/components/AppPagination.vue'

    export default {
        name: "Lessons",
        components: {
            'app-pagination': Pagination
        },
        computed: {
            ...mapGetters([
                'getLessons',
                'getItemsOnPage',
                'getCurrentPage',
            ]),
            render() {
                let lessons = this.getLessons.filter(i => i.courseId === this.$route.params.id);
                if (lessons.length > 0) {

                    const countOfPages = this.arrayToMatrix(lessons, this.getItemsOnPage);
                    return countOfPages[this.getCurrentPage]
                } else {
                    return lessons
                }
            }
        },
        methods: {
            /**
             * Преврацает массив в матрицу
             * */
            arrayToMatrix(arr, step) {

                let newArr = [];
                let start = 0;
                let end = step;

                for (let i=0; i<Math.ceil(arr.length/step); i++) {
                    if (start <= arr.length) {
                        newArr.push(arr.slice(start, end));
                        start += step;
                        end += step;
                    }
                }
                return newArr
            },
        }
    }
</script>

<style scoped lang="scss">
    .lessons {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__list {
            display: flex;
            flex-direction: column;
        }

        &__item {
            padding: 2px;
        }
    }
</style>
