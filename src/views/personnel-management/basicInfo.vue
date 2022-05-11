<template>
    <div class="basic-info__wrapper">
        <el-descriptions title="基本信息">
            <el-descriptions-item label="姓名：">{{userInfo.name}}</el-descriptions-item>
            <el-descriptions-item label="性别：">男</el-descriptions-item>
            <el-descriptions-item label="年龄：">24</el-descriptions-item>
            <el-descriptions-item label="电话">
                15632635335
            </el-descriptions-item>
            <el-descriptions-item label="注册时间：">
            </el-descriptions-item>
            <el-descriptions-item label="家庭住址："></el-descriptions-item>
        </el-descriptions>
    </div>

</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive, watch } from "vue"

export default defineComponent({
    name: "basicInfo",
    props: {
        userBasicInfo: {
            type: Object,
            default: () => {}
        }
    },
    setup(props, ctx) {
        const userInfo = props.userBasicInfo
        console.log("==========", userInfo)
        onMounted(() => {
            
        })
        return {
            userInfo
        }
    }
})
</script>
<style lang="less" scoped>
.basic-info__wrapper {
    padding: 12px;
    margin-bottom: 12px;
    background-color: #fff;
    border-radius: 4px;
}
</style>