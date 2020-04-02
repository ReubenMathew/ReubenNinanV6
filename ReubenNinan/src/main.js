import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

// import Unicon from 'vue-unicons'
// import { uniGithubAlt, uniFileAlt } from 'vue-unicons/src/icons'

// Unicon.add([uniGithubAlt, uniFileAlt])
// Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
