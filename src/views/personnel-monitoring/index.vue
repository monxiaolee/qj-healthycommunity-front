<template>
  <div class="person-monitor__wrapper">
    <ul class="person-monitor">
      <li v-for="(item, index) in personList" :key="index">
        <div :class="['monitor-card', item.heart > 120 ? 'alarm': '']">
          <div class="title">{{ item.name }}</div>
          <div class="content">
            <el-row>
              <el-col :span="8">
                <span class="name">心率</span>
                <span class="value">{{ item.heart }}</span>
              </el-col>
              <el-col :span="8">
                <span class="name">温度</span>
                <span class="value">{{ item.temperature }}</span>
              </el-col>
              <el-col :span="8">
                <span class="name">湿度</span>
                <span class="value">{{ item.humidity }}</span>
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
    const wsuri = "ws://82.157.6.212:8100";
    let websocket: any = null;
    let personList: Array<any> = reactive([]);

    const initWebSocket = () => {
      websocket = new WebSocket(wsuri);
      websocket.onopen = webSocketOpen;
      websocket.onmessage = webSocketMessage;
    };

    // 连接建立触法
    const webSocketOpen = () => {
      console.log("连接成功");
      websocketSend({});
    };

    // 发送给后端的消息
    const websocketSend = (e: any) => {
      websocket.send(e);
    };

    // 监听发送的消息
    const webSocketMessage = (msg: any) => {
      personList.length = 0;
      console.log(msg);
      let msgData: Object = {};
      try {
        msgData = JSON.parse(msg.data);
      } catch (e) {
        console.log(e);
      }

      // if (msgData) {
      //   Object.keys(msgData).forEach((item) => {
      //     Object.keys(msgData[item]).forEach((subItem) => {
      //       personList.push({
      //         name: msgData[item][subItem].name,
      //         heart: msgData[item][subItem].heart,
      //         temperature: msgData[item][subItem].temperature,
      //       });
      //     });
      //   });
      // }
      if (msgData) {
        Object.keys(msgData).forEach((item) => {

          personList.push({
            name: msgData[item].name,
            heart: msgData[item].heart,
            temperature: msgData[item].temperature,
            humidity: msgData[item].humidity,
          });

        });
      }
    };

    onMounted(() => {
      initWebSocket();
    }),
    onBeforeUnmount(() => {
      console.log("websocket 断开连接")
      websocket.close();
    });

    return {
      personList,
    };
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
      margin-bottom: 16px;
    }
  }
}

.monitor-card {
  background-color: #fff;
  border: 1px solid #e6ebf5;
  border-radius: 4px;
  cursor: pointer;
  &.alarm {
    background-color: rgba(255, 0, 0, 0.1);
    border: 1px solid rgba(255, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(255, 0, 0, 10%);
    .title {
      border-bottom: 1px solid rgba(255, 0, 0, 0.1);
    }
  }
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 10%);
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
        &.alarm {
          color: rgba(255, 0, 0, 0.6);
        }
      }
    }
  }
}
</style>