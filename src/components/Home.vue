<script setup lang="ts">
import Navigation from './Navigation.vue';
import HeaderBar from './HeaderBar.vue';
import GPUCard from './GPUCard.vue'
import Apply from './Apply.vue';

import { ref } from 'vue';

const fill = ref(true)
</script>

<template>

  <el-container class="layout-container">

    <el-header style="text-align: right; font-size: 12px">
      <HeaderBar />
    </el-header>

    <el-container>

      <el-main width="100%" height="fix-content">
        <el-row>
          <el-col :span="12"><GPUCard/></el-col>
          <el-col :span="12"><GPUCard/></el-col>
        </el-row>
      </el-main>

      <el-footer style="text-align: center; font-size: 12px">
        <Apply />
      </el-footer>

    </el-container>


  </el-container>
</template>
  
  
<style scoped>
.layout-container {
  height: 100vh;
}

.layout-container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  align-items: middle;
  justify-items: center;
  vertical-align: middle;

}

.layout-container .el-aside {
  color: var(--el-text-color-primary);
}

.layout-container .el-main {
  padding: 20;
}
</style>