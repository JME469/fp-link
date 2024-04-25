import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import StudentLogin from "@/views/StudentLogin.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView, 
  },
  {
    path: "/estudiantes",
    name: "estudiantes",
    component: StudentLogin, 
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
