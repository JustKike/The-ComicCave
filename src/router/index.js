import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ( /* webpackChunkName: "Home" */ "../views/Home.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/releases",
        name: "Releases",
        component: () =>
            import ( /* webpackChunkName: "Releases" */ "../views/Releases.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import ( /* webpackChunkName: "Contact" */ "../views/Contact.vue"),
    },
    {
        path: "/cienciaF",
        name: "CienciaF",
        component: () =>
            import ( /* webpackChunkName: "CienciaF" */ "../views/CienciaF.vue"),
    },
    {
        path: "/forum",
        name: "Forum",
        component: () =>
            import ( /* webpackChunkName: "Forum" */ "../views/Forum.vue"),
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;