import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import StudentLogin from "@/views/StudentLogin.vue";
import CompanyLogin from "@/views/CompanyLogin.vue";
import FeedView from "@/views/FeedView.vue";
import ContactView from "@/views/ContactView.vue";

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
  {
    path: "/empresas",
    name: "empresas",
    component: CompanyLogin, 
  },
  {
    path: "/feed",
    name: "feed",
    component: FeedView, 
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView, 
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
