<template>
  <div :class="{ 'has-logo': showLogo }">
    <sidebar-logo v-if="showLogo"></sidebar-logo>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
      text-color="#fff"
      @select="selectMenuItem"
    >
      <el-menu-item index="personnelManagement">
        <el-icon><user /></el-icon>
        <span>人员管理</span>
      </el-menu-item>
      <el-menu-item index="personnelEquipment">
        <el-icon><Aim /></el-icon>
        <span>人员设备</span>
      </el-menu-item>
      <el-menu-item index="personnelMonitoring">
        <el-icon><DataAnalysis /></el-icon>
        <span>人员监测</span>
      </el-menu-item>
      <el-menu-item index="monitorCase">
        <el-icon><Monitor /></el-icon>
        <span>监测示例</span>
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
import SidebarLogo from "./SidebarLogo.vue";
import {
  Location,
  Document,
  User,
  Aim,
  DataAnalysis,
  Monitor,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

export default defineComponent({
  name: "SideBar",
  components: {Setting, Document, Location, IconMenu, SidebarLogo, User, Aim, DataAnalysis, Monitor},
  setup(props, ctx) {
    let showLogo = true;
    const route = useRoute();
    const router = useRouter();
    const isCollapse = ref(false)

    const defaultActive = computed(() => route.name);
    const selectMenuItem = (type: any) => {
      router.push({
        name: type,
      });
    };
    onMounted(() => {});
    return {
      isCollapse,
      showLogo,
      defaultActive,
      selectMenuItem
    };
  },
});
</script>



<style lang="less" scoped>
.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
  background-color: #1d2939;
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