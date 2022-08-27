import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/note-list",
    name: "Note-List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NoteList.vue"),
  },
  {
    path: "/SignupPage",
    name: "SignupPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignupPage.vue"),
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
