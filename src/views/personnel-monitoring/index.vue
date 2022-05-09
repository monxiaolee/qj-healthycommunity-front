<template>
  <div class="person-monitor__wrapper">
    <ul class="person-monitor">
      <li>
        <div class="monitor-card">
          <div class="title">张三丰</div>
          <div class="content">
            <el-row>
              <el-col :span="12">
                <span class="name">心率</span>
                <span class="value">100</span>
              </el-col>
              <el-col :span="12">
                <span class="name">温度</span>
                <span class="value">0.253</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </li>
    </ul>
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
  reactive,
  onBeforeUnmount,
} from "vue";

export default defineComponent({
  name: "personnelMonitoring",
  setup(props, ctx) {
    // let socket: any = null
    // const socket = io('ws://82.157.6.212:8100')
    const wsuri = 'ws://82.157.6.212:8100'
    let websocket: any = null

    const initWebSocket = () => {
      websocket = new WebSocket(wsuri)
      websocket.onopen = webSocketOpen
      websocket.onmessage = webSocketMessage
    }

    // 连接建立触法
    const webSocketOpen = () => {
      console.log("连接成功")
      websocketSend({})
    }

    // 发送给后端的消息
    const websocketSend = (e:any) => {
      websocket.send(e)
    }

    // 监听发送的消息
    const webSocketMessage = (msg: any) => {
      console.log("监听到的消息", msg.data)
    }

    // websocket 断开连接
    const webSocketClose = () => {
      console.log("断开连接")
    }

    onMounted(() => {
      initWebSocket()
    }),
    onBeforeUnmount(() => {
      websocket.onclose = webSocketClose
    });

    return {
      
    }
  },
});
</script>

<style lang="less" scoped>
.person-monitor__wrapper {
  ul.person-monitor {
    padding: 0;
    margin: 0;
    list-style-type: none;

    &:after {
      content: "";
      display: block;
      visibility: hidden;
      clear: both;
    }

    li {
      width: 300px;
      float: left;
      margin-right: 16px;
    }
  }
}

.monitor-card {
  background-color: #fff;
  border: 1px solid #e6ebf5;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }

  .title {
    font-size: 18px;
    padding: 18px 20px;
    text-align: center;
    border-bottom: 1px solid #e6ebf5;
  }

  .content {
    padding: 20px;

    span {
      display: block;

      &.name {
        font-size: 18px;
      }

      &.value {
        font-size: 34px;
      }
    }
  }
}
</style>