<template>
    <div class="basic-info__wrapper">
        <el-descriptions title="基本信息">
            <el-descriptions-item label="姓名：">{{userInfo.name}}</el-descriptions-item>
            <el-descriptions-item label="性别：">{{userInfo.sex}}</el-descriptions-item>
            <el-descriptions-item label="年龄：">{{userInfo.age}}</el-descriptions-item>
            <el-descriptions-item label="电话">
                {{userInfo.telephone}}
            </el-descriptions-item>
            <el-descriptions-item label="注册时间：">
                {{userInfo.createTime}}
            </el-descriptions-item>
            <el-descriptions-item label="家庭住址：">{{userInfo.address}}</el-descriptions-item>
        </el-descriptions>
    </div>

</template>
<script lang="ts">
import { getUserBasicInfo } from "../../api/personnel-management";
import { useRoute, useRouter } from "vue-router";
import { defineComponent, onMounted, ref, reactive, watch } from "vue"

export default defineComponent({
    name: "basicInfo",
    // props: {
    //     userBasicInfo: {
    //         type: Object,
    //         default: () => {}
    //     }
    // },
    setup(props, ctx) {
        const router = useRouter();
        const id = router.currentRoute.value.params.id;
        let userInfo = reactive({
            name: '',
            sex: '',
            age: '',
            telephone: '',
            createTime: '',
            address: ''
        })
        let userId: Object = {
            userId: id,
        };
        const featchData = () => {
            getUserBasicInfo(userId).then((res) => {
                userInfo.name = res.data.name
                userInfo.sex = res.data.sex == 0 ? '男': '女'
                userInfo.age = res.data.age
                userInfo.telephone = res.data.telephone
                userInfo.createTime = res.data.createTime
                userInfo.address = res.data.address
            });
        }
        
        onMounted(() => {
            featchData()
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