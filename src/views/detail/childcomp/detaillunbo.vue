<template>
  <div class="lunbo">
    <Carousel v-model="value2" :autoplay="setting.autoplay" autoplay class="lunbo" loop>
      <CarouselItem v-for="item in topimages">
        <div class="demo-carousel"><img :src="item"></div>
      </CarouselItem>
    </Carousel>

  </div>
</template>

<script>
export default {
  name: "detaillunbo",
  props: ['topimages', 'imglength'],
  data() {
    return {
      value2: 0,
      setting: {
        autoplay: true,
      }
    }
  },
  updated() {

    if (this.imglength === 1) {
      this.setting.autoplay = false
    }
  },
  methods: {}
}
</script>

<style scoped>
.lunbo {
  /*width: 100%;*/
  overflow: hidden;
  height: 200px;
}

img {
  width: 100%;
}

button {
  position: absolute;
  z-index: 1000;
  /*margin-top: 400px;*/
}
</style>