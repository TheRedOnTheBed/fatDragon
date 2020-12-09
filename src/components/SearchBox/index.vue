<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-08 17:09:35
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-09 23:23:31
-->
<!-- 搜索框 -->
<template>
  <div id="home-menu">
    <div id="city-name">
      <span>广州</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div id="home-search-box">
      <el-input placeholder="请输入内容" class="search-input">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBox',
  data () {
    return {
    }
  },
}

</script>
<style scoped>
#home-menu {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#home-search-box {
  height: 55px;
  background: #ffffff;
  line-height: 55px;
  z-index: 10;
  width: 70%;
}
#search-box {
  display: flex;
  height: 55px;
  align-items: center;
  background: #f1f2f6;
  z-index: 10;
}
#city-name {
  margin: 0 15px;
}
#search-box .search-input {
  margin: 0 10px;
}
</style>