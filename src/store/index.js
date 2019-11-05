import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from '@/helpers'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        courses: [],
        lessons: [],
        currentPage: 0,
        itemsOnPage: 5,
    },
    mutations: {
        setCurrentPage(state, value) {
            state.currentPage = value
        },

        setLessons(state, data) {
            state.lessons = data
        },

        setCourses(state, data) {
            state.courses = data
        }
    },
    actions: {
        async loadLessons({commit}) {
            try {
                const response = await HTTP.get("/lessons");
                const data = await response.data;
                commit('setLessons', data);
            } catch (e) {
                console.error(e);
            }
        },
        async loadCourses({commit}) {
            try {
                const response = await HTTP.get("/courses");
                const data = await response.data;
                commit('setCourses', data);
            } catch (e) {
                console.error(e);
            }
        },
        actionCurrentPage({commit}, value) {
            commit('setCurrentPage', value)
        }
    },
    getters: {
        getCourses: s => s.courses,
        getLessons: s => s.lessons,
        getCurrentPage: s => s.currentPage,
        getItemsOnPage: s => s.itemsOnPage,
    }
})
