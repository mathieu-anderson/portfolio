// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

// Vue.material.registerTheme({
//   default: {
//     primary: 'indigo',
//     accent: 'teal',
//     warn: 'red',
//     background: 'white'
//   },
//   headerHello: {
//     primary: 'white',
//     accent: 'teal',
//     warn: 'red',
//     background: 'indigo'
//   },
//   headerAbout: {
//     background: 'deep-orange'
//   }
// })
//
// Vue.material.registerTheme('cv', {
//   primary: {
//     color: 'grey',
//     hue: '100'
//   },
//   accent: {
//     color: 'deep-orange',
//     hue: '500'
//   },
//   warn: {
//     color: 'red',
//     hue: '500'
//   },
//   background: {
//     color: 'deep-orange',
//     hue: '500'
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
