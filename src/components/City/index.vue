<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-10 21:41:39
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-11 10:27:37
-->
<!-- 选择城市界面 -->
<template>
  <div id="SelectCity">
    <el-container>
      <el-header height="50px">
        <label @click="changePage">关闭</label>
        <label>选择城市</label>
      </el-header>
      <div id="search-box" @click="onLoad">
        <el-input placeholder="输入城市名或拼音" v-model="city" class="search-input">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <i slot="suffix" class="el-input__icon el-icon-circle-close"></i>
        </el-input>
      </div>
      <el-main>
        <div class="city-body">
          <div class="city-list">
            <div class="easy-mounted">
              <div class="now-city">
                <h2>定位城市</h2>
                <ul class="clearfix">
                  <li>广州</li>
                </ul>
              </div>
              <div class="history-city">
                <h2>历史访问城市</h2>
                <ul class="clearfix">
                  <li>广州</li>
                  <li>深圳</li>
                </ul>
              </div>
              <div class="hot-city">
                <h2>热门城市</h2>
                <ul class="clearfix">
                  <li>上海</li>
                  <li>北京</li>
                  <li>上海</li>
                  <li>北京</li>
                  <li>上海</li>
                  <li>北京</li>
                  <li>上海</li>
                  <li>北京</li>
                </ul>
              </div>
            </div>
            <div class="city-sort">
              <van-index-bar :index-list="indexList">
                <div v-for="(items,index) in cityList" :key="index">
                  <van-index-anchor class="heading" :index="items.title">{{items.title}}</van-index-anchor>
                  <van-cell
                    v-for="(cityitems,cityindex) in items.lists"
                    :key="cityindex"
                    :title="cityitems"
                    @click="selectCity(cityitems)"
                  ></van-cell>
                </div>
              </van-index-bar>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  data () {
    return {
      hotCity: [],
      cityList: [],
      indexList: [],
      city: "",
      hasSelect: ""
    }
  },
  mounted: function () {
    this.onLoad()
  },
  methods: {
    changePage () {
      this.$emit('fun', true)
    },
    onLoad () {
      let data = require('../../../city.json')
      for (let item of data.city) {
        this.cityList.push(item)
        this.indexList.push(item.title)
      }
    },
    selectCity (data) {
      this.hasSelect = data
      this.$store.commit('newMineCity', this.hasSelect)
      this.changePage()
    }
  },
}

</script>
<style scoped>
@import '../../../public/css/container.css';
@import '../../../public/css/city.css';
</style>