<template>
  <div class="recommend">
  <div v-for="item in cssj">
    <a :href="item.link">
      <img :src="item.image">
      <div>{{item.title}}</div>
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

img{
  width: 80px;
}
.recommend{
  margin-top: 200px;
}

</style>