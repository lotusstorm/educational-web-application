<template>
    <div class="controller">
        <input
                type="button"
                :value="value"
                :id="id"
                :class="['controller__button', {'active' : value - 1 === getCurrentPage}]"
                @click="Event"
        >
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "AppController",
        props: {
            value: [String, Number],
            id: [String, Number]
        },
        computed: {
            ...mapGetters([
                'getCurrentPage',
            ]),
        },
        methods: {
            /**
             * Пробрасывет event в родительский компонент
             * */
            Event(e) {
                this.$emit('event', e)
            }
        }
    }
</script>

<style scoped lang="scss">
    .controller {
        padding: 2px;

        &__button {
            display: flex;
            border: none;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            color: #2c3e50;
            background-color: #42b983;
            border-bottom: 2px solid #2c3e50;
        }

        .active {
            background-color: #2c3e50;
            color: #42b983;
            border-bottom: 2px solid #42b983;
            transition: background-color, border-bottom .5s;
        }
    }
</style>

