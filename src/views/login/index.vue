<template>
  <div class="login">
    <el-row style="height: 100%;" type="flex" justify="center">
      <el-col :xs="24" :sm="18" :md="15" :lg="10" :xl="8" style="position: relative;">
        <section class="login-wrapper au-bg-white au-card au-box-shadow">
          <h2 class="title">用户登录</h2>
          <el-form ref="form">
            <el-form-item>
              <section class="au-flex login-item">
                <label class="au-flex au-flex-row-center au-flex-column-center" for="username">
                  <el-icon><UserFilled /></el-icon>
                  <small>账号</small>
                </label>
                <input type="text" v-model="form.username" placeholder="请输入账号" id="username" autocomplete="off" />
              </section>
            </el-form-item>
            <el-form-item>
              <section class="au-flex login-item">
                <label class="au-flex au-flex-row-center au-flex-column-center" for="password">
                  <el-icon><Unlock /></el-icon>
                  <small>密码</small>
                </label>
                <input type="password" v-model="form.password" placeholder="请输入密码" id="password" autocomplete="off" />
              </section>
            </el-form-item>
            <el-form-item class="login-btns">
              <el-button type="primary" @click="onLogin">登 录</el-button>
            </el-form-item>
          </el-form>
        </section>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, inject } from 'vue'
import { useRoute, useRouter } from "vue-router";
import {
  UserFilled,
  Unlock
} from '@element-plus/icons-vue'
export default defineComponent({
  name: 'login',
  components: {Unlock, UserFilled},
  setup(prop, ctx) {
    const router = useRouter();
    const form = reactive({
      username: 'admin',
      password: 'admin'
    })

    const onLogin = () => {
      // console.log("登录逻辑")
      router.push({
        name: 'personnelManagement'
      })
    }
    
    return {
      onLogin,
      form,
    }
  },
})
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #2d3a4b;
  &-wrapper {
    width: 80%;
    max-width: 400px;
    position: absolute;
    padding: 32px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      color: #eee;
      font-size: 26px;
      line-height: 32px;
      margin-bottom: 32px;
    }
    .login-item {
      width: 100%;
      padding: 4px 11px;
      border: 1px solid #409EFF;
      border-radius: 5px;
      transition: all .2s;
      &:focus-within {
        border: 1px solid #409eff;
        // border: 1px solid transparent;
        // box-shadow: 0 0px 15px 0px #409eff, 0 0px 12px 0 rgb(0 0 0 / 20%) inset;
      }
      label {
        cursor: pointer;
        width: 80px;
        color: rgb(64, 158, 255);
        i {
          font-size: 20px;
          vertical-align: middle;
        }
        small {
          color: #999;
          font-size: 16px;
          letter-spacing: .1em;
          font-weight: 400;
          margin-left: 8px;
        }
      }
      input {
        width: calc(~'100% - 80px');
        flex: 1;
        border: none;
        font-size: 16px;
        color: #409EFF;
        font-weight: 600;
        letter-spacing: .1em;
        background: transparent;
        &::-webkit-input-placeholder {
          color: rgb(221, 221, 221);
          transition: all .2s;
        }
      }
      input:focus {
        outline: none;
        &::-webkit-input-placeholder {
          color: transparent;
        }
      }
    }
    .login-btns {
      :deep(.el-form-item__content) {
        display: flex;
        flex-direction: column;
        .el-button {
          height: 40px;
          font-size: 16px;
          margin-left: 0px;
          margin-top: 16px;
          width: 100%;
        }
      }
    }
  }
}
.tips {
  font-size: 14px;
  color: #999;
  font-family: cursive;
  letter-spacing: 1px;
}
@media screen and (max-width: 769px) {
  .login {
    .login-wrapper {
      padding: 32px 16px;
      width: 95%;
    }
  }
}
</style>
