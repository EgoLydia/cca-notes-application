import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Home.vue"),
    },

    {
        path: "/SignupPage",
        name: "SignupPage",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/SignupPage.vue"),
    },

    {
        path: "/NoteList",
        name: "NoteList",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/NoteList.vue"),
    },

    // {
    //   path: '/NoteComponentPage',
    //   name: 'NoteComponentPage',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/NoteComponentPage.vue')
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;