<template>
<div>
  <NavBar><div slot="center">详情页</div></NavBar>
</div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
export default {
  name: "detail",
  data(){
    return{
      iid:null
    }
  },
  components:{
    NavBar
  },
  created() {
    this.iid=this.$route.params.id
  }
}
</script>

<style scoped>

</style>