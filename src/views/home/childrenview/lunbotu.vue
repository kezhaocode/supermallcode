<template>
  <div class="lunbo">
    <template>
      <Carousel v-model="value2" autoplay loop>
        <CarouselItem v-for="item in cssj">
          <div class="demo-carousel"><img :src="item.image"></div>
        </CarouselItem>
      </Carousel>
    </template>
  </div>
</template>

<script>

export default {
  name: "lunbotu",
  props: ['cssj'],
  data() {
    return {
      value2: 0
    }
  }
}
</script>

<style scoped>


ul li {
  list-style: none;

}

.lunbo img {
  width: 100%;
}


</style>