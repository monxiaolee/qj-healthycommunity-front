<template>
  <div class="detail-wrapper__full">
    <div class="detail-header">人员详情</div>
    <div class="detail-content">
      <basic-info></basic-info>

      <div class="form-box clear-fixed">
        <el-date-picker
          style="float: left"
          v-model="time"
          type="date"
          @change="timeChange"
          placeholder="请选择时间"
        />
      </div>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>心率</span>
            <!-- <el-button class="button" type="text">Operation button</el-button> -->
          </div>
        </template>
        <div class="card-content">
          <chart-line
            :chartTime="personTime"
            :chartValue="personHeart"
          ></chart-line>
        </div>
      </el-card>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>体温</span>
            <!-- <el-button class="button" type="text">Operation button</el-button> -->
          </div>
        </template>
        <div class="card-content">
          <chart-line
            :chartTime="personTime"
            :chartValue="personTemperature"
          ></chart-line>
        </div>
      </el-card>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>湿度</span>
            <!-- <el-button class="button" type="text">Operation button</el-button> -->
          </div>
        </template>
        <div class="card-content">
          <chart-line
            :chartTime="personTime"
            :chartValue="personHumidity"
          ></chart-line>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getUserInfo } from "../../api/personnel-management";

import chartLine from "../../components/Chart/line.vue";
import basicInfo from "./basicInfo.vue";

export default defineComponent({
  name: "detail",
  components: {
    basicInfo,
    chartLine,
  },
  setup(props, ctx) {
    const time = ref("");
    const router = useRouter();
    const id = router.currentRoute.value.params.id;
    let personTime = ref([]);
    let personHeart = ref([]);
    let personTemperature = ref([]);
    let personHumidity = ref([]);
    // let personData = {
    //     time: [],
    //     heart: [],
    //     temperature: [],
    //     humidity: []
    // }

    // const charts = ref({
    //   chartTime: [],
    //   heart: [],
    //   temperature: [],
    //   humidity: [],
    // });

    // let userId: Object = {
    //   userId: id,
    // };
    const getTime = (time: any) => {
      const nowTimeDate = new Date(time).getTime();
      return nowTimeDate;
    };
    // const startTime = (time: any) => {
    //     const nowTimeDate = new Date(time);
    //     return nowTimeDate.setHours(0, 0, 0, 0)
    // }
    // const endTime = (time: any) => {
    //     const nowTimeDate = new Date(time)
    //     return nowTimeDate.setHours(23, 59, 59, 999)
    // }
    const timeChange = (val: any) => {
      // userListParams.startTime = startTime(val)

      getUserInfo({
        time: getTime(val),
        userId: id,
      }).then((res) => {
        personTime.value.length = 0;
        personHeart.value.length = 0;
        personTemperature.value.length = 0;
        personHumidity.value.length = 0;
        res.data.forEach((element: Object) => {
          personTime.value.push(element.createTime);
          personHeart.value.push(element.heart);
          personTemperature.value.push(element.temperature);
          personHumidity.value.push(element.humidity);
        });
      });
    };
    const featchData = () => {
      getUserInfo({
        time: new Date().getTime(),
        userId: id,
      }).then((res) => {
        personTime.value.length = 0;
        personHeart.value.length = 0;
        personTemperature.value.length = 0;
        personHumidity.value.length = 0;
        res.data.forEach((element: Object) => {
          personTime.value.push(element.createTime);
          personHeart.value.push(element.heart);
          personTemperature.value.push(element.temperature);
          personHumidity.value.push(element.humidity);
        });
      });
    };
    onMounted(() => {
      featchData();
    });
    return {
      time,
      timeChange,
      personTime,
      personHeart,
      personTemperature,
      personHumidity
    };
  },
});
</script>
<style lang="less" scoped>
.detail-wrapper__full {
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;

  .detail-header {
    color: #5a5e66;
    width: 100%;
    height: 46px;
    line-height: 46px;
    background-color: #fff;
  }

  .detail-content {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    height: calc(~"100% - 46px");
    overflow-y: auto;

    .box-card {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0px;
      }
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .card-content {
        width: 100%;
        height: 200px;
      }
    }
  }
}
</style>
