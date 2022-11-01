<template>
  <div style="max-width:750px;">
    <div class="flex" style="margin-bottom: 20px">
      <div>
        <cubtn type="success" @tap="addUser">新增</cubtn>
        <cubtn @tap="handleDelete" type="error"></cubtn>
        <cubtn @tap="handleRestart" type="success">密码重置</cubtn>
      </div>
      <div>
        创建时间：
        <el-date-picker
          v-model="date"
          type="daterange"
          @change="changeDate"
          align="right"
          unlink-panels
          value-format="yyyy-MM-dd"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        prop="createtime"
        label="创建时间"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="name" label="员工姓名" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" align="center">
      </el-table-column>
      <el-table-column
        :formatter="getWechat"
        label="是否绑定微信登录"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        :formatter="getComment"
        label="备注"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column label="修改" align="center">
        <template slot-scope="scope">
          <div>
            <cubtn @tap="handleEdit(scope.row.id)">修改</cubtn>
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
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      date: [],
      tableData: [],
      multipleSelection: [],
      form:{
        startTime:'',
        endTime:''
      }
    };
  },
  methods: {
    changeDate(e) {
      if (e) {
        this.form.startTime = e[0];
        this.form.endTime = e[1];
      } else {
        this.form.startTime = "";
        this.form.endTime = "";
      }
      this.getData();
    },
    handleDelete() {
      if (this.multipleSelection.length > 0) {
        let arr = [];
        this.multipleSelection.map((item) => {
          arr.push(item.id);
        });
        this.$confirm("所选中的用户删除后不可恢复，请问是否删除？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$api.info.deleteaccount({ id: arr.join() }).then((data) => {
              if (data.code == 200) {
                this.$message.success("删除成功");
                this.getData();
              } else {
                this.$message.error(data.msg ? data.msg : "删除失败");
              }
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消重置",
            });
          });
      } else {
        this.$message.error("当前未选中用户，不能执行该操作");
      }
    },
    handleRestart() {
      if (this.multipleSelection.length > 0) {
        let arr = [];
        this.multipleSelection.map((item) => {
          arr.push(item.id);
        });
        this.$confirm("是否重置所选中的用户的密码？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$api.info.restartaccount({ id: arr.join() }).then((data) => {
              if (data.code == 200) {
                this.$message.success("重置成功");
              } else {
                this.$message.error(data.msg ? data.msg : "重置失败");
              }
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消重置",
            });
          });
      } else {
        this.$message.error("当前未选中用户，不能执行该操作");
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(e) {
      this.$router.push({ name: "editaccount", query: { id: e, active: 1 } });
    },
    addUser(e) {
      this.$router.push("addaccount");
    },
    getData() {
      this.$api.info.accountlist(this.form).then((data) => {
        if (data.code == 200) {
          data.data.rows.map((item) => {
            let time = new Date(item.createtime * 1000);
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
          });
          this.tableData = data.data.rows.filter((item) => {
            return item.status == 0;
          });
        }
      });
    },
    getWechat(row, column, cellValue, index) {
      return row.is_login_wechat == 0 ? "否" : "是";
    },
    getComment(row, column, cellValue, index) {
      return row.comment == "" ? "暂无" : row.comment;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped lang='scss'>
.flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>