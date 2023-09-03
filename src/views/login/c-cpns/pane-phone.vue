<template>
  <div class="pane-phone">
    <el-form label-width="60px" size="large">
      <el-form-item label="账号">
        <el-input />
      </el-form-item>
      <el-form-item label="密码">
        <el-input />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
const loginAction = (abc: string) => {
  console.log('abc')
}
defineExpose({ loginAction })
</script>

<style scoped lang="less"></style>
