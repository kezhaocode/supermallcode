<template>
  <div class="lunbo">
    <ul class="lunbolist">
      <transition-group name="fade">
        <li v-show="num==0" :key="1" class="lunbo">
          <img v-if="banners != null && banners.length >0" :src="banners[num].image">
        </li>
        <li v-show="num==1" :key="2" class="lunbo">
          <img v-if="banners != null && banners.length >0" :src="banners[num].image">
        </li>
        <li v-show="num==2" :key="3" class="lunbo">
          <img v-if="banners != null && banners.length >0" :src="banners[num].image">
        </li>
        <li v-show="num==3" :key="4" class="lunbo">
          <img v-if="banners != null && banners.length >0" :src="banners[num].image">
        </li>
        <!--          <img v-if="banners != null && banners.length >0" :src="banners[num].image">-->
      </transition-group>

    </ul>
    <ul class="pot">
      <li class="yuan" :class="{white:num===0}"></li>
      <li class="yuan" :class="{white:num===1}"></li>
      <li class="yuan" :class="{white:num===2}"></li>
      <li class="yuan" :class="{white:num===3}"></li>
    </ul>
  </div>
</template>

<script>
import {getHomedata} from "@/network/home";

export default {
  name: "lunbotu",
  data() {
    return {
      num: 0,
      banners: [],
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.num++
      if (this.num > 3) {
        this.num = 0
      }
    }, 3000)
    getHomedata().then(res => {
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
      // console.log(res)
    })
  },
  methods: {}
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.lunbolist li{
  position: absolute;
}

ul li{
  list-style: none;

}
.lunbo img {
  max-width: 100%;
}

.pot {
  position: absolute;
  top: 190px;
  left: 35%;
}

.pot li {
  float: left;
}

.yuan {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: pink;
  margin: 5px 8px;
}

.white {
  background-color: white;
}

</style>