/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-09 13:42:15
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-14 23:51:16
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mineCity: '选择城市',
    mineCityId: ''
  },
  mutations: {
    newMineCity (state, msg) {
      state.mineCity = msg
    },
    newMineCityId (state, msg) {
      state.mineCityId = msg
    }
  },
  actions: {
  },
  modules: {
  }
})
