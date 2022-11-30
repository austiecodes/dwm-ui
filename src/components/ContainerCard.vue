<script setup lang="ts">
import { ref } from 'vue'

import { Delete, SwitchButton, Warning } from '@element-plus/icons-vue';

const active = ref(false)

defineProps<{
    index: Number
    name: String
    image?: String
    command?: String
    port?: String
}>()


</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>{{name}}</span>
                <div>
                    <el-button v-if="active" type="warning" @click="active = !active" :icon="Warning">Stop</el-button>
                    <el-button v-else type="primary" @click="active = !active" :icon="SwitchButton">Start</el-button>
                    <el-popconfirm confirm-button-text="Yes" cancel-button-text="No"
                        title="确认删除">
                        <template #reference>
                            <el-button v-if="!active" type="danger" :icon="Delete">Delete</el-button>
                        </template>
                    </el-popconfirm>
                </div>

            </div>
        </template>

        <div>
            <el-descriptions class="margin-top" title="" :column="2" border>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            镜像
                        </div>
                    </template>
                    kooriookami
                </el-descriptions-item>
                <el-descriptions-item >
                    <template #label>
                        <div class="cell-item">
                            状态
                        </div>
                    </template>
                    <div v-if="active">Active</div>
                    <div v-else>Stopped</div>
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            端口
                        </div>
                    </template>
                    22->10009|8888->10010
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            SSH
                        </div>
                    </template>
                    ssh -p 10009 DM18@192.168.100.195
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            Jupyter
                        </div>
                    </template>
                    <el-link>http://192.168.100.195:10010</el-link>
                </el-descriptions-item>
            </el-descriptions>
        </div>
    </el-card>
</template>

<style>
.box-card {
    width: 70%;
    margin: auto;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>