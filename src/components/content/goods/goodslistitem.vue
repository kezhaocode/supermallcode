<template>
  <div class="goodslistitem" @click="itemclick">
    <img :src="showimage">
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
  props: ['goodsitem'],
  methods: {
    itemclick() {
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  },
  computed:{
    showimage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }
}
</script>

<style scoped>
.goodslistitem {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}

.goodslistitem img {
  width: 100%;
  border-radius: 5px;
}

.goodjs {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goodjs p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goodjs .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goodjs .collect {
  position: relative;

}

.goodjs .collect::after {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/home/collect.svg") 0 0/14px 14px;
}
</style>