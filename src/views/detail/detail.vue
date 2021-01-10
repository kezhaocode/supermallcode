<template>
  <div class="detail">

    <detailnavbar  @titileclick="titleclick" class="ys"></detailnavbar>
    <detaillunbo :imglength="length" :topimages="topImages"></detaillunbo>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>
    <DetailParamInfo ref="cs" :paramInfo="paramInfo"></DetailParamInfo>
    <DetailCommentInfo ref="pl" :commentInfo="commentInfo"></DetailCommentInfo>
    <goodslist ref="tj" :goods="recommend"></goodslist>

    <BackTop></BackTop>
  </div>
</template>

<script>

import detailnavbar from "./childcomp/detailnavbar";
import {getDetail, getRecommend, Goods, GoodsParam, Shop} from "../../network/detail";
import detaillunbo from "./childcomp/detaillunbo";
import DetailBaseInfo from "./childcomp/DetailBaseInfo";
import DetailShopInfo from "./childcomp/DetailShopInfo";
import DetailGoodsInfo from "./childcomp/DetailGoodsInfo";
import DetailParamInfo from "./childcomp/DetailParamInfo";
import DetailCommentInfo from "./childcomp/DetailCommentInfo";
import goodslist from "../../components/content/goods/goodslist";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      length: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      scorllcs: '',
      scorllpl: '',
      scorlltj: '',
      currentindex: ''

    }
  },
  components: {
    detailnavbar,
    detaillunbo,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    goodslist
  },
  created() {
    // 1.保持存入的iid
    this.iid = this.$route.params.iid
    //2.根据iid 请求详情数据
    getDetail(this.iid).then(res => {
      //  1.获取顶部轮播数据
      // console.log(res)
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.length = data.itemInfo.topImages.length
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    getRecommend().then(res => {
      console.log(res)
      this.recommend = res.data.list
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    titleclick(index) {
      switch (index) {
        case 1:
          this.scorllcs = this.$refs.cs.$el.offsetTop
          window.scrollTo({
            top: this.scorllcs,
            behavior: "smooth"
          });
          console.log(this.scorllcs)
          break
        case 2:
          this.scorllpl = this.$refs.pl.$el.offsetTop
          window.scrollTo({
            top: this.scorllpl,
            behavior: "smooth"
          });
          break

        case 3:
          this.scorlltj = this.$refs.tj.$el.offsetTop
          window.scrollTo({
            top: this.scorlltj,
            behavior: "smooth"
          });
          break
      }
    },
    handleScroll() {
      this.scorllcs = this.$refs.cs.$el.offsetTop
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const scrollTop = window.pageYOffset;
      console.log(this.scorllcs)
      console.log(scrollTop)
      if (scrollTop===this.scorllcs){
        console.log('111111111111111111111111111111111111111111111111111111111111')
      }
    }
  }

}
</script>

<style scoped>
.detail {
  background-color: #fff;
  position: relative;
  z-index: 9;
}

.ys {
  z-index: 99999;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
}

</style>