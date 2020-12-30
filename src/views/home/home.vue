<template>
  <div id="home">
    <NavBar class="homenav">
      <div slot="center">购物街</div>
    </NavBar>
    <lunbotu :cssj="banners"></lunbotu>
    <recommendview :cssj="recommend"></recommendview>
    <featureview></featureview>
    <tab-control class="tab-control" :title="['流行','新款','精选']"></tab-control>
    <goodslist :goods="goods['pop'].list"></goodslist>

  </div>
</template>

<script>
import lunbotu from "@/views/home/childrenview/lunbotu";
import recommendview from "@/views/home/childrenview/recommendview";
import featureview from "@/views/home/childrenview/featureview";

import tabControl from "@/components/content/tabControl/tabControl";
import NavBar from "@/components/common/navbar/NavBar";
import goodslist from "@/components/content/goods/goodslist";
import {getHomedata, gethomegoods} from "@/network/home";

export default {
  name: "home",
  components: {
    NavBar,
    lunbotu,
    recommendview,
    featureview,
    tabControl,
    goodslist
  },
  data() {
    return {
      recommend: [],
      banners: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    }
  },
  created() {
    this.getHomedata()
    this.gethomegoods('pop')
    this.gethomegoods('new')
    this.gethomegoods('sell')
  },
  methods: {
    getHomedata() {
      getHomedata().then(res => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
        // console.log(res)
      })
    },
    gethomegoods(type) {
      const page = this.goods[type].page + 1
      gethomegoods(type, page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>


<style scoped>
.homenav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

#home {
  margin-top: 44px;
}

.tab-control {
  background-color: #fff;
  position: sticky;
  top: 44px;
}
</style>