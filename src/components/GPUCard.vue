<script setup lang="ts">

const colors = [
    { color: '#f56c6c', percentage: 100 },
    { color: '#e6a23c', percentage: 80 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 40 },
    { color: '#6f7ad3', percentage: 20 },
]

</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>GPU card</span>
            </div>
        </template>
        <el-row align="middle">
            <el-col :span="12">
                <el-progress type="dashboard" percentage="80" :color="colors"></el-progress>
            </el-col>

            <el-col :span="12">
                <el-row>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="12">
                                <span>GPU ID</span>
                            </el-col>
                            <el-col :span="12">
                                <span>GPU ID</span>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="12">
                                <span>GPU ID</span>
                            </el-col>
                            <el-col :span="12">
                                <span>GPU ID</span>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </el-card>
</template>

<style>
.box-card {
    width: 80%;
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