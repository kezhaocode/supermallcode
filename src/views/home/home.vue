<template>
  <div id="home">
    <NavBar class="homenav">
      <div slot="center">购物街</div>
    </NavBar>
    <lunbotu :cssj="banners"></lunbotu>
    <recommendview :cssj="recommend"></recommendview>
    <featureview></featureview>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
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
      banners:[]
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
#home{
  padding-top:44px ;
}

.homenav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: white;
}
</style>