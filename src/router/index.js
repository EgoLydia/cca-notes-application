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
    name: "note-List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NoteList.vue"),
  },
  {
    path: "/signup-page",
    name: "signup-page",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignupPage.vue"),
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
