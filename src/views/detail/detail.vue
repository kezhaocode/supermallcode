<template>
  <div class="detail">
    <detailnavbar class="ys"></detailnavbar>
      <detaillunbo :imglength="length" :topimages="topImages"></detaillunbo>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>

import detailnavbar from "./childcomp/detailnavbar";
import {getDetail, Goods, Shop} from "../../network/detail";
import detaillunbo from "./childcomp/detaillunbo";
import DetailBaseInfo from "./childcomp/DetailBaseInfo";
import DetailShopInfo from "./childcomp/DetailShopInfo";
import scroll from "../../components/common/Scroll/scroll";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      length: null,
      goods: {},
      shop: {}
    }
  },
  components: {
    detailnavbar,
    detaillunbo,
    DetailBaseInfo,
    DetailShopInfo,
    scroll
  },
  created() {
    // 1.保持存入的iid
    this.iid = this.$route.params.iid
    //2.根据iid 请求详情数据
    getDetail(this.iid).then(res => {
      //  1.获取顶部轮播数据
      console.log(res)
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.length = data.itemInfo.topImages.length
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
    })
  }
}
</script>

<style scoped>
.detail {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.ys{
  z-index: 99999;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
}

</style>