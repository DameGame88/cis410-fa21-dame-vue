import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import EJuiceDetail from "./components/EJuiceDetail.vue";
import EJuice from "./components/EJuice.vue";
import NotFound from "./components/NotFound.vue";
import ReviewCreate from "./components/ReviewCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import myStore from "./store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/account",
      component: Account,
      beforeEnter(to, from, next) {
        if (myStore.state.token) {
          next();
        } else {
          next("/login");
        }
      },
    },
    { path: "/login", component: Login },
    { path: "/ejuice", component: EJuice },
    {
      path: "/ejuice/:pk",
      component: EJuiceDetail,
      children: [{ path: "review", component: ReviewCreate }],
    },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
