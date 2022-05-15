<template>
  <div class="main-content">
    <div class="qj-layout__card clear-fix">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名：">
          <el-input v-model="formInline.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="电话号码：">
          <el-input v-model="formInline.telephone" placeholder="请输入电话号码" />
        </el-form-item>
        <el-form-item label="设备编号：">
          <el-input v-model="formInline.equipmentId" placeholder="请输入设备编号" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="qj-layout__card">
      <el-table
        :data="tableData"
        stripe
        :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
        border
        style="width: 100%"
      >
        <el-table-column type="index" label="序号" align="center" width="60" :index="indexMethod" />
        <el-table-column prop="machineType" label="设备类型" width="150" />
        <el-table-column prop="machineId" label="设备编号" align="center"/>
        <el-table-column prop="name" label="人员姓名" width="160" />
        <el-table-column prop="telephone" label="手机号" width="200" />
      </el-table>
      <div class="qj-table__footer clear-fix">
        <el-pagination background layout="prev, pager, next" :total="total" />
      </div>
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
} from "vue";
import { getPersonEquipment } from "../../api/personnel-equipment";

export default defineComponent({
  name: "personnelEquipment",
  setup(props, ctx) {
    let tableData = ref([]);
    let total = 0
    interface User {
      id: string
    }
    const formInline = reactive({
      name: "",
      telephone: "",
      equipmentId: "",
      page: 1,
      size: 10
    });
    const onSearch = () => {
      // 搜索
      featchData()
    };

    const indexMethod = (index: number) => {
      return index + 1
    }

    const featchData = () => {
      getPersonEquipment(formInline).then((res) => {
        tableData.value = [].concat(res.data.list)
        total = res.data.total
      })
    };

    onMounted(() => {
      featchData();
    });

    return {
      total,
      tableData,
      formInline,
      indexMethod,
      onSearch
    };
  },
});
</script>

<style lang="less" scoped>
.demo-form-inline {
  float: left;
}
.main-content {
  width: 100%;
  height: 100%;
  // padding: 60px 16px 16px;
  // padding: 16px;
}

.qj-layout__card {
  background-color: #fff;
  padding: 24px;
  border-radius: 3px;
  & + .qj-layout__card {
    margin-top: 10px;
  }
}
.clear-fix:after {
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.qj-table__footer {
  .el-pagination {
    float: right;
    margin-top: 16px;
  }
}

.el-form-item--default {
  margin-bottom: 0px;
}
</style>