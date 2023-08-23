import { createWebHashHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue';
import DetailMovie from '../views/DetailMovie.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/detail-movie', name: 'detail-movie', component: DetailMovie }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router