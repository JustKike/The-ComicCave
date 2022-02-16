import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/", //ruta a la que nos vamos a dirigir por defecto
        name: "Home", //el nombre
        component: () =>
            import ( /* webpackChunkName: "Home" */ "../views/Home.vue"), //importamos vista
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ( /* webpackChunkName: "About" */ "../views/About.vue"),
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
            import ( /* webpackChunkName: "CienciaF" */ "../views/categoria/CienciaF.vue"),
    },
    {
        path: "/superHeroes",
        name: "SuperH",
        component: () =>
            import ( /* webpackChunkName: "SuperH" */ "../views/categoria/SuperH.vue"),
    },
    {
        path: "/Marvel",
        name: "Marvel",
        component: () =>
            import ( /* webpackChunkName: "KingThor */ "../views/categoria/Marvel.vue"),
    },
    {
        path: "/DC",
        name: "DC",
        component: () =>
            import ( /* webpackChunkName: "KingThor */ "../views/categoria/DC.vue"),
    },
    {
        path: "/Otros",
        name: "Otros",
        component: () =>
            import ( /* webpackChunkName: "KingThor */ "../views/categoria/Otros.vue"),
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