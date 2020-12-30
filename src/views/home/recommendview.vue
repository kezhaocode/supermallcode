<template>
  <div class="recommend">
    <div class="recommenditem" v-for="item in cssj">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{ item.title }}</div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "recommendview",
  props: ['cssj']
}
</script>

<style scoped>

img {
  width: 80px;
}

.recommend {
  margin: 10px 0;
  text-align: center;
  /*float: left;*/
  display: flex;
  width: 100%;
  padding-bottom:20px ;
  border-bottom: 9px solid #eee;

}

.recommenditem {
  flex: 1;
}
.border{

}

</style>