import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/note-list",
    name: "Note-List",
    component: () => import("../views/NoteList.vue"),
  },
  {
    path: "/signup-page",
    name: "signup-page",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignupPage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/note-component-page/:id",
    name: "note-component-page",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NoteComponentPage.vue"),
      props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;