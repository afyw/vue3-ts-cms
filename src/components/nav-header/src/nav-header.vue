<template>
  <div class="nav-header">
    <el-icon :size="25" class="fold-menu" @click="handleFoldClick">
      <component :is="isFold ? 'Expand' : 'Fold'"></component>
    </el-icon>
    <div class="content">
      <nav-bread-crumb :breadcrumbs="breadcrumbs"></nav-bread-crumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import userInfo from './user-info.vue'
import navBreadCrumb from '@/base-ui/breadcrumb'

import { pathMapBreadcrumbs } from '@/utils/map-menus'
export default defineComponent({
  components: { userInfo, navBreadCrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    // 获取当前用户名
    const store = useStore()
    // const name = computed(() => store.state.login.userInfo.name)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据：[{},{}]

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return { isFold, handleFoldClick, breadcrumbs }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
