/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-09 13:42:15
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-10 00:21:29
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './Home'
import mineRouter from './Mine'

Vue.use(VueRouter)

const routes = [
  homeRouter,
  mineRouter,
  {
    path: '/*',
    redirect: '/home',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router