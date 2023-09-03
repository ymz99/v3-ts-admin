<template>
  <div class="login-panel">
    <h1 class="title">管理系统</h1>
    <div class="taps">
      <el-tabs v-model="activeName" stretch type="border-card">
        <el-tab-pane label="帐号登录" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <PaneAccount ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <PanePhone ref="phoneRef" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="control">
      <el-checkbox v-model="isRemember" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" size="large" type="primary" @click="loginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cellphone, UserFilled } from '@element-plus/icons-vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'

const isRemember = ref(false)
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof PaneAccount> | null>(null)
const phoneRef = ref<InstanceType<typeof PanePhone> | null>(null)

const loginClick = () => {
  accountRef.value?.loginAction()
}
</script>

<style scoped lang="less">
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .control {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
