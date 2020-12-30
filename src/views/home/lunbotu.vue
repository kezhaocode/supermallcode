<template>
  <div class="lunbo">
    <ul class="lunbolist">
      <img v-if="banners != null && banners.length >0" :src="banners[num].image">
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
    }, 1500)
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


.lunbolist li {
  /*position: absolute;*/
}

ul li {
  list-style: none;

}

.lunbo img {
  width: 100%;
}

.pot {
  position: absolute;
  top: 25%;
  left: 35%;
}

.pot li {
  float: left;
}

.yuan {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: brown;
  margin: 5px 8px;
}

.white {
  background-color: white;
}

</style>