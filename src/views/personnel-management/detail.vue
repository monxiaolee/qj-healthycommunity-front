<template>
    <div class="detail-wrapper__full">
        <div class="detail-header">人员详情</div>
        <div class="detail-content">

            
            <basic-info></basic-info>
            
            <div class="form-box clear-fixed">
                <el-date-picker style="float: left;" v-model="time" type="date" @change="timeChange" placeholder="请选择时间" />
            </div>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>心率</span>
                        <!-- <el-button class="button" type="text">Operation button</el-button> -->
                    </div>
                </template>
                <div class="card-content">
                    <chart-line></chart-line>
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

                </div>
            </el-card>
        </div>
</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from "vue"
import { useRoute, useRouter } from "vue-router";
import { getUserBasicInfo } from '../../api/personnel-management'
import { getUserInfo } from '../../api/personnel-management'

import chartLine from '../../components/Chart/line.vue'
import basicInfo from './basicInfo.vue'

export default defineComponent({
    name: "detail",
    components: {
        basicInfo, chartLine
    },
    setup(props, ctx) {
        const time = ref('')
        const router = useRouter()
        const id = router.currentRoute.value.params.id


        console.log("获取路由ID", id)
        let userId: Object = {
            userId: id
        }
        const getTime = (time:any) => {
            const nowTimeDate = new Date(time).getTime();
            return nowTimeDate
        }
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
                userId: id
            }).then((res) => {
                console.log("人员历史数据", res)
            })
        }
        const featchData = () => {
            getUserBasicInfo(userId).then((res) => {
                console.log("人员数据返回", res)
            })
            getUserInfo({
                time: new Date().valueOf(),
                userId: id
            }).then((res) => {
                console.log("人员历史数据", res)
            })
        }
        onMounted(() => {
            featchData();
        })
        return {
            time,
            timeChange
        }
    }
})
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
        height: calc(~ "100% - 46px");
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
