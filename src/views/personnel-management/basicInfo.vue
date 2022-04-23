<template>
    <div class="basic-info__wrapper">
        <el-descriptions title="基本信息">
            <el-descriptions-item label="姓名：">kooriookami</el-descriptions-item>
            <el-descriptions-item label="性别：">18100000000</el-descriptions-item>
            <el-descriptions-item label="年龄：">Suzhou</el-descriptions-item>
            <el-descriptions-item label="电话">
                <!-- <el-tag size="small">School</el-tag> -->
            </el-descriptions-item>
            <el-descriptions-item label="注册时间：">
            </el-descriptions-item>
            <el-descriptions-item label="家庭住址：">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
                Province</el-descriptions-item>
        </el-descriptions>
    </div>

</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from "vue"

export default defineComponent({
    name: "",
    setup(props, ctx) {
        return {

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