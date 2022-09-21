import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//  import { auth } from "@/firebase";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requriesAuth: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    meta:{
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



export default router;
