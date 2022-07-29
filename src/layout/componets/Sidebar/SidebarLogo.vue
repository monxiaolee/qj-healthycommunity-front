<template>
  <div class="sidebar-logo-container">
    <div class="logo"></div>
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
  name: "SidebarLogo",
  components: {},
});
</script>
<style lang="less">
.sidebar-logo-container {
  font-size: 24px;
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #1d2939;
  text-align: center;
  overflow: hidden;
  color: #fff;
  .logo {
    width: 100%;
    height: 100%;
    background-image: url('../../../assets/jklogo.png');
    background-position: center center;
    background-repeat: no-repeat;
  }
}
</style>