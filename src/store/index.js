import Vue from 'vue'
import Vuex from 'vuex'

import shotsModule from './modules/shots/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    shots: shotsModule,
  }
})

export default store
