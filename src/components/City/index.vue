<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-10 21:41:39
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-15 00:41:43
-->
<!-- 选择城市界面 -->
<template>
  <div id="SelectCity">
    <el-container>
      <el-header height="50px">
        <label @click="changePage">关闭</label>
        <label>选择城市</label>
      </el-header>
      <div id="search-box">
        <el-input placeholder="输入城市名或拼音" v-model="searchCity" class="search-input">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <i slot="suffix" class="el-input__icon el-icon-circle-close"></i>
        </el-input>
      </div>
      <el-main>
        <div class="city-body">
          <div class="city-list">
            <div class="easy-mounted">
              <div class="now-city" style="display:none">
                <h2>定位城市</h2>
                <ul class="clearfix">
                  <li>广州</li>
                </ul>
              </div>
              <div class="history-city" style="display:none">
                <h2>历史访问城市</h2>
                <ul class="clearfix">
                  <li>广州</li>
                  <li>深圳</li>
                </ul>
              </div>
              <div class="hot-city">
                <h2>热门城市</h2>
                <ul class="clearfix">
                  <li
                    v-for="(item,index) in hotCity"
                    :key="index"
                    @click="selectingCity(item.name,item.cityid)"
                  >{{item.name}}</li>
                </ul>
              </div>
            </div>
            <div class="city-sort">
              <van-index-bar :index-list="indexList">
                <div v-for="(items,index) in cityList" :key="index">
                  <van-index-anchor class="heading" :index="items[0]">{{items[0]}}</van-index-anchor>
                  <van-cell
                    v-for="(cityitems,cityindex) in items[1]"
                    :key="cityindex"
                    :title="cityitems.name"
                    @click="selectingCity(cityitems.name,cityitems.cityid)"
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
import pinyin from '../../../node_modules/js-pinyin'
export default {
  name: 'CityList',
  data () {
    return {
      hotCity: [],
      cityList: [],
      indexList: [],
      searchCity: "",
      selectedCity: "",
      selectedCityId: "",
    }
  },
  mounted: function () {
    this.selectedCity = this.$store.state.mineCity
    this.selectedCityId = this.$store.state.mineCityId
    this.onLoad()
  },
  methods: {
    changePage () {
      this.$emit('fun', true)
    },
    onLoad () {
      let pinyin = require('js-pinyin')
      pinyin.setOptions({ checkPolyphone: false, charCase: 0 })
      let listmap = new Map()
      this.axios.get(`/movie/city`, {
        params: {
          appkey: 'ba3d95f28a04832d'
        }
      }).then((ret) => {
        let allCity = ret.data.result
        let citylist = allCity.filter((item) => {
          return (item.depth == 2 || (item.name == '北京') || (item.name == '天津') || (item.name == '上海') || (item.name == '重庆'))
        })
        this.hotCity = allCity.filter((item) => {
          return ((item.name == '北京') || (item.name == '广州') || (item.name == '天津') || (item.name == '上海') || (item.name == '重庆') || (item.name == '深圳') || (item.name == '杭州') || (item.name == '成都') || (item.name == '武汉'))
        })
        for (let item of citylist) {
          let firstName = pinyin.getCamelChars(item.name).substring(0, 1)
          if (listmap.has(firstName)) {
            listmap.get(firstName).push(item)
          }
          else {
            listmap.set(firstName, [item])
          }
        }
        this.cityList = Array.from(listmap).sort((a, b) => {
          return a[0].localeCompare(b[0])
        })
        for (let item of this.cityList) {
          this.indexList.push(item[0])
        }
      })
    },
    selectingCity (name, id) {
      this.selectedCity = name
      this.selectedCityId = id
      this.$store.commit('newMineCity', this.selectedCity)
      this.$store.commit('newMineCityId', this.selectedCityId)
      this.changePage()
    }
  },
}

</script>
<style scoped>
@import '../../../public/css/container.css';
@import '../../../public/css/city.css';
</style>