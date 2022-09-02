import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ("../views/Home.vue"),
    },

    {
        path: "/note-list",
        name: "Note-List",
        component: () =>
            import ("../views/NoteList.vue"),
    },
    {
        path: "/signup",
        name: "SignupPage",
        component: () =>
            import ("../views/SignupPage.vue"),
    },

    {
        path: "/AddNotePage",
        name: "AddNotePage",
        component: () =>
            import ("../views/AddNotePage.vue"),
    },
    {
        path: "/login",
        name: "LoginPage",
        component: () =>
            import ("../views/LoginPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;