import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// ruta a interfaz principal
const routes = [{
        path: "/", //ruta a la que nos vamos a dirigir por defecto
        name: "Home", //el nombre
        component: () =>
            import ( /* webpackChunkName: "Home" */ "../views/Home.vue"), //importamos vista
    },
    {
        // ruta a pagina about
        path: "/about",
        name: "About",
        component: () =>
            import ( /* webpackChunkName: "About" */ "../views/About.vue"),
    },
    {
        // ruta a pagina nuevos lanzamientos
        path: "/releases",
        name: "Releases",
        component: () =>
            import ( /* webpackChunkName: "Releases" */ "../views/Releases.vue"),
    },
    {
        // ruta a pagina contactos
        path: "/contact",
        name: "Contact",
        component: () =>
            import ( /* webpackChunkName: "Contact" */ "../views/Contact.vue"),
    },
    {
        // ruta a pagina Ciencia ficcion
        path: "/cienciaF",
        name: "CienciaF",
        component: () =>
            import ( /* webpackChunkName: "CienciaF" */ "../views/categoria/CienciaF.vue"),
    },
    {
        // ruta a pagina SuperHeroes
        path: "/superHeroes",
        name: "SuperH",
        component: () =>
            import ( /* webpackChunkName: "SuperH" */ "../views/categoria/SuperH.vue"),
    },
    {
        // ruta a pagina Marvel
        path: "/Marvel",
        name: "Marvel",
        component: () =>
            import ( /* webpackChunkName: "KingThor */ "../views/categoria/Marvel.vue"),
    },
    {
        // ruta a pagina DC
        path: "/DC",
        name: "DC",
        component: () =>
            import ( /* webpackChunkName: "KingThor */ "../views/categoria/DC.vue"),
    },
    {
        // ruta a pagina otros
        path: "/Otros",
        name: "Otros",
        component: () =>
            import ( /* webpackChunkName: "KingThor */ "../views/categoria/Otros.vue"),
    },
    {
        // ruta al foro
        path: "/forum",
        name: "Forum",
        component: () =>
            import ( /* webpackChunkName: "Forum" */ "../views/Forum.vue"),
    },
    {
        // ruta a pagina Publicaciones
        path: "/Publicacion/:id",
        name: "Publicacion",
        component: () =>
            import ( /* webpackChunkName: "Publicacion" */ "../views/Publicacion.vue"),
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;