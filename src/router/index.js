import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ItemView from "../views/ItemView.vue";
import CartView from "../views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:patchMatch(.*)*",
      redirect: "/",
    },
    {
      path: "/about/:id",
      name: "about",
      component: ItemView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/cart/:patchMatch(.*)*",
      redirect: "/cart",
    }
  ],
});

export default router;
