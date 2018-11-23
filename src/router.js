import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Titles from './views/Titles.vue'
import Title from './views/Title.vue'
import Authors from './views/Authors.vue'
import Author from './views/Author.vue'
import Tags from './views/Tags.vue'
import Tag from './views/Tag.vue'
import Series from './views/Series.vue'
import SeriesDetails from './views/SeriesDetails.vue'
import store from './store/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router, BootstrapVue)

import {Layout} from 'bootstrap-vue/es/components';
import {Button, Form, Jumbotron} from 'bootstrap-vue/es/components';
import {FormGroup} from 'bootstrap-vue/es/components';
import {FormInput} from 'bootstrap-vue/es/components';
import {Navbar} from 'bootstrap-vue/es/components';
import {Table} from 'bootstrap-vue/es/components';
import {Card} from 'bootstrap-vue/es/components';
import {Link} from 'bootstrap-vue/es/components';
import {Tooltip} from 'bootstrap-vue/es/components';
import {Alert} from 'bootstrap-vue/es/components';

Vue.use(Layout)
Vue.use(Link)
Vue.use(Card)
Vue.use(Table)
Vue.use(Navbar)
Vue.use(FormInput)
Vue.use(FormGroup)
Vue.use(Form)
Vue.use(Jumbotron)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Alert)

import {library} from '@fortawesome/fontawesome-svg-core'
import {faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faCog)
library.add(faSignOutAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: ifAuthenticated,
    },
    {
      path: 'titles/:id',
      name: 'title',
      component: Title,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/titles',
      name: 'titles',
      component: Titles,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/authors/:id',
      name: 'author',
      component: Author,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/authors',
      name: 'authors',
      component: Authors,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/tags/:id',
      name: 'tag',
      component: Tag,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/series/:id',
      name: 'seriesDetails',
      component: SeriesDetails,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/series',
      name: 'series',
      component: Series,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      beforeEnter: ifAuthenticated,
    },
  ]
})
