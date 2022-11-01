/**
 * author: 林欣
 * describe: vuex数据存储
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {STORE_MODELES} from '@control/control_unite'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: STORE_MODELES
})

export default store
