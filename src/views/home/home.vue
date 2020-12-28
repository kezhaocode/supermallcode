<template>
  <div id="home">
    <NavBar class="homenav">
      <div slot="center">购物街</div>
    </NavBar>
    <lunbotu></lunbotu>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import lunbotu from "@/views/home/lunbotu";

export default {
  name: "home",
  components: {
    NavBar,
    lunbotu
  },
  data() {
    return {}
  },
  created() {
    // 1.请求数据

  }
}
</script>

<style scoped>


.homenav {
  background-color: var(--color-tint);
  color: white;
}
</style>