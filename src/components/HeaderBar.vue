<template>
    <div class="toolbar">
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: center; font-size: 20px;"
          ><setting
        /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Person Info</el-dropdown-item>
            <el-dropdown-item>Exit</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>Tom</span>
    </div>
</template>
  
<script setup lang="ts">
    import { Setting } from '@element-plus/icons-vue'
</script>
  
  <style scoped>
    .toolbar{
      margin-top: auto;
    }
  </style>