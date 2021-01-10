<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import ObserveDom from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'

BScroll.use(ObserveImage)
BScroll.use(ObserveDom)
BScroll.use(Pullup)

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {

    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      observeImage: true,
      probeType: this.probeType,
      pullUpLoad: true
    })
    //监听位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    //监听滚到底部上拉加载更多
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  }
}
</script>

<style scoped>

</style>