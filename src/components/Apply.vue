<template>
    <el-button type="primary" @click="centerDialogVisible = true">
        Apply This GPU
    </el-button>

    <el-dialog v-model="centerDialogVisible" title="Apply for GPU" width="30%" destroy-on-close center>
        <div>
            <el-form :model="form" label-width="100px">
                <el-form-item label="Activity">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="Container">
                    <el-select v-model="form.containers" placeholder="please select your zone">
                        <el-option label="container one" value="one" />
                        <el-option label="container two" value="two" />
                    </el-select>
                </el-form-item>

                <el-form-item label="Time">
                    <el-input v-model="form.duration" />
                </el-form-item>

                <el-form-item label="Command">
                    <el-input v-model="form.command" />
                </el-form-item>
            </el-form>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const centerDialogVisible = ref(false)

const form = reactive({
    name: '',
    containers: '',
    duration:'',
    command:'',
})

const onSubmit = () => {
    console.log('submit!')
}
</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>