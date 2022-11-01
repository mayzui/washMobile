<template>
  <div class="" style="width: 50%">
    <div>
      <el-form
        :model="form"
        ref="form"
        :rules="rules"
        label-width="140px"
        style="width: 100%"
      >
        <el-form-item label="员工姓名" prop="name">
          <el-input
            placeholder="请输入员工姓名"
            v-model="form.name"
            clearable
            maxlength="11"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="手机号码" prop="phone">
          <el-input
            placeholder="请输入手机号码"
            v-model="form.phone"
            clearable
            maxlength="11"
          ></el-input>
        </el-form-item> -->
        <!-- <el-form-item label="密码设定" prop="password">
          <el-input
            placeholder="请输入密码设定"
            v-model="form.password"
            clearable
          ></el-input>
        </el-form-item> -->
        <!-- <el-form-item label="是否绑定微信登录" prop="is_login_wechat">
          <div class="bindwechat">
            <el-radio v-model="form.is_login_wechat" label="1">是</el-radio>
            <el-input
              placeholder="请输入微信号"
              v-model="form.key"
              clearable
            ></el-input>
          </div>
          <el-radio v-model="form.is_login_wechat" label="0">否</el-radio>
        </el-form-item> -->
        <el-form-item label="备注" prop="comment">
          <el-input
            type="textarea"
            v-model="form.comment"
            placeholder="请输入备注"
            clearable
            maxlength="200"
            show-word-limit
            :rows="6"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="foot-btn">
      <cubtn @tap="goBack">返回</cubtn>
      <cubtn @tap="submit('form')" type="success">确认</cubtn>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    var validatePhone = (rule, value, callback) => {
      if (!/^1[3456789]\d{9}$/.test(value) && value !== "") {
        callback(new Error("请输入正确的手机号"));
      }
      callback();
    };
    return {
      form: {
        name: "",
        // password: "",
        // phone: "",
        // is_login_wechat: "",
        comment: "",
        // key: "",
      },
      rules: {
        name: [{ required: true, message: "请输入员工姓名", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { validator: validatePhone, trigger: "blur" },
        ],
        // is_login_wechat: [
        //   { required: true, message: "请选择是否绑定微信", trigger: "blur" },
        // ],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.info.editaccount(this.form).then((data) => {
            if (data.code == 200) {
              this.$message.success("修改成功");
              this.goBack();
            } else {
              this.$message.error(data.msg ? data.msg : "修改失败");
            }
          });
        } else {
          this.$message.error("请完善信息后再试！");
          return false;
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if (this.$route.query) {
      this.active = this.$route.query.active;
      this.$api.info
        .accountdetail({ id: this.$route.query.id })
        .then((data) => {
          if (data.code == 200) {
            this.form = data.data;
          }
        });
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.foot-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bindwechat {
  display: flex;
  align-items: center;
}
</style>