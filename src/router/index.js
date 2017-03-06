import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import AboutMe from 'components/AboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
