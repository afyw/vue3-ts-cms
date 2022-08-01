<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span class="user-name">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon><CircleClose /></el-icon>
            退出登录</el-dropdown-item
          >
          <el-dropdown-item divided>
            <el-icon><User /></el-icon>用户信息</el-dropdown-item
          >
          <el-dropdown-item>
            <el-icon><Coordinate /></el-icon>系统管理</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)

    return { name }
  }
})
</script>

<style lang="less" scoped>
.user-info {
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    .user-name {
      padding: 0 10px;
    }
  }
}
</style>
