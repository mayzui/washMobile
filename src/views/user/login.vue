<template>
  <div class="page_login">
    <div class="main">
      <div class="form">
        <div>
          <p class="title">欢迎进入，</p>
          <p class="title">邱小姐洗护代理系统</p>
        </div>
        <el-form
          ref="form"
          :model="form"
          label-width="100px"
          :rules="rules"
          :disabled="loading"
          size="mini"
        >
          <el-form-item label="账号：" prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
              clearable
            >
              <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              v-model="form.password"
              placeholder="请输入密码"
              show-password
              clearable
            >
              <i slot="prefix" class="el-input__icon el-icon-unlock"></i
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="page_login-setup">
          <span class="flex_center" style="font-size: 15px">
            记住密码<el-switch
              v-model="remind"
              style="margin-left: 20px"
            ></el-switch>
          </span>
          <!-- <span style="color:#888;" @click="$router.push('/changepwd')">忘记密码</span> -->
        </div>
        <el-button
          type="primary"
          style="width: 100%"
          size="mini"
          round
          @click="doLogin('form')"
          >立即登录</el-button
        >
        <div class="page_login-setup" style="font-size: 14px">
          <span></span>
          <!-- <span style="color:#888;">二维码登录</span> -->
          <span style="color: #888">忘记密码？联系管理员</span>
        </div>
      </div>
      <div class="logo">
        <img src="./../../assets/image/loginback.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { handleAuthToken } from "@control/control_site";

export default {
  components: {},
  data() {
    return {
      form: {
        // username: "13686868686",
        // password: "123456",
        username: "",
        password: "",
      },
      loading: false,
      remind: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    doLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.user.login(this.form).then((data) => {
            if (data.code == 200) {
              this.$message.success("登录成功");
              handleAuthToken.set(data.data.token);
              localStorage.setItem("userinfo", JSON.stringify(data.data));
              if (this.remind) {
                localStorage.setItem("logininfo", JSON.stringify(this.form));
              }
              if (!this.remind && localStorage.getItem("logininfo")) {
                localStorage.removeItem("logininfo");
              }
              localStorage.setItem("loginremind", JSON.stringify(this.remind));
              this.$router.push({ name: "home" });
            } else {
              this.$message.error(data.msg ? data.msg : "登录失败");
            }
          });
        } else {
          this.$message.error("请完善登录信息后再试！");
          return false;
        }
      });
    },
  },
  mounted() {
    if (localStorage.getItem("loginremind")) {
      this.remind = JSON.parse(localStorage.getItem("loginremind"));
    }
    if (localStorage.getItem("logininfo")) {
      this.form = JSON.parse(localStorage.getItem("logininfo"));
    }
  },
};
</script>

<style lang="scss" scoped>
.page_login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    width: 70%;
    height: 585px;
    border-radius: 20px;
    box-shadow: 0px 1px 10px 1px rgba(129, 133, 136, 0.13);
    border: 1px solid rgba(255, 255, 255, 100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    .logo {
      //   width: 350px;
      flex: 1;
      height: 585px;

      > img {
        width: 100%;
        height: 585px;
      }
    }

    .form {
      //   width: 350px;
      flex: 1;
      height: 585px;
      overflow: hidden;
      box-sizing: border-box;
      padding: 80px 40px;

      .title {
        font-size: 32px;
        line-height: 1;
        margin-bottom: 10px;
        color: rgba(58, 98, 215, 1);

        &:last-child {
          font-weight: bold;
          margin-bottom: 40px;
        }
      }
    }

    .page_login-setup {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      font-size: 14px;
      color: #333;
      cursor: pointer;
    }
  }
}
/deep/ .el-form-item__label {
  font-size: 20px !important;
  height: 40px;
  line-height: 40px;
}
/deep/ .el-input--mini {
  font-size: 20px !important;
}
/deep/ .el-input__icon {
  height: 40px !important;
  line-height: 40px !important;
}
/deep/ .el-input__inner {
  height: 40px !important;
  line-height: 40px !important;
}
/deep/ .el-button--mini,
.el-button--small {
  padding: 15px 24px;
  font-size: 17px;
  background: rgb(58, 98, 215);
  border-radius: 27px;
}
</style>