<template>
  <div class="login-account">
    <!-- 此处model相当于实时刷新account -->
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="手机号" prop="phone-number">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="verify-code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="get-button">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return { phone }
  }
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .get-button {
    margin-left: 10px;
  }
}
</style>
