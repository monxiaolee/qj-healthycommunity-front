<template>
  <div class="">人员监测</div>
</template>

<script lang="ts">
import { io } from "socket.io-client";
import {
  defineComponent,
  ComputedRef,
  onMounted,
  computed,
  ref,
  onUnmounted,
  reactive,
  onBeforeUnmount,
} from "vue";

export default defineComponent({
  name: "personnelMonitoring",
  setup(props, ctx) {
    let socket:any = null
    onMounted(() => {
      // socket = io('ws://82.157.6.212:8090')
      // socket.on('connect', () => {
      //   console.log("connect: websocket 连接成功")
      // })
      // socket.on('message', (msg:any) => {
      //   console.log(msg)
      // })
      // socket.on('disconnect', () => {
      //   console.log('disconnect: websocket 连接关闭')
      // })
    }),
    onBeforeUnmount(() => {
      // 关闭连接
      // console.log("关闭连接")
      // socket.close()
      // socket = null
    });
  },
});
</script>

<style>
</style>