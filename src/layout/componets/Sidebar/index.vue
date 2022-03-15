<template>
  <div :class="{ 'has-logo': showLogo }">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @select="selectMenuItem"
    >
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>人员管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><setting /></el-icon>
        <span>人员设备</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <span>人员监测</span>
      </el-menu-item>
    </el-menu>
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
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "SideBar",
  setup(props, ctx) {
    let showLogo = true;
    const route = useRoute();
    const router = useRouter();

    const defaultActive = computed(() => route.name);
    const selectMenuItem = (type: any) => {
      router.push({
        name: type,
      });
    };
    onMounted(() => {});
    return {
      showLogo,
      defaultActive,
      selectMenuItem,
    };
  },
});
</script>



<style lang="less" scoped>
.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
  .el-menu-item {
      height: 40px;
      line-height: 40px;
      &.is-active {
        background-color: #2e6be6;
        span {
            color: #fff;
        }
      }
  }
}
</style>