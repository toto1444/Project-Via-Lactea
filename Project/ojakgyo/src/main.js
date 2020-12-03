/*
 *  ###################################################
 *  ###                                             ###
 *  ###   Organized and Manged by @author           ###
 *  ###                                             ###
 *  ###   @author  AhHyeon An <toto1444@gmail.com>  ###
 *  ###   @version 1.3                              ###
 *  ###   @since   2020-12-03                       ###
 *  ###                                             ###
 *  ###################################################
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import store from './store'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
