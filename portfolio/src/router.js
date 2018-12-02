import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home'
import bio from './components/bio.vue'
import contact from './components/contact.vue'
import project from './components/project.vue'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/bio',
      name: 'bio',
      component: bio
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: project
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

