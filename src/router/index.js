/*
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-09 13:42:15
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-10 21:12:29
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './Home'
import mineRouter from './Mine'
import registerRouter from './Register'

Vue.use(VueRouter)

const routes = [
  homeRouter,
  mineRouter,
  registerRouter,
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