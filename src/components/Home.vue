<script setup lang="ts">
import HeaderBar from './HeaderBar.vue';
import GPUCard from './GPUCard.vue'

import { ref } from 'vue';
import ContainerCard from './ContainerCard.vue';

const fill = ref(true)
</script>

<template>

  <el-container class="layout-container">

    <el-header style="text-align: right; font-size: 12px">
      <HeaderBar />
    </el-header>

    <el-container direction="vertical">

      <el-main width="100%" height="fix-content">
        <el-space fill wrap>
          <el-row v-for="index in 2" :key="index" padding="10px">
          <el-col :span="24">
            <GPUCard :index="index" />
          </el-col>
        </el-row>
        </el-space>

      </el-main>

      <el-main width="100%" style="text-align: center; font-size: 12px">
        <el-row>
          <el-col :span="12" v-for="index in 2" :key="index">
            <ContainerCard :index="index" />
          </el-col>
        </el-row>

      </el-main>

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

.layout-container .el-footer {
  position: relative;
  align-items: middle;
  justify-items: center;
  vertical-align: middle;
  padding: 20;
}
</style>
