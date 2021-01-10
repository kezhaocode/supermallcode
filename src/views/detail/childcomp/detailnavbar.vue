<template>
  <div class="kk">
    <NavBar>
      <div slot="left" class="back" @click="back">
        <img src="@/assets/img/common/back.svg">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             :class="{active:index===currentindex}"
             class="itemtitle" @click="itemclick(index)">{{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: "detailnavbar",
  components: {NavBar},
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentindex: 0
    }
  },
  methods: {
    itemclick(index) {
      this.currentindex = index
      console.log(this.currentindex)
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
}

.itemtitle {
  flex: 1;
}

.active {
  color: pink;
}

.back {
  margin-top: 6px;
}

</style>