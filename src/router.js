import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Home from "./views/Home.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/tes/hari-5/Profile.vue";
import Produk from "./views/tes/hari-5/Produk.vue";
import ProfileProduk from "./views/tes/hari-5/ProfileProduk.vue";
import HariSatuSampaiTiga from "./views/tes/Hari1-3.vue";
import HariEmpat from "./views/tes/Hari4.vue";
import Parent from "./views/tes/hari-6/Parent.vue";
import Child from "./views/tes/hari-6/Child.vue";
import HariTujuh from "./views/tes/Hari7.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/hari1-3",
      name: "hari1-3",
      components: {
        header: AppHeader,
        default: HariSatuSampaiTiga,
        footer: AppFooter
      }
    },
    {
      path: "/hari4",
      name: "hari4",
      components: {
        header: AppHeader,
        default: HariEmpat,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/produk",
      name: "produk",
      components: {
        header: AppHeader,
        default: Produk,
        footer: AppFooter
      }
    },
    {
      path: "/profile-produk",
      name: "profile-produk",
      components: {
        header: AppHeader,
        default: ProfileProduk,
        footer: AppFooter
      }
    },
    {
      path: "/parent",
      name: "parent",
      components: {
        header: AppHeader,
        default: Parent,
        footer: AppFooter
      }
    },
    {
      path: "/child",
      name: "child",
      components: {
        header: AppHeader,
        default: Child,
        footer: AppFooter
      }
    },
    {
      path: "/hari7",
      name: "hari7",
      components: {
        header: AppHeader,
        default: HariTujuh,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
