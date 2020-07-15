import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@views/Home'),
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('@views/Home'),
    },
    {
        name: 'card',
        path: '/card',
        component: () => import('@views/Card'),
    },
    {
        name: 'award',
        path: '/award',
        component: () => import('@views/Award'),
    },
    {
        name: 'getCard',
        path: '/get',
        component: () => import('@views/GetCard'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
