<template>
  <div class="person-monitor__wrapper">
    <ul class="person-monitor">
      <li v-for="(item, index) in personList" :key="index">
        <div :class="['monitor-card', item.heart > 120 ? 'alarm' : item.heart > 100 ? 'warning': '']">
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
          <span class="card-bg">
            <svg viewBox="0 0 274 40" preserveAspectRatio="none" height="44" width="100%"><g fill="rgba(255, 255, 255, .6)"><path d="M42.8778887,8.8315201 L45.2362588,9.64255791 L47.5996015,10.4693086 L48.7835713,10.8877332 L48.7835713,10.8877332 L52.3467558,12.1591571 L59.539477,14.7443287 L61.9617993,15.6087006 L64.398809,16.4698999 L66.8518938,17.3252288 L69.3224415,18.1719894 C86.2673445,23.9227657 104.53259,28.8844322 126.110896,29.1831687 C144.005101,29.4309014 161.036037,28.1457312 177.011647,26.3413942 L179.819879,26.0177989 C180.286078,25.9630369 180.751355,25.9078774 181.215705,25.8523461 L183.990631,25.5149043 L186.743062,25.1697789 L189.472761,24.8182081 L192.179495,24.4614298 L196.196023,23.9192067 L200.15956,23.3722307 L214.226364,21.3935128 L217.93214,20.8796037 L221.580439,20.384619 L223.980316,20.0672061 C224.378125,20.0152284 224.774844,19.9637301 225.17047,19.912737 L227.531061,19.6130472 L229.865169,19.3267204 L232.172558,19.0549945 C240.966041,18.0429457 249.16544,17.3800146 256.711303,17.3800146 C265.48194,17.3800146 270.847605,18.9956402 274.002009,21.3630764 L274.002009,39.9868928 L0.0020088247,39.986 L0.00221914277,-1.25698063e-14 C14.9843025,0.2501315 28.8356156,4.05044751 42.8778887,8.8315201 Z"></path> <path d="M0.465228192,29.1136472 C45.7083307,29.1136472 98.6790338,13.9868928 137.591238,13.9868928 C176.503442,13.9868928 273.998836,32.769422 273.999642,33.8327992 C274.000448,34.8961764 273.999642,39.9868928 273.999642,39.9868928 C273.999642,39.9868928 0.465228192,39.9868928 0.465228192,39.9868928 C0.465228192,39.9868928 -0.58153524,29.1136472 0.465228192,29.1136472 Z" opacity="0.5"></path></g></svg>
          </span>
        </div>
      </li>
    </ul>
    <div class="monitor-tip">
      <span class="high"><i class="block"></i>心率 大于 120</span>
      <span class="middle"><i class="block"></i>心率 100 ~ 120</span>
      <span class="low"><i class="block"></i>心率 小于 100</span>
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
  reactive,
  onBeforeUnmount,
} from "vue";

export default defineComponent({
  name: "monitor-case",
  setup(props, ctx) {
    // let personList: Array<any> = reactive([]);
    let personList: Array<any> = [
      {
        name: "张云飞",
        heart: 95,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "刘明轩",
        heart: 145,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "胡晓丽",
        heart: 105,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "魏陨涛",
        heart: 76,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "邢吉兰",
        heart: 60,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "吴东",
        heart: 156,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "刘岚",
        heart: 78,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "张飞",
        heart: 67,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "隋景超",
        heart: 88,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "刘双喜",
        heart: 90,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "苏茂云",
        heart: 76,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "商志斌",
        heart: 76,
        temperature: 35.6,
        humidity: 50,
      },
      {
        name: "方方",
        heart: 156,
        temperature: 35.6,
        humidity: 50,
      },
    ];

    onMounted(() => {}), onBeforeUnmount(() => {});

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
  .monitor-tip {
    text-align: left;
    .high {
      margin-right: 12px;
      font-size: 16px;
      float: left;
      .block {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        margin-right: 4px;
        margin-top: 3px;
        float: left;
        background-color: rgb(230, 46, 72);
      }
    }
    .middle {
      margin-right: 12px;
      font-size: 16px;
      float: left;
      .block {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        margin-right: 4px;
        margin-top: 3px;
        float: left;
        background-color: rgb(255, 170, 0);
      }
    }
    .low {
      font-size: 16px;
      float: left;
      .block {
        width: 16px;
        height: 16px;
        margin-right: 4px;
        border-radius: 4px;
        margin-top: 3px;
        float: left;
        background-color: rgb(46, 107, 230);
      }
    }
  }
}

.monitor-card {
  background-color: rgba(46, 107, 230, 0.2);
  border: 1px solid rgb(46, 107, 230);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &.alarm {
    background-color: rgba(230, 46, 72, 0.2);
    border: 1px solid rgb(230, 46, 72);
    box-shadow: 0 2px 12px 0 rgba(255, 0, 0, 10%);
    .title {
      color: rgb(230, 46, 72);
      border-bottom: 1px solid rgb(230, 46, 72);
    }
  }
  &.warning {
    background-color: rgba(255, 170, 0, 0.2);
    border: 1px solid rgb(255, 170, 0);
    box-shadow: 0 2px 12px 0 rgba(255, 170, 0, 10%);
    .title {
      color: rgb(255, 170, 0);
      border-bottom: 1px solid rgb(255, 170, 0);
    }
  }
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 10%);
  }

  .title {
    color: rgb(46, 107, 230);
    font-size: 24px;
    font-weight: bold;
    padding: 12px 20px;
    text-align: center;
    border-bottom: 1px solid rgb(46, 107, 230);
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

  .card-bg {
    position: absolute;
    bottom: -4px;
    left: 0px;
    display: block;
    width: 100%;
  }
}
</style>