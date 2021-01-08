<template>
  <div id="home">
    <NavBar class="homenav">
      <div slot="center">购物街</div>
    </NavBar>
    <scroll class="content1" ref="scroll"
            :pull-up-load="true"
            :probe-type="3"
            @pullingUp="loadmore"
            @scroll='scrollshow'>
      <lunbotu :cssj="banners"></lunbotu>
      <recommendview :cssj="recommend"></recommendview>
      <featureview></featureview>
      <tab-control @tabclick="tabclick" class="tab-control" :title="['流行','新款','精选']"></tab-control>
      <goodslist :goods="showgoods"></goodslist>
    </scroll>
    <backtop @click.native="backclick" v-show="isshow"></backtop>
    <div style="height: 43px"></div>
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
import backtop from "../../components/common/Scroll/backtop";
import Scroll from "../../components/common/Scroll/scroll";

export default {
  name: "home",
  components: {
    NavBar,
    lunbotu,
    recommendview,
    featureview,
    tabControl,
    goodslist,
    Scroll,
    backtop
  },
  data() {
    return {
      recommend: [],
      banners: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentindex: 'pop',
      isshow: null,
      scrollY: 0
    }
  },
  computed: {
    showgoods() {
      return this.goods[this.currentindex].list
    }
  },
  created() {
    this.getHomedata()
    this.gethomegoods('pop')
    this.gethomegoods('new')
    this.gethomegoods('sell')
  },

  methods: {
    tabclick(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentindex = 'pop'
          break
        case 1:
          this.currentindex = 'new'
          break
        case 2:
          this.currentindex = 'sell'
          break
      }
    },
    scrollshow(position) {
      this.isshow = -position.y > 1000
    },
    loadmore() {
      this.gethomegoods(this.currentindex)
    },
    backclick() {
      //当我们需要监听一个组件原生事件的时候需要加上native
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    getHomedata() {
      getHomedata().then(res => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    gethomegoods(type) {
      const page = this.goods[type].page + 1
      gethomegoods(type, page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.scroll.finishPullUp()
      })
    }

  }
}
</script>


<style scoped>

#home {
  position: relative;
  height: 100vh;
}

.content1 {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.homenav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10009;
}


.tab-control {
  background-color: #fff;
  position: sticky;
  top: 44px;
}
</style>