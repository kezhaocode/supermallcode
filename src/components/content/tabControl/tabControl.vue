<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in title" :class="{active:index===currenindex}" class="tabcontrolitem"
         @click="itemclick(index)">
      <span>{{ item }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "tabControl",
  data() {
    return {
      currenindex: 0
    }
  },
  methods: {
    itemclick(index) {
      this.currenindex = index
      this.$emit('tabclick', index)
    }
  },
  props: ['title']
}
</script>

<style scoped>
.tabcontrol {
  z-index: 999;
  display: flex;
  text-align: center;
  font-size: 16px;
}

.tabcontrolitem {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.active {
  color: var(--color-tint);
}

.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);

}
</style>