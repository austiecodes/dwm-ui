<script setup lang="ts">
import { ElDivider } from 'element-plus';
import { h, ref } from 'vue'
import Apply from './Apply.vue';
import WaitList from './WaitList.vue';

const gpuColors = [
    { color: '#f56c6c', percentage: 100 },
    { color: '#e6a23c', percentage: 80 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 40 },
    { color: '#6f7ad3', percentage: 20 },
]

defineProps<{
    index: Number
}>()


const spacer = h(ElDivider, { direction: 'vertical' })

</script>

<template>
    <el-card class="box-card">


        <template #header>
            <div class="card-header">
                <span>GPU {{ index }}</span>
                <Apply />
            </div>
        </template>

        <!-- 
        <el-space wrap :size="14">
            <el-progress type="dashboard" :percentage="80" :color="gpuColors">
                <template #default="{ percentage }">
                    <span class="percentage-value">Memory: {{ percentage }}%</span>
                </template>
            </el-progress>

            <el-progress type="dashboard" :percentage="50" :color="gpuColors">
                <template #default="{ percentage }">
                    <span class="percentage-value">Usage: {{ percentage }}%</span>
                </template>
            </el-progress>

            <el-progress type="dashboard" :percentage="80">
                <template #default="{ percentage }">
                    <span class="percentage-value">Progress: {{ percentage }}%</span>
                </template>
            </el-progress>

            <div>
                    <p>用户：1235678</p>
                    <p>剩余时间：7h31m</p>
                    <el-button type="warning">End Early</el-button>
            </div>
        </el-space> -->
        <el-row>
            <el-col :span="8">
                <el-progress type="dashboard" :percentage="80" :color="gpuColors">
                    <template #default="{ percentage }">
                        <span class="percentage-value">显存占用 {{ percentage }}%</span>
                    </template>
                </el-progress>
            </el-col>

            <el-col :span="8">
                <el-progress type="dashboard" :percentage="50" :color="gpuColors">
                    <template #default="{ percentage }">
                        <span class="percentage-value">性能占用 {{ percentage }}%</span>
                    </template>
                </el-progress>
            </el-col>

            <el-col :span="8">
                <el-progress type="dashboard" :percentage="80">
                    <template #default="{ percentage }">
                        <span class="percentage-value">任务进度 {{ percentage }}%</span>
                    </template>
                </el-progress>
            </el-col>


            <!-- <div>
                    <p><strong>用户：</strong>1235678</p>
                    <p><strong>活动：</strong>做实验 debug</p>
                    <p><strong>剩余时间：</strong>7h31m</p>
                    <el-button type="warning">Terminate Mission</el-button>
                </div> -->
        </el-row>
        <el-row>
            <el-descriptions title="正在进行" direction="veritical" :column="3" border >
                <template #extra></template>
                <el-descriptions-item label="用户">meihuanyuyu</el-descriptions-item>
                <el-descriptions-item label="活动">Experiment</el-descriptions-item>
                <el-descriptions-item label="剩余时间">7h30min</el-descriptions-item>
        </el-descriptions>
        </el-row>

        <el-row>
            <WaitList/>
        </el-row>
    </el-card>

</template>

<style>
.box-card {
    margin: auto;
    min-width: 580px;
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

button {
    margin-right: 0px;
}
</style>