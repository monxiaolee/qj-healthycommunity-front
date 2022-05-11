<template>
  <div class="main-content">
    <div class="qj-layout__card clear-fix">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名：">
          <el-input v-model="formInline.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="电话号码：">
          <el-input
            v-model="formInline.telephone"
            placeholder="请输入电话号码"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
          <!-- <el-button type="success" @click="onAdd">新增</el-button> -->
        </el-form-item>
      </el-form>
    </div>
    <div class="qj-layout__card">
      <el-table
        :data="tableData"
        :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
        border
        style="width: 100%"
      >
        <el-table-column prop="id" label="人员编号" align="center" width="90" />
        <el-table-column prop="name" label="姓名" width="150" />
        <el-table-column prop="sex" label="性别" align="center" width="90" />
        <el-table-column prop="telephone" label="电话" width="160" />
        <el-table-column prop="age" label="年龄" width="90" />
        <el-table-column prop="address" label="家庭住址" />
        <!-- <el-table-column prop="createTime" label="添加时间" width="120" /> -->
        <el-table-column label="添加时间" prop="createTime" width="180" :formatter="timeFormatter">
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-button
              size="small"
              @click="handleDetail(scope.$index, scope.row)"
              >详情</el-button
            >
            <!-- <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            > -->
          </template>
        </el-table-column>
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
import { getUsers } from "../../api/personnel-management";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "personnelManagement",
  setup(props, ctx) {
    const router = useRouter();
    let tableData = ref([]);
    let total = 0;
    interface User {
      id: string;
    }
    const formInline = reactive({
      name: "",
      telephone: "",
      page: 1,
      size: 10,
    });
    const onSearch = () => {
      // 搜索
      featchData();
    };
    const onAdd = () => {
      // 新增
    };

    const handleDetail = (index: number, row: any) => {
      // console.log("查看人员详情", row.id)
      // router.push({
      //   path: `/personnelManagement/detail/${row.id}`
      // })
      const routeUrl = router.resolve({
        path: `/personnelManagement/detail/${row.id}`,
      });
      window.open(routeUrl.href, "_blank");
    };

    const timeFormatter = (row, column, cellValue, index) => {
      let format = 'YYYY-mm-dd HH:MM:SS'
      let date = new Date(cellValue);
      const dataItem = {
        'Y+': date.getFullYear().toString(),
        'm+': (date.getMonth() + 1).toString(),
        'd+': date.getDate().toString(),
        'H+': date.getHours().toString(),
        'M+': date.getMinutes().toString(),
        'S+': date.getSeconds().toString(),
      };
      Object.keys(dataItem).forEach((item) => {
        const ret = new RegExp(`(${item})`).exec(format);
        if (ret) {
          format = format.replace(ret[1], ret[1].length === 1 ? dataItem[item] : dataItem[item].padStart(ret[1].length, '0'));
        }
      });
      return format
    }

    const featchData = () => {
      getUsers(formInline).then((res) => {
        tableData.value = [].concat(res.data.list);
        total = res.data.total;
      });
    };

    onMounted(() => {
      featchData();
    });

    return {
      tableData,
      total,
      formInline,
      onSearch,
      onAdd,
      handleDetail,
      timeFormatter
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