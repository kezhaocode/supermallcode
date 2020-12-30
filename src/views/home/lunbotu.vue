<template>
  <div class="lunbo">
    <ul class="lunbolist">
      <img v-if="cssj != null && cssj.length >0" :src="cssj[num].image">
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

export default {
  name: "lunbotu",
  props:['cssj'],
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
  },
  methods: {}
}
</script>

<style scoped>


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