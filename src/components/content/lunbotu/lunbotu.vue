<template>
    <div class="lunbo" >
      <ul>
        <li ><img  v-if="banners != null && banners.length >0" :src="banners[num].image"></li>
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
      banners:[],
    }
  },
  created () {
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
  methods: {

  }

}
</script>

<style scoped>
ul li {

  list-style: none;
}

.left {
  position: absolute;
  left: 217px;
  top: 50px;
  width: 30px;
  height: 30px;
  background: #ccc;
  font-size: 30px;
  text-align: center;
  line-height: 30px;
}

.right {
  position: absolute;
  left: 47px;
  top: 50px;
  width: 30px;
  height: 30px;
  background: #ccc;
  font-size: 30px;
  text-align: center;
  line-height: 30px;
}

ul {
  width: 100%;
}

li {
  float: left;
}

li img {
  width: 100%;
}
</style>