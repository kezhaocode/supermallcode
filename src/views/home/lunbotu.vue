<template>
  <div class="lunbo">
    <ul class="lunbolist" v-for="item in cssj">
      <li class="lunbo"><img :src="item.image"></li>
    </ul>

  </div>
</template>

<script>

export default {
  name: "lunbotu",
  props: ['cssj'],

  data() {
    return {
      num: 0,
    }
  },
}
</script>

<style scoped>


.lunbolist li img {
  /*position: absolute;*/
}

ul li {
  list-style: none;
}

.lunbo img {
  max-width: 100%;
}




</style>