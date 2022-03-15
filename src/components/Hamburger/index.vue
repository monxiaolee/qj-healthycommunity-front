<template>
  <div :class="[{ 'is-active': isActive }]" @click="toggleClick">
    <el-icon><aim /></el-icon>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ComputedRef,
  onMounted,
  computed,
  ref,
  onUnmounted,
} from "vue";

export default defineComponent({
  name: "Hamburger",
  setup(props, ctx) {
    let isActive = false;
    const toggleClick = () => {
      console.log("点击事件");
    };
    return {
      isActive,
      toggleClick,
    };
  },
});
</script>

<style lang="less" scoped>
.svg-icon {
  vertical-align: middle;
}
.is-active {
  transform: rotate(180deg);
}
</style>