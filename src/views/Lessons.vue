<template>
    <div class="lessons">
        <div class="lessons__content">
            <ul class="">
                <li
                    v-for="(leson, index) in render"
                    :key="index"
                > {{ leson.title }} </li>
            </ul>
        </div>
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
                    // while (!countOfPages[this.getCurrentPage] && this.getCurrentPage > 0) {
                    //     this.actionCurrentPage(this.getCurrentPage - 1);
                    // }
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

<style scoped>

</style>
