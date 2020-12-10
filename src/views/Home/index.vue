<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-08 00:38:17
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-10 12:37:58
-->
<!--  -->
<template>
  <div id="Home">
    <el-container v-if="isSelectCity"></el-container>
    <el-container v-else>
      <Title></Title>
      <SearchBox></SearchBox>
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
export default {
  name: 'Home',
  components: {
    Title,
    FooterMenu,
    SearchBox,
  },
  data () {
    return {
      isSelectCity: false
    }
  },
  methods: {
  },
}

</script>
<style scoped>
@import '../../../public/css/container.css';
</style>