<template>
  <el-row type="flex" align="middle">

    <el-col :span="12">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="12" style="align-items: center;">
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: center; font-size: 20px;">
          <setting />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Person Info</el-dropdown-item>
            <el-dropdown-item>Exit</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>

  </el-row>
</template>
  
<script setup lang="ts">
import { Setting } from '@element-plus/icons-vue'
</script>
  
<style scoped>
.el-row {
  height: 100%;
}
</style>