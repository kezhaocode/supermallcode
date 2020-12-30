<template>
  <div class="tabcontrol">
    <div class="tabcontrolitem" v-for="(item,index) in title" :class="{active:index===currenindex}" @click="itemclick(index)">
      <span>{{ item }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "tabControl",
  data(){
    return{
      currenindex:0
    }
  },
  methods:{
    itemclick(index){
      this.currenindex=index
    }
  },
  props: ['title']
}
</script>

<style scoped>
.tabcontrol{
  display: flex;
  text-align: center;
  font-size: 16px;
}
.tabcontrolitem{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active
{
  color:var(--color-tint);
}
.active span{
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);

}
</style>