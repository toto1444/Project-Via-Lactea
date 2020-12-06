/*
 *  ###################################################
 *  ###                                             ###
 *  ###   Organized and Manged by @author           ###
 *  ###                                             ###
 *  ###   @author  AhHyeon An <toto1444@gmail.com>  ###
 *  ###   @version 1.6                              ###
 *  ###   @since   2020-12-03                       ###
 *  ###                                             ###
 *  ###################################################
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import store from './store'
import VueDisqus from 'vue-disqus'
import CommentGrid from 'vue-comment-grid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(CommentGrid)
Vue.use(VueCompositionAPI)
Vue.use(VueDisqus, {
  shortname: 'ojacgyo'
})

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
