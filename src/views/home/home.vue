<template>
  <div id="home">
    <NavBar class="homenav">
      <div slot="center">购物街</div>
    </NavBar>
    <lunbotu :cssj="banners"></lunbotu>
    <recommendview :cssj="recommend"></recommendview>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import lunbotu from "@/views/home/lunbotu";
import recommendview from "@/views/home/recommendview";
import {getHomedata} from "@/network/home";

export default {
  name: "home",
  components: {
    NavBar,
    lunbotu,
    recommendview
  },
  data() {
    return {
      meg: 111,
      recommend: [],
      banners: []
    }
  },
  created() {
    getHomedata().then(res => {
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
      // console.log(res)
    })
  },
}
</script>

<style scoped>


.homenav {
  background-color: var(--color-tint);
  color: white;
}
</style>