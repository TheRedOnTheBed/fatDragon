<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-09 23:45:57
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-12 12:38:56
-->
<!-- 主页中的电影界面 -->
<template>
  <div>
    <van-tabs v-model="movieActived" title-active-color="black" title-inactive-color="#ccc">
      <van-tab title="热映" name="hotmovie">
        <van-list
          v-model="hotmovieloading"
          :finished="hotmoviefinished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <ul class="movie-list">
            <li>
              <div class="movie-img">
                <img src="../../../public/img/poster/4.jpg" alt />
              </div>
              <div class="movie-introduce">
                <h2>无名之辈</h2>
                <p>
                  观众评分
                  <span class="movie-score">9.2</span>
                </p>
                <p>导演：</p>
                <p>主演：</p>
                <p>
                  <van-tag color="#747d8c" plain>好看的电影</van-tag>
                </p>
              </div>
              <van-button
                size="small"
                color="linear-gradient(to right, #ff6034, #ee0a24)"
                style="width:60px"
              >购票</van-button>
            </li>
          </ul>
        </van-list>
      </van-tab>
      <van-tab title="影院" name="cinema">
        <div class="cinema_menu">
          <div class="city_switch">
            全城
            <i class="el-icon-caret-bottom"></i>
          </div>
          <div class="brand_swtich">
            品牌
            <i class="el-icon-caret-bottom"></i>
          </div>
          <div class="feature_switch">
            特色
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>
        <div class="cinema_body">
          <van-list
            v-model="cienaloading"
            :finished="cienafinished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div class="cinema_items">
              <ul>
                <li>
                  <div>
                    <span>大地影院(澳东世纪店)</span>
                    <span class="cash">
                      <span class="price">￥22.9</span> 元起
                    </span>
                  </div>
                  <div class="address">
                    <span>金州区大连经济技术开发区澳东世纪3层</span>
                    <span>1763.5km</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="cinema_items">
              <ul>
                <li>
                  <div>
                    <span>大地影院(澳东世纪店)</span>
                    <span class="cash">
                      <span class="price">￥22.9</span> 元起
                    </span>
                  </div>
                  <div class="address">
                    <span>金州区大连经济技术开发区澳东世纪3层</span>
                    <span>1763.5km</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="cinema_items">
              <ul>
                <li>
                  <div>
                    <span>大地影院(澳东世纪店)</span>
                    <span class="cash">
                      <span class="price">￥22.9</span> 元起
                    </span>
                  </div>
                  <div class="address">
                    <span>金州区大连经济技术开发区澳东世纪3层</span>
                    <span>1763.5km</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="cinema_items">
              <ul>
                <li>
                  <div>
                    <span>大地影院(澳东世纪店)</span>
                    <span class="cash">
                      <span class="price">￥22.9</span> 元起
                    </span>
                  </div>
                  <div class="address">
                    <span>金州区大连经济技术开发区澳东世纪3层</span>
                    <span>1763.5km</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="cinema_items">
              <ul>
                <li>
                  <div>
                    <span>大地影院(澳东世纪店)</span>
                    <span class="cash">
                      <span class="price">￥22.9</span> 元起
                    </span>
                  </div>
                  <div class="address">
                    <span>金州区大连经济技术开发区澳东世纪3层</span>
                    <span>1763.5km</span>
                  </div>
                </li>
              </ul>
            </div>
          </van-list>
        </div>
      </van-tab>
      <van-tab title="即将上映" name="readymovie">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'HomeMovie',
  props: ['nowpage'],
  data () {
    return {
      movieActived: 'hotmovie',
      hotmovieloading: false,
      hotmoviefinished: true,
      cienaloading: false,
      cienafinished: true,
    }
  },
  methods: {
    onLoad () {
    },
  },
}

</script>
<style scoped>
.movie-list {
  margin: 0px 15px 10px;
}
.movie-list li {
  display: flex;
  padding-bottom: 10px;
  margin-top: 12px;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
}
.movie-img {
  width: 70px;
  height: 100px;
}
.movie-img img {
  width: 100%;
}
.movie-introduce {
  margin-left: 15px;
  flex: 1;
  position: relative;
}
.movie-introduce h2 {
  font-size: 17px;
  line-height: 24px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
}
.movie-introduce p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie-introduce p .movie-score {
  font-weight: 700;
  color: #ff4d4d;
  font-size: 18px;
}
.cinema_menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  padding: 10px 0;
  font-size: 15px;
  color: #747d8c;
}
.cinema_body {
  background: whitesmoke;
  padding: 15px 15px;
}
.cinema_body .van-list {
  display: flex;
  flex-direction: column;
}
.cinema_items {
  background: white;
  border-radius: 10px;
}
.cinema_body ul {
  padding: 20px;
  width: 100%;
}
.cinema_body li {
  margin-bottom: 10px;
}
.cinema_body div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.cinema_body .cash {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
</style>