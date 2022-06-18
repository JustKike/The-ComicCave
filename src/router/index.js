import Vue from "vue";
import VueRouter from "vue-router";
import { getAuth } from "firebase/auth";

Vue.use(VueRouter);
// ruta a interfaz principal
const routes = [{
        path: "/", //ruta a la que nos vamos a dirigir por defecto
        name: "Home", //el nombre
        component: () =>
            import ( /* webpackChunkName: "Home" */ "../views/Home.vue"), //importamos vista
        meta: { requiresAuth: true }
    },
    {
        // ruta a pagina about
        path: "/about",
        name: "About",
        component: () =>
            import ( /* webpackChunkName: "About" */ "../views/About.vue"),
        meta: { requiresAuth: true }
    },
    {
        // ruta a pagina nuevos lanzamientos
        path: "/releases",
        name: "Releases",
        component: () =>
            import ( /* webpackChunkName: "Releases" */ "../views/Releases.vue"),
        meta: { requiresAuth: true }
    },
    {
        // ruta a pagina contactos
        path: "/contact",
        name: "Contact",
        component: () =>
            import ( /* webpackChunkName: "Contact" */ "../views/Contact.vue"),
        meta: { requiresAuth: true }
    },
    {
        // ruta a pagina Ciencia ficcion
        path: "/cienciaF",
        name: "CienciaF",
        component: () =>
            import ( /* webpackChunkName: "CienciaF" */ "../views/categoria/CienciaF.vue"),
        meta: { requiresAuth: true }
    },
    {
        // ruta a pagina SuperHeroes
        path: "/superHeroes",
        name: "SuperH",
        component: () =>
            import ( /* webpackChunkName: "SuperH" */ "../views/categoria/SuperH.vue"),
        meta: { requiresAuth: true }
    },
    {
        // ruta a pagina Marvel
        path: "/Marvel",
        name: "Marvel",
        component: () =>
            import ( /* webpackChunkName: "KingThor */ "../views/categoria/Marvel.vue"),
        meta: { requiresAuth: true }
    },
    {
        // ruta a pagina DC
        path: "/DC",
        name: "DC",
        component: () =>
            import ( /* webpackChunkName: "KingThor */ "../views/categoria/DC.vue"),
        meta: { requiresAuth: true }
    },
    {
        // ruta a pagina otros
        path: "/Otros",
        name: "Otros",
        component: () =>
            import ( /* webpackChunkName: "KingThor */ "../views/categoria/Otros.vue"),
        meta: { requiresAuth: true }
    },
    {
        // ruta al foro
        path: "/forum",
        name: "Forum",
        component: () =>
            import ( /* webpackChunkName: "Forum" */ "../views/Forum.vue"),
        meta: { requiresAuth: true }
    },
    {
        // ruta a pagina Publicaciones
        path: "/Publicacion/:id",
        name: "Publicacion",
        component: () =>
            import ( /* webpackChunkName: "Publicacion" */ "../views/Publicacion.vue"),
        meta: { requiresAuth: true }
    },
    {
        // ruta a pagina Publicaciones
        path: "/DefPage",
        name: "DefPage",
        component: () =>
            import ( /* webpackChunkName: "DefPage" */ "../views/DefPage.vue")
    }
];



const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const auth = getAuth();
    const isAuthenticated = auth.currentUser;
    if (requiresAuth && !isAuthenticated) {
        next("/DefPage");
        alert("Debes iniciar sesion!");
    } else {
        next();
    }

})

export default router;