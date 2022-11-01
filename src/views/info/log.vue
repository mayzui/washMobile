<template>
  <div style="max-width:540px;">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 60%"
    >
      <el-table-column prop="createtime" label="时间" align="center">
      </el-table-column>
      <el-table-column prop="ip" label="IP地址" align="center">
      </el-table-column>
      <el-table-column prop="name" label="登陆账号" align="center">
      </el-table-column>
      <el-table-column label="结束时间" align="center">
        <template slot-scope="scope">
          <div>
            <span v-if="scope.row.end_time == 0">暂无操作</span>
            <span v-else>{{ scope.row.end_time }}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getData() {
      this.$api.info.loglist().then((data) => {
        if (data.code == 200) {
          data.data.rows.map((item) => {
            if (item.createtime) {
              let time = new Date(item.createtime*1000);
              let year = time.getFullYear();
              let month = time.getMonth() + 1;
              let day = time.getDate();
              if (month < 10) {
                month = "0" + month;
              }
              if (day < 10) {
                day = "0" + day;
              }
              item.createtime = year + "-" + month + "-" + day;
            }
            if (item.end_time != 0) {
              let time = new Date(item.end_time*1000);
              let year = time.getFullYear();
              let month = time.getMonth() + 1;
              let day = time.getDate();
              if (month < 10) {
                month = "0" + month;
              }
              if (day < 10) {
                day = "0" + day;
              }
              item.end_time = year + "-" + month + "-" + day;
            }
          });
          this.tableData = data.data.rows;
        }
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped lang='scss'>
</style>