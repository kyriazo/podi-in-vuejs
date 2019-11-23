import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'IDER - Thelonaginopodi',
        component: Home
    },
    {
        path: '/1',
        name: 'LEGalize it!',
        component: Home
    },
    {
        path: '/2',
        name: 'Ελευθερία στα άκρα!',
        component: Home
    },
    {
        path: '/3',
        name: 'ΠΟΔΕΜΟΣ!',
        component: Home
    },
    {
        path: '/4',
        name: 'Καμία ανοχή. Τα γάντια φυλακή!',
        component: Home
    },
    {
        path: '/5',
        name: 'Πάνω τα πόδια. Κάτω τα χέρια!',
        component: Home
    },
    {
        path: '/6',
        name: 'Πόδι μπορείς, μπορείς να προκριθείς!',
        component: Home
    },
    {
        path: '/7',
        name: 'No Pasaran!',
        component: Home
    },
    {
        path: '/8',
        name: 'Η αγάπη δέν έχει άκρο!',
        component: Home
    },
    {
        path: '/9',
        name: 'Λευτεριά στα πόδια μας ΤΩΡΑ!',
        component: Home
    },
    {
        path: '/10',
        name: 'Liberte fraternite LEGalite!',
        component: Home
    },
    {
        path: '/11',
        name: 'Αλληλεγγύη στα κάτω άκρα!',
        component: Home
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
})

export default router