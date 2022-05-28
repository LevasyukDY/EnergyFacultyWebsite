import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/faculty",
    name: "Faculty",
    component: () => import("../views/FacultyPage.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/ProfilePage.vue"),
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
  {
    path: "/news/:id",
    name: "Post",
    component: () => import("../views/PostPage.vue"),
  },
  {
    path: "/department/:id",
    name: "Department",
    component: () => import("../views/DepartmentPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
