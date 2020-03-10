import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import TasksList from '../components/TasksList.vue'
import Search from '../components/Search.vue'
import NotFound from '../components/NotFound.vue'
import Catalogs from '../components/Catalogs.vue'
import AboutAuthors from '../components/AboutAuthors.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksList
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/catalogs',
    name: 'Catalogs',
    component: Catalogs
  },
  {
    path: '/authors',
    name: 'Authors',
    component: AboutAuthors
  },
  {
    path: '**',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
