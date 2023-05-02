<script setup>
import { ref } from "vue";
const options = [
{
    value: 'heartCondition', 
    label: '---------- Heart Condition ----------', 
    disabled: true
},

{
    value: 'ledv',
    label: 'Left Ventricular End Diastolic Volume',
},
{
    value: 'redv',
    label: 'Right Ventricular End Diastolic Volume',
},
{
    value: 'lsev',
    label: 'Left Ventricular End Systolic Volume',
},
{
    value: 'resv',
    label: 'Right Ventricular End Systolic Volume',
},
{
    value: 'lvef',
    label: 'Left Ventricular Ejection Fraction',
},
{
    value: 'rvef',
    label: 'Right Ventricular Ejection Fraction',
},
{
    value: 'lvmass',
    label: 'Left Ventricular Mass',
},
{
    value: 'rvmass',
    label: 'Right Ventricular Mass',
},
{
    value: 'lsv',
    label: 'Left Systolic Volume',
},
{
    value: 'rsv',
    label: 'Right Systolic Volume',
},
{
    value: 'scar',
    label: 'Fiborsis / Scarring',
},

{
    value: 'mutation', 
    label: '-------------- Mutation -------------', 
    disabled: true
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
    value: 'patient', 
    label: '-------- Patient Information --------', 
    disabled: true
},

{
    value: 'Male',
    label: 'Male',
},
{
    value: 'Female',
    label: 'Female',
},
{
    value: 'age', 
    label: 'Age at MRI', 
},
{
    value: 'hcm',
    label: 'Apical HCM', 
},
{
    value: 'scd',
    label: 'Sudden Cardiac Death',
},
{
    value: 'hyp',
    label: 'Hypertension',
},
{
    value: 'mye',
    label: 'Myectomy',
},



{
    value: 'diabetes', 
    label: '-------------- Diabetes -------------', 
    disabled: true
},

{
    value: 'None', 
    label: 'No Diabetes', 
},
{
    value: 'IGT',
    label: 'Impaired Glucose Tolerance', 
},
{
    value: 'Type 1',
    label: 'Type 1 Diabetes',
},
{
    value: 'Type 2',
    label: 'Type 2 Diabetes',
},

]
const option1 = ref("");
const option2 = ref("");

</script>

<template>

    
    <el-form id="queryData">
        <el-row>
            <el-form-item label="Option 1">
                <el-select
                    v-model="option1"
                    placeholder="Select first data set"
                    style="width: 260px"
                >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                />
                </el-select>
            </el-form-item>
            <el-form-item label="Option 2">
                <el-select
                    v-model="option2"
                    placeholder="Select second data set"
                    style="width: 260px"
                >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                />
                </el-select>
            </el-form-item>
        </el-row>

        <el-button class="btnStandard" type="primary">
            Display Data
        </el-button>
    </el-form>

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

    #queryData {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 10px;
        padding: 10px;
    }

</style>