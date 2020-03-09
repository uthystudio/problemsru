import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App';
import TasksList from './components/TasksList';
import NotFound from './components/NotFound';

const routes = {
  '/': App,
  '/tasks': TasksList,
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  vuetify,
  render (h) { return h(this.ViewComponent) }
})