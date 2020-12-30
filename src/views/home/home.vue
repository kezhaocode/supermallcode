<template>
  <div id="home">
    <NavBar class="homenav">
      <div slot="center">购物街</div>
    </NavBar>
    <lunbotu ></lunbotu>
    <recommendview :cssj="recommend"></recommendview>
    <featureview></featureview>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import lunbotu from "@/views/home/lunbotu";
import recommendview from "@/views/home/recommendview";
import {getHomedata} from "@/network/home";
import featureview from "@/views/home/featureview";

export default {
  name: "home",
  components: {
    NavBar,
    lunbotu,
    recommendview,
    featureview
  },
  data() {
    return {
      meg: 111,
      recommend: [],
    }
  },
  created() {
    getHomedata().then(res => {
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