<template>
    <div class="pagination">
        <app-controller
                v-for="(item, index) in items"
                :key="index"
                :value="item"
                @event="swap"
        ></app-controller>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import AppController from '@/components/AppController.vue'

    export default {
        name: "AppPagination",
        components: {
            'app-controller': AppController,
        },
        computed: {
            ...mapGetters([
                'getLessons',
                'getItemsOnPage',
                'getCurrentPage',
            ]),
            /**
             * Кнопки для переключения страниц
             * */
            items() {
                let lessons = this.getLessons.filter(i => i.courseId === this.$route.params.id);
                let pages = Math.ceil(lessons.length/this.getItemsOnPage);
                return pages > 1 ? pages : 0
            }
        },
        methods: {
            ...mapActions([
                'actionCurrentPage'
            ]),
            /**
             * Переключатель между страницами
             * */
            swap(e) {
                this.actionCurrentPage(e.target.value - 1);
            }
        }
    }
</script>

<style scoped lang="scss">
    .pagination {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-self: center;
        width: 100%;
    }

    .active {
        background-color: #ffffff;
    }
</style>
