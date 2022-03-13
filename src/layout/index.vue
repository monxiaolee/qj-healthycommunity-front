<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <router-view />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ComputedRef, onMounted, computed, ref, onUnmounted } from 'vue'
import Sidebar from './componets/Sidebar/index.vue'

export default defineComponent({
    name: 'Layout',
    components: {
        Sidebar
    }
})
</script>
<style lang="less" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
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
.main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: 210px;
    position: relative;
}
</style>