<template>
  <div class="">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="personnelNumber" label="人员编号" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="gender" label="性别" />
      <el-table-column prop="phone" label="电话" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="address" label="家庭住址" />
      <el-table-column prop="addTime" label="添加时间" />
      <el-table-column prop="attribute" label="属性" />
    </el-table>
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
} from "vue";

export default defineComponent({
  name: "personnelManagement",
  setup(props, ctx) {
    const tableData = [
      {
        personnelNumber: "001",
        name: "Tom",
        gender: "",
        phone: "",
        age: "",
        address: "",
        addTime: "",
        attribute: ""
      }
    ];
    return {
      tableData,
    };
  },
});
</script>