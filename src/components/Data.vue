<script setup>

const options = [
{
    value: 'Male',
    label: 'Male',
},
{
    value: 'Female',
    label: 'Female',
},
{
    value: 'MYH7',
    label: 'MYH7',
},
{
    value: 'MYBPC3',
    label: 'MYBPC3',
},
{
    value: 'TNNT2',
    label: 'TNNT2',
},
{
    value: 'ACTC',
    label: 'ACTC',
},
{
    value: 'TPM1',
    label: 'TPM1',
},
{
    value: 'TNNCI',
    label: 'TNNCI',
},
{
    value: 'TNNI3',
    label: 'TNNI3',
},
{
    value: 'MYL2',
    label: 'MYL2',
},
{
    value: 'TTN',
    label: 'TTN',
},
{
    value: 'None', 
    label: 'None', 
},
{
    value: 'IGT',
    label: 'IGT', 
},
{
    value: 'Type 1',
    label: 'Type 1',
},
{
    value: 'Type 2',
    label: 'Type 2',
},

]
const mutation = ref([]);
const diabetes = ref([]);
const gender = ref([]);
const age = ref("");
const ledv = ref("");
const redv = ref("");
const lesv = ref("");
const resv = ref("");
const lvef = ref("");
const rvef = ref("");
const lvmass = ref("");
const rvmass = ref("");
const lsv = ref("");
const rsv = ref("");
const scar = ref(false);
const hcm = ref(false);
const scd = ref(false);
const hyp = ref(false);
const mye = ref(false);

</script>

<template>

    

    <el-form-item label="Mutation">
                <el-select
                    v-model="mutation"
                    placeholder="Select a mutation"
                    style="width: 260px"
                >
                <el-option
                    v-for="item in mutations"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
                </el-select>
    </el-form-item>

    <el-divider />

    <el-col :span="24">
        <label class="placeholder">
            PLACEHOLDER
        </label>
    </el-col>
    
    <el-divider />

</template>

<style>

    .placeholder {
        background-color: aliceblue;
        color: #B4886B;
        font-weight: bold;
        text-align: center;
        display: block;
        width: 100%;
        height: 300px;
        float: left;
    }

</style>