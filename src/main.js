import Vue from 'vue'
import router from './router'
import store from '@/vuex/index.js'
import App from './App.vue'
import VueMq from 'vue-mq'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartBar, faBook, faHome, faUser, faArrowLeft, faBookOpen, faHeadphones, faShareSquare, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChartBar, faBook, faHome, faUser, faArrowLeft, faBookOpen, faHeadphones, faShareSquare, faCircleNotch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueMq, {
  breakpoints: {
    md: 850,
    lg: Infinity
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
