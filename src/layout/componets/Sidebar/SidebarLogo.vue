<template>
  <div class="sidebar-logo-container">LOGO</div>
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
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;
  color: #fff;
}
</style>