/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-09 13:42:15
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-11 10:41:30
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mineCity: '选择城市'
  },
  mutations: {
    newMineCity (state, msg) {
      state.mineCity = msg
    }
  },
  actions: {
  },
  modules: {
  }
})
