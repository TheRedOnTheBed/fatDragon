<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-12-09 23:33:51
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-10 21:43:51
-->
<!-- 主页中的首页部分 -->
<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="detail-box">
      <div class="brief-box">
        <van-tabs v-model="briefTab">
          <van-tab title="热映影片">
            <BriefSwiper>
              <li class="swiper-box-item" v-for="index in hotMovieId" :key="index">
                <img src="../../../public/img/poster/4.jpg" alt />
                <h2>无名之辈aaaaaaaa</h2>
                <p>好家伙aaaaaaaaaaa</p>
                <van-button round type="info" color="red" size="mini">圆形按钮</van-button>
              </li>
            </BriefSwiper>
          </van-tab>
          <van-tab title="即将上映">
            <BriefSwiper>
              <li class="swiper-box-item" v-for="index in releasedMovieId" :key="index">
                <img src="../../../public/img/poster/4.jpg" alt />
                <h2>无名之辈aaaaaaaa</h2>
                <p>好家伙aaaaaaaaaaa</p>
                <van-button round type="info" color="#1e90ff" size="mini">圆形按钮</van-button>
              </li>
            </BriefSwiper>
          </van-tab>
          <van-tab title="线上好片">暂未上线</van-tab>
        </van-tabs>
        <div class="news-title">
          <h2>
            新鲜资讯
            <img src="../../assets/news.png" alt />
          </h2>
        </div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ul class="news-items" ref="newsitems"></ul>
          <ul class="news-items" ref="newsitems"></ul>
          <div class="clear"></div>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import BriefSwiper from '@/components/BriefSwiper'
export default {
  name: 'HomeMain',
  components: {
    BriefSwiper
  },
  data () {
    return {
      briefTab: 0,
      hotMovieId: [1, 2, 3, 4, 5, 6, 7, 8],
      releasedMovieId: [1, 2, 3, 4, 5, 6, 7, 8],
      loading: false,
      finished: false,
      newsnum: 0,
      newslist: [],
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        //加载状态结束
        if (this.newsnum >= 30 || this.newslist.length == 0) {
          this.finished = true
        }
        else {
          this.loadImg()
          this.loading = false
        }
      }, 1000)
    },
    minHeight (items) {
      let ht = items[0].offsetHeight,
        index = 0
      for (let i = 0; i < items.length; i++) {
        if (items[i].offsetHeight < ht) {
          ht = items[i].offsetHeight
          index = i
        }
      }
      return index
    },
    loadImg () {
      // let item = document.getElementsByClassName("news-items")
      let item = $(".news-items")
      for (let i = 0; i < 6; i++) {
        let oLi = document.createElement("li"),
          oImg = document.createElement("img"),
          oDiv = document.createElement("div")
        oImg.src = this.newslist[i]
        oImg.style.width = "100%"
        oLi.appendChild(oImg)
        oDiv.style.height = "60px"
        oDiv.style.backgroundColor = "lemonchiffon"
        oLi.appendChild(oDiv)
        oLi.style.marginBottom = "10px"
        oLi.style.border = "1px solid black"
        oLi.style.borderRadius = "5px"
        item[this.minHeight(item)].appendChild(oLi)
        this.newsnum++
      }
    },
  },
}

</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 200px;
  text-align: center;
  background-color: #39a9ed;
}
.detail-box {
  width: 100%;
  border-top: 1px solid #dcdde1;
  border-top-left-radius: 20px;
  box-shadow: -2px -2px 5px #dcdde1;
  display: flex;
  justify-content: flex-start;
}
.brief-box {
  padding: 10px 15px 10px 15px;
  width: 100%;
  overflow: hidden;
}
.swiper-box-item {
  margin-right: 10px;
  width: 90px;
  height: 200px;
}
.swiper-box-item img {
  width: 100%;
  border-radius: 8px;
}
.swiper-box-item h2 {
  width: 100%;
  font-size: 14px;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.swiper-box-item p {
  width: 100%;
  font-size: 13px;
  white-space: nowrap;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #999;
}
.news-title h2 {
  margin: 5px 0 10px;
  padding-left: 15px;
  line-height: 30px;
  font-size: 16px;
}
.news-title img {
  width: 30px;
}
.news-items {
  float: left;
  width: 44%;
  margin-left: 15px;
}
.clear {
  content: '';
  display: block;
  clear: both;
}
</style>