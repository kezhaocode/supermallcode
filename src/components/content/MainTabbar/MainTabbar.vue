<template>
  <div id="app">
    <!--    <tab-bar>-->
    <TabBar>
      <TarBarItem path="/home">
        <img slot="item-icon" alt="" src="../../../assets/img/tabbar/home_active.svg">
        <img slot="item-active" alt="" src="../../../assets/img/tabbar/home.svg">
        <div slot="item-text">首页</div>
      </TarBarItem>
      <TarBarItem path="/category">
        <img slot="item-icon" alt="" src="../../../assets/img/tabbar/category_active.svg">
        <img slot="item-active" alt="" src="../../../assets/img/tabbar/category.svg">
        <div slot="item-text">分类</div>
      </TarBarItem>
      <TarBarItem path="/cart">
        <img slot="item-icon" alt="" src="../../../assets/img/tabbar/shopcart_active.svg">
        <img slot="item-active" alt="" src="../../../assets/img/tabbar/shopcart.svg">
        <div slot="item-text">购物车</div>
      </TarBarItem>
      <TarBarItem path="/profile">
        <img slot="item-icon" alt="" src="../../../assets/img/tabbar/profile_active.svg">
        <img slot="item-active" alt="" src="../../../assets/img/tabbar/profile.svg">
        <div slot="item-text">我的</div>
      </TarBarItem>
    </TabBar>
  </div>
</template>
<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TarBarItem from "@/components/common/tabbar/TarBarItem";

export default {
  name: 'App',
  components: {
    TabBar,
    TarBarItem
  }

}
</script>
<style>
/*<!--引入样式-->*/

</style>
