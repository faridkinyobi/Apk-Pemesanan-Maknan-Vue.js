import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/FoodsView.vue'
import FoodsDetailView from '../views/FoodsDetailView.vue'
import KeranjangView from '../views/KeranjangView.vue'
import PesanSuksesView from '@/views/PesanSuksesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Foods',
      name: 'foods',
      component: FoodsView
    },
    {
      path: '/foods/:id',
      name: 'foodsDetail',
      component: FoodsDetailView
    },
    {
      path: '/Keranjang',
      name: 'Keranjang',
      component: KeranjangView
    },
    {
      path: '/Sukses',
      name: 'Sukses',
      component: PesanSuksesView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
