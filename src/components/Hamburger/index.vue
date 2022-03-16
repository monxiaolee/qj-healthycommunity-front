<template>
  <div :class="[{ 'is-active': isActive }]" @click="toggleClick">
    <el-icon :size="iconSize"><fold /></el-icon>
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
import {
  Fold
} from '@element-plus/icons-vue'

export default defineComponent({
  name: "Hamburger",
  components: {Fold},
  setup(props, ctx) {
    let isActive = false;
    const iconSize = 20;
    const toggleClick = () => {
      console.log("点击事件");
    };
    return {
      isActive,
      iconSize,
      toggleClick,
    };
  },
});
</script>

<style lang="less" scoped>
.el-icon {
  vertical-align: middle;
}
.is-active {
  transform: rotate(180deg);
}
</style>