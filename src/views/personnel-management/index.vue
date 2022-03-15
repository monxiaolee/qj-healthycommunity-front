<template>
  <div class="main-content">
    <div class="qj-layout__card clear-fix">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名：">
          <el-input v-model="formInline.name" placeholder="Approved by" />
        </el-form-item>
        <el-form-item label="电话号码：">
          <el-input v-model="formInline.phone" placeholder="Approved by" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="qj-layout__card">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="personnelNumber" label="人员编号" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="gender" label="性别" />
        <el-table-column prop="phone" label="电话" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="address" label="家庭住址" />
        <el-table-column prop="addTime" label="添加时间" />
        <el-table-column prop="attribute" label="属性" />
      </el-table>
      <div class="qj-table__footer clear-fix">
        <el-pagination background layout="prev, pager, next" :total="1000" />
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
  reactive
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
        attribute: "",
      },
      {
        personnelNumber: "001",
        name: "Tom",
        gender: "",
        phone: "",
        age: "",
        address: "",
        addTime: "",
        attribute: "",
      },
      {
        personnelNumber: "001",
        name: "Tom",
        gender: "",
        phone: "",
        age: "",
        address: "",
        addTime: "",
        attribute: "",
      },
      {
        personnelNumber: "001",
        name: "Tom",
        gender: "",
        phone: "",
        age: "",
        address: "",
        addTime: "",
        attribute: "",
      },
      {
        personnelNumber: "001",
        name: "Tom",
        gender: "",
        phone: "",
        age: "",
        address: "",
        addTime: "",
        attribute: "",
      },
    ];
    const formInline = reactive({
      user: '',
      region: '',
    })
    const onSearch = () => {
      console.log("搜索")
    }

    return {
      tableData,
      formInline,
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
  &+.qj-layout__card {
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
</style>