<script setup lang="ts">
import Navigation from './Navigation.vue';
import HeaderBar from './HeaderBar.vue';
import GPUCard from './GPUCard.vue'
</script>

<template>

  <el-container class="layout-container">

    <el-header style="text-align: right; font-size: 12px">
      <HeaderBar />
    </el-header>

    <el-container>

      <el-main height=100%>
        <el-space wrap>
          <div v-for="_ in 3"> <GPUCard/> </div>
        </el-space>
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
</style>