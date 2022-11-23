<script setup lang="ts">
import { ref, reactive, Ref } from 'vue'
import { FullScreen } from '@element-plus/icons-vue';
import { ElLoading } from 'element-plus';

import HeaderBar from './HeaderBar.vue';
import GPUCard from './GPUCard.vue';


var createContainerVisible = ref(false)

const containerNumber = 0

const containerInfo = reactive({
  name: '',
  containers: '',
  duration: '',
  command: '',
  port: '',
})



const fullscreenLoading = ref(false)
const openFullScreen = (createContainerVisible: Boolean) => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)

  createContainerVisible = true
}

</script>

<template>

  <el-container class="layout-container">

    <el-header style="text-align: right; font-size: 12px">
      <HeaderBar />
    </el-header>

    <el-container direction="vertical">

      <el-main width="100%" height="fix-content">
        <el-space wrap>
          <div v-for="i in 3" :key="i">
            <GPUCard :index="i" />
          </div>
        </el-space>

      </el-main>

      <el-divider></el-divider>

      <el-main width="100%" style="text-align: center; font-size: 12px">
        <h1>My Containers</h1>
        <div v-if="containerNumber == 0">
          <el-empty description="No Containers">
            <el-button type="primary" @click="createContainerVisible = true">Create A Container</el-button>
          </el-empty>
        </div>
        <!-- <el-space wrap>
          <div v-for="i in 2" :key="i">
            <ContainerCard :index="i" />
          </div>
        </el-space> -->
      </el-main>
    </el-container>

    <el-dialog v-model="createContainerVisible" title="Apply for GPU" width="35%" destroy-on-close center>
      <el-form :model="containerInfo" label-width="100px">
        <el-form-item label="Container Alias">
          <el-input v-model="containerInfo.name" />
        </el-form-item>
        <el-form-item label="Image">
          <el-select v-model="containerInfo.containers" placeholder="please select image">
            <el-option label="image 1" value="one" />
            <el-option label="image 2" value="two" />
          </el-select>
        </el-form-item>
        <el-form-item label="Port Mapping">
          <el-input v-model="containerInfo.port" placeholder="如果填写多个端口请用 ｜ 隔开" />
        </el-form-item>
      </el-form>

      <template #footer>
            <span class="dialog-footer">
                <el-button @click="createContainerVisible = false">Cancel</el-button>
                <!-- <el-button type="primary" @click="createContainerVisible = false, openFullScreen"> -->
                <el-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="openFullScreen(createContainerVisible)">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
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
