import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Movie from '../views/Movie.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})

export default router
