import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import StudentLogin from "@/views/StudentLogin.vue";
import CompanyLogin from "@/views/CompanyLogin.vue";
import FeedView from "@/views/FeedView.vue";
import ContactView from "@/views/ContactView.vue";
import CompanyProfile from "@/views/CompanyProfile.vue";
import StudentProfile from "@/views/StudentProfile.vue";
import CompanyFeed from "@/views/CompanyFeed";

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
    meta: { requiresAuth: true }, 
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView, 
  },
  {
    path: "/company-profile",
    name: "company-profile",
    component: CompanyProfile,
    meta: { requiresAuth: true }, 
  },
  {
    path: "/student-profile",
    name: "student-profile",
    component: StudentProfile,
    meta: { requiresAuth: true }, 
  },
  {
    path: "/company-feed",
    name: "company-feed",
    component: CompanyFeed,
    meta: { requiresAuth: true }, 
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Comprobar la existencia de token de autenticación en el navegador
    if (!localStorage.getItem('token')) {
      if (to.path.includes('company')) {
        next('/empresas'); // Redirección a login empresas
      } else if(to.path.includes('feed') || to.path.includes('student')){
        // Redirección a login estudiantes
        next('/estudiantes'); 
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
