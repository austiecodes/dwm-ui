<template>

    <el-table :data="tableData" stripe class="waitlist" >
        <el-table-column prop="date" label="Time To Start" min-width="100px"/>
        <el-table-column prop="name" label="User"/>
        <el-table-column prop="assignment" label="Assignment"/>
        <el-table-column prop="duration" label="Duration"/>
    </el-table>


</template>

<script lang="ts" setup>
const tableData = [
    {
        date: '2016-05-01 17:33',
        name: 'Tom',
        assignment: 'xxxx',
        duration: '24'

    },

]
</script>

<style>
.waitlist {
    width: 100%;
    height: 100%;
    margin-top: 0;
}
</style>
