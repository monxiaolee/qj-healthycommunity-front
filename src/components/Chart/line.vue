<template>
    <div class="line-chart__wrapper">
        <div class="line-chart" ref="lineChart"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from "vue"
import * as Echarts from 'echarts'

export default defineComponent({
    name: "line",
    setup(props, ctx) {
        const dateList: any = ["2022-06-06", "2022-06-07", "2022-06-08", "2022-06-09", "2022-06-10"]
        const valueList: any = [100, 110, 120, 130, 140]
        const option = {
            visualMap: [
                {
                    show: false,
                    type: 'continuous',
                    seriesIndex: 0,
                    min: 0,
                    max: 400
                }
            ],

            tooltip: {
                trigger: 'axis'
            },
            xAxis: [
                {
                    data: dateList
                }
            ],
            yAxis: [
                {}
            ],
            grid: {
                left: '20',
                right: '4%',
                bottom: '10px',
                top: '3%',
                containLabel: true
            },
            series: [
                {
                    type: 'line',
                    showSymbol: false,
                    data: valueList
                }
            ]
        }
        const lineChart = ref<any>();
        const lineCharts = ref<any>();
        const initChart = () => {
            lineCharts.value = Echarts.init(lineChart.value)
            lineCharts.value.setOption(option)

        }
        onMounted(() => {
            initChart()
        })
        return {
            lineChart
        }
    }
})
</script>
<style lang="less" scoped>
.line-chart__wrapper {
    width: 100%;
    height: 100%;

    .line-chart {
        width: 100%;
        height: 100%;
    }
}
</style>