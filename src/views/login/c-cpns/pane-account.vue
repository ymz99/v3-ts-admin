<template>
  <div class="panel-account">
    <el-form
      :model="accountForm"
      :rules="accountRules"
      label-width="60px"
      size="large"
      ref="formRef"
      status-icon
    >
      <el-form-item label="帐号" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const accountForm = reactive({
  name: '',
  password: ''
})
const accountRules: FormRules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 16, message: '长度3到16', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 16, message: '长度3到16', trigger: 'blur' }
  ]
}

const formRef = ref<FormInstance>()
function loginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('cc')
    }
  })
  console.log('cc', accountForm)
}

defineExpose({ loginAction })
</script>

<style scoped lang="less"></style>
