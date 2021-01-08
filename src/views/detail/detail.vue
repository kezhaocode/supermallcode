<template>
  <div>
    <detailnavbar></detailnavbar>
    <detaillunbo :topimages="topImages" :imglength="length"></detaillunbo>
  </div>
</template>

<script>

import Detailnavbar from "./childcomp/detailnavbar";
import {getDetail} from "../../network/detail";
import detaillunbo from "./childcomp/detaillunbo";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      length: null
    }
  },
  components: {
    Detailnavbar,
    detaillunbo
  },
  created() {
    // 1.保持存入的iid
    this.iid = this.$route.params.iid
    //2.根据iid 请求详情数据
    getDetail(this.iid).then(res => {
      //  1.获取顶部轮播数据
      console.log(res)
      this.topImages = res.result.itemInfo.topImages
      this.length = res.result.itemInfo.topImages.length
    })
  }
}
</script>

<style scoped>

</style>