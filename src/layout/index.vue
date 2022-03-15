<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <div :class="{'fixed-header': fixedHeader}">
                <navbar />
            </div>
            <router-view />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ComputedRef, onMounted, computed, ref, onUnmounted } from 'vue'
import Sidebar from './componets/Sidebar/index.vue'
import Navbar from './componets/Navbar/index.vue'

export default defineComponent({
    name: 'Layout',
    components: {
        Sidebar,
        Navbar
    },
    setup(props, ctx) {
        let fixedHeader = true;
        return {
            fixedHeader
        }
    }
})
</script>
<style lang="less" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    // margin-top: 60px;
    content: "";
    display: table;
    clear: both;
}
.sidebar-container {
  transition: width 0.28s;
  width: 210px !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 210px);
  transition: width 0.28s;
}
.main-container {
    height: 100%;
    padding: 60px 16px 16px;
    transition: margin-left 0.28s;
    margin-left: 210px;
    position: relative;
    box-sizing: border-box;
    background-color: #e6e6e6;
}
</style>