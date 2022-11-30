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
        <el-icon style="margin-right: 8px; margin-top: center; font-size: 35px;">
          <setting />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="personalInfoVisible=true">Person Info</el-dropdown-item>
            <el-dropdown-item>Exit</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>



  <el-dialog v-model="personalInfoVisible" title="Personal Infomation" width="30%" destroy-on-close center>
    <el-form :model="personalInfo" label-width="80px">
      <el-form-item label="Name">
        <el-input v-model="personalInfo.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="personalInfo.email" clearable></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
            <span class="dialog-footer">
                <el-button @click="personalInfoVisible = false">Cancel</el-button>
                <el-button type="primary" @click="personalInfoVisible = false">
                    Confirm
                </el-button>
            </span>
        </template>
  </el-dialog>
</template>
  
<script setup lang="ts">
import { Setting} from '@element-plus/icons-vue'
import {ref, reactive} from 'vue'

const personalInfoVisible = ref(false)

const personalInfo = reactive({
  name:'',
  email: '',
})
</script>
  
<style scoped>
.el-row {
  height: 100%;
}
</style>