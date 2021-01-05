<template>
<div class="backtop" @click="backclick">
  <img src="../../../assets/img/scroll/top.png">
</div>
</template>

<script>
export default {
  name: "backtop",
  methods:{
    backclick(){
      console.log('11')
    }
  }
}
</script>

<style scoped>
.backtop{
  position:fixed;
  right: 10px;
  bottom: 60px;
}
.backtop img{
  width: 50px;
}
</style>