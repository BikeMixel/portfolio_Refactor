import Vue from 'vue'
import App from './App.vue'
import './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faVuejs} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faGithub, faVuejs)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
