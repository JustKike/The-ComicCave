import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
=======
import Home from '../views/Home.vue'
import Releases from '../views/Releases.vue'
import Contact from '../views/Contact.vue'
>>>>>>> 1cba4abfa41ee1e8f5c9890a98180cfcbf9ec7b6

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
<<<<<<< HEAD
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue')
=======
        component: Home
>>>>>>> 1cba4abfa41ee1e8f5c9890a98180cfcbf9ec7b6
    },
    {
        path: '/about',
        name: 'About',
<<<<<<< HEAD
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
=======
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/releases',
        name: 'Releases',
        component: Releases
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
>>>>>>> 1cba4abfa41ee1e8f5c9890a98180cfcbf9ec7b6
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router