<template>
  <div class="person-monitor__wrapper">
    <ul class="person-monitor">
      <li>
        <div class="monitor-card">
          <div class="title">李梦晓</div>
          <div class="content">
            <el-row>
              <el-col :span="12">
                <span class="name">心率</span>
                <span class="value">120</span>
              </el-col>
              <el-col :span="12">
                <span class="name">温度</span>
                <span class="value">36.5</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </li>
      <li>
        <div class="monitor-card">
          <div class="title">李梦晓</div>
          <div class="content">
            <el-row>
              <el-col :span="12">
                <span class="name">心率</span>
                <span class="value">120</span>
              </el-col>
              <el-col :span="12">
                <span class="name">温度</span>
                <span class="value">36.5</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </li>
    </ul>
  </div>
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
    let socket: any = null
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