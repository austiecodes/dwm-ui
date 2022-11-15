<template>
    <el-menu :default-openeds="['0']" class="menu" height=100vh>
        <el-sub-menu index="0">

        <template #title>
            <el-icon><Histogram /></el-icon>
            GPU Management
        </template>

        <el-menu-item index="0-1">GPU Status</el-menu-item>
        <el-menu-item index="0-2">Assignments</el-menu-item>
        <el-menu-item index="0-3">History</el-menu-item>

        </el-sub-menu>

        <el-menu-item index="1-1">
            <el-icon><Setting /></el-icon>
            Docker Management
        </el-menu-item>
        <el-menu-item index="1-2">
            <el-icon><User /></el-icon>
            Myself
        </el-menu-item>

    </el-menu>
</template>

<script lang="ts" setup>
  import {
    Menu as IconMenu,
    Histogram,
    Setting,
User,
  } from "@element-plus/icons-vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
    .menu{
        padding: 20px 20px;
        margin: 10px 10px;
    }

</style>