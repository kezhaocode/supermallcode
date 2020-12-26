<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive">
      <slot name='item-active'></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
    <!--    <img src="../../assets/img/tabbar/分享.png"></img>-->
    <!--    <div>首页</div>-->
  </div>
</template>
<script>
export default {
  name: "TarBarItem",
  props: {
    path: String
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/cart) = true
      // /home -> item1(/profile) = true
      return this.$route.path.indexOf(this.path) !== -1
    },
    // activeStyle() {
    //   return this.isActive ? {color: this.activeColor} : {}
    // }
  },
  methods: {
    itemclick: function () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;

}

.tab-bar-item img {
  width: 24px;
  height: 24px;
}

.active {
  color: red;
}
</style>