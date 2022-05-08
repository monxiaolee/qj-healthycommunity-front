<template>
  <div class="navbar">
    <hamburger id="hamburger-container" class="hamburger-container" @toggle-click="toggleSideBar" />
    <div class="right-menu">
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="el-dropdown-link">
          超级管理员
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
        <!-- <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              个人中心
            </el-dropdown-item>
          </router-link>

          <el-dropdown-item
            divided
            @click.native="logout"
          >
            <span style="display:block;">
              退出
            </span>
          </el-dropdown-item>
        </el-dropdown-menu> -->
      </el-dropdown>
    </div>
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
import Hamburger from "@/components/Hamburger/index.vue";

import {
  ArrowDown
} from '@element-plus/icons-vue'

export default defineComponent({
  name: "Navbar",
  components: { Hamburger, ArrowDown },
  setup(props, ctx) {
    const toggleSideBar = () => {
      console.log("菜单切换")
    }
    const logout = () => {
      console.log("退出")
    }
    return {
      toggleSideBar,
      logout
    };
  },
});
</script>
<style lang="less" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: #ccc 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: #ccc .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
    .avatar-container {
      margin-right: 16px;
      .el-dropdown-link {
        margin-top: 14px;
        position: relative;
      }

    }
  }
}
</style>