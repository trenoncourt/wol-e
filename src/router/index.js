import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view (name) {
  return function (resolve) {
    require(['../views/' + name + '.vue'], resolve)
  }
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: view('Home')
    }
  ]
})
