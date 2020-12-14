<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-08 00:38:17
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-11 10:33:32
-->
<!-- 主页视图 -->
<template>
  <div id="Home">
    <CityList v-if=" isSelectCity" @fun="changePage"></CityList>
    <el-container v-else>
      <Title></Title>
      <SearchBox v-on:fun="changePage"></SearchBox>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <el-footer>
        <FooterMenu></FooterMenu>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Title from '@/components/Header'
import FooterMenu from '@/components/Footer'
import SearchBox from '@/components/SearchBox'
import CityList from '@/components/City'
export default {
  name: 'Home',
  components: {
    Title,
    FooterMenu,
    SearchBox,
    CityList
  },
  data () {
    return {
      isSelectCity: false
    }
  },
  methods: {
    changePage (data) {
      if (data) {
        this.isSelectCity = !this.isSelectCity
      }
    }
  },
}

</script>
<style scoped>
@import '../../../public/css/container.css';
</style>