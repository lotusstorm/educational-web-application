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
        props: {
            data: Array,
            id: [Number, String]
        },
        components: {
            'app-controller': AppController,
        },
        computed: {
            ...mapGetters([
                'getItemsOnPage',
                'getCurrentPage',
            ]),
            /**
             * Кнопки для переключения страний
             * */
            items() {
                let lessons = this.data.filter(i => i.courseId === this.$route.params.id);
                return Math.ceil(lessons.length/this.getItemsOnPage)
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
