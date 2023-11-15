import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Game from '@/view/game/index.vue'
import MapEdit from '@/view/mapEdit/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/game' },
  { path: '/game', component: Game },
  { path: '/mapEdit', component: MapEdit },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router