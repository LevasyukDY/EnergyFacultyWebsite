import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/faculty",
    name: "Faculty",
    component: () => import("../views/FacultyPage.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/NewsPage.vue"),
  },
  {
    path: "/students",
    name: "Students",
    component: () => import("../views/StudentsPage.vue"),
  },
  {
    path: "/abiturients",
    name: "Abiturients",
    component: () => import("../views/AbiturientsPage.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/ContactsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
