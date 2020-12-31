<template>
<div class="goodslist">
  <goodslistitem v-for="item in goods" :goodsitem="item"></goodslistitem>

</div>
</template>

<script>
import goodslistitem from "@/components/content/goods/goodslistitem";
export default {
  name: "goodslist",
  props:['goods'],
  components:{
    goodslistitem
  }
}
</script>

<style scoped>
.goodslist{
  /*display: flex;*/
}
goodslistitem{

}
</style>