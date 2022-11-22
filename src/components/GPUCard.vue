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
                <Apply/>
            </div>
        </template>

        <el-row>
            <el-col :span="12">
                <el-space :size="ref(10)" :spacer="spacer">
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
                </el-space>
                <!-- <el-progress type="dashboard" :percentage="80" :color="colors">Memory</el-progress>
                <el-progress type="dashboard" :percentage="80" :color="colors">Usage</el-progress> -->
            </el-col>

            <el-col :span="12">
                <el-spacer :size="ref(10)" :spacer="spacer">
                    <div>
                        <div>
                            <el-row>
                                <el-col :span="20">
                                    <h1> Ongoing </h1>
                                </el-col>
                                <el-col :span="4">
                                    <el-button>End Early</el-button>
                                </el-col>
                            </el-row>
                        </div>

                        <p>User: Tom Assignment: xxxx Time Left: xxx hours</p>
                    </div>

                </el-spacer>

            </el-col>
        </el-row>

        <el-row>
            <WaitList />
        </el-row>

    </el-card>
</template>

<style>
.box-card {
    width: 100%;
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

button {
    margin-right: 0px;
}
</style>