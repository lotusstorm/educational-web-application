import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Lessons from '@/views/Lessons.vue'
import Courses from '@/views/Courses.vue'
import Statistic from '@/views/Statistic.vue'
import Tests from '@/views/Tests.vue'
import Container from '@/views/Container.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/courses',
        name: 'courses',
        component: Courses
    },
    {
        path: '/:id',
        component: Container,
        children: [
            {
                path: 'lessons',
                component: Lessons,
                name: 'lessons',
            },
            {
                path: 'tests',
                component: Tests,
                name: 'tests',
            },
            {
                path: 'statistic',
                component: Statistic,
                name: 'statistic',
            }
        ]
    },
    {
        path: '*',
        redirect: { name: 'home' }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
