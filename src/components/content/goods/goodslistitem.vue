<template>
  <div class="goodslistitem">
    <img :src="goodsitem.show.img">
    <div class="goodjs">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="collect">{{ goodsitem.cfav }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "goodslistitem",
  props: ['goodsitem']
}
</script>

<style scoped>
.goodslistitem{
  float: left;
  width: 43%;
  height: 270px;
  margin-left: 10px;
  margin-right: 10px;
}
.goodslistitem img{
  width: 100%;
  /*margin:0 0.2rem;*/
}
.goodjs {
  font-size: 12px;
}
</style>