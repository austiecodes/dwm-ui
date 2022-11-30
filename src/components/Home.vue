<script setup lang="ts">
import { ref, reactive, Ref } from 'vue'
import { FullScreen } from '@element-plus/icons-vue';
import { ElLoading } from 'element-plus';

import HeaderBar from './HeaderBar.vue';
import GPUCard from './GPUCard.vue';
import Containers from './Containers.vue';

const size=ref(20)

</script>




<template>


  <el-container class="layout-container">

    <el-header style="text-align: right; font-size: 12px">
      <HeaderBar />
    </el-header>

    <el-container direction="vertical">

      <el-main width="100%" height="fix-content" justify="center">
        <el-space wrap :size="size">
          <div v-for="i in 3" :key="i">
            <GPUCard :index="i" />
          </div>
        </el-space>

      </el-main>

      <el-divider></el-divider>

      <el-main width="100%" style="text-align: center; font-size: 12px" justify="center">
        <Containers :container-number="3"/>
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
