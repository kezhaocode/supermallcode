<template>
  <div class="lunbo">
    <ul>
      <li class="lunbo">
        <img v-if="banners != null && banners.length >0" :src="banners[num].image">
      </li>
    </ul>
<!--    <ul class="pot">-->
<!--      <li class="yuan" :class="{white:num===0}"></li>-->
<!--      <li class="yuan" :class="{white:num===1}"></li>-->
<!--      <li class="yuan" :class="{white:num===2}"></li>-->
<!--      <li class="yuan" :class="{white:num===3}"></li>-->
<!--    </ul>-->
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


ul li {
  list-style: none;
}

.lunbo img{
  max-width: 100%;
}

.pot {
  position: absolute;
  top: 190px;
  left: 35%;
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