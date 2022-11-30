<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Plus } from '@element-plus/icons-vue';
import ContainerCard from './ContainerCard.vue';


defineProps<{
    containerNumber: number
}>()

const containers = [ 
    {
        index: 1,
        name: 'axiba2333',
        image: 'kooriookami',
        command: 'npm run serve',
        port: '8080:8080'
    },

]

const createContainerVisible = ref(false)

const containerApply = reactive({
    name: '',
    image: '',
    command: '',
    port: '',
})

const fullscreenLoading = ref(false)

const openFullScreen = () => {
    fullscreenLoading.value = true
    setTimeout(() => {
        fullscreenLoading.value = false
    }, 2000)
}

const createContainer = () => {
    containers.push({
        index: containers.length + 1,
        name: containerApply.name,
        image: '222333',
        command: containerApply.command,
        port: containerApply.port
    })
    createContainerVisible.value = false

    containerApply.name = ''
    containerApply.image = ''
    containerApply.command = ''
    containerApply.port = ''

}



</script>



<template>

    <h1>My Containers</h1>
    <div v-if="containerNumber == 0">
        <el-empty description="No Containers">

        </el-empty>
    </div>
    <div v-else>
        <el-space wrap>
            <div v-for="container in containers">
                <ContainerCard :index="container.index" :name="container.name"/>
            </div>
        </el-space>
    </div>

    <el-row display="flex" justify="center">
        <el-button margin-top="8px" type="primary" @click="createContainerVisible = true" :icon="Plus">Create A Container</el-button>
    </el-row>
    


    <el-dialog v-model="createContainerVisible" title="Apply for GPU" width="35%" destroy-on-close center>
        <el-form :model="containerApply" label-width="100px">
            <el-form-item label="Container Alias">
                <el-input v-model="containerApply.name" />
            </el-form-item>
            <el-form-item label="Image">
                <el-select v-model="containerApply.image" placeholder="please select image">
                    <el-option label="image 1" value="one" />
                    <el-option label="image 2" value="two" />
                </el-select>
            </el-form-item>
            <el-form-item label="Command">
                <el-input v-model="containerApply.command" placeholder="托管指令" />
            </el-form-item>
            <el-form-item label="Port Mapping">
                <el-input v-model="containerApply.port" placeholder="如果填写多个端口请用 ｜ 隔开" />
            </el-form-item>
        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="createContainerVisible = false">Cancel</el-button>
                <el-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="openFullScreen(); createContainer()">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>

</template>
