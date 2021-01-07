<template>
  <div>
    <detailnavbar></detailnavbar>
  </div>
</template>

<script>

import Detailnavbar from "./childcomp/detailnavbar";
import {getDetail} from "../../network/detail";

export default {
  name: "detail",
  data() {
    return {
      iid: null
    }
  },
  components: {
    Detailnavbar,
  },
  created() {
    // 1.保持存入的iid
    this.iid=this.$route.params.iid
    //2.根据iid 请求详情数据
    getDetail(this.iid).then(res =>{
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>