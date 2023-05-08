<script setup>
import { ref, computed, watch, reactive } from "vue";
import { collection, firebaseFireStore, where, query } from "@/firebase/database";
import { getDocs } from "firebase/firestore";

const options = [
{
    label: 'Heart Condition',
    options:[
        {
            value: 'ledv',
            label: 'Left Ventricular End Diastolic Volume',
        },
        {
            value: 'redv',
            label: 'Right Ventricular End Diastolic Volume',
        },
        {
            value: 'lesv',
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
            label: 'Fibrosis / Scarring',
        },
    ]
},

{
    label: 'Mutation',
    options: [

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
    ]
},

{
    label: 'Patient Information',
    options: [

        {
            value: 'female',
            label: 'Sex',
        },
        {
            value: 'AgeatMRI', 
            label: 'Age at MRI', 
        },
        {
            value: 'ApicalHCM',
            label: 'Apical HCM', 
        },
        {
            value: 'SuddenCardiacDeath',
            label: 'Sudden Cardiac Death',
        },
        {
            value: 'hypertension',
            label: 'Hypertension',
        },
        {
            value: 'Myectomy',
            label: 'Myectomy',
        },
        {
            value: 'diabetes',
            label: 'Diabetes'
        }
    ]
},

]
const option1 = ref("");
const option2 = ref("");
    

function setOption1(event) {
    option1.value = event.target.value;
}

function setOption2(event) {
    option2.value = event.target.value;
}

const test = computed( () => {
    return option1.value + " " + option2.value
})



/* THIS ONE WORKS
async function fetch() {
    const querySnap = await getDocs(query(collection(firebaseFireStore,'HCMData')));

    querySnap.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    })
}
*/

async function fetch() {
    try {
        const hcmDataRef = query(collection(firebaseFireStore,'HCMData')) //, where('uploaded', '==', 20230401))
        //const yAxis = await where(hcmDataRef, 'ledv', '==', true).get();
        const dataSnap = await getDocs(hcmDataRef);
        
        if (dataSnap.empty){
            console.log('fail');
            return;
        }

        dataSnap.forEach(doc => {
            //uploadedData.values = (doc.data().lesv);
            console.log(doc.id, '=>', doc.data().lesv, doc.data().AgeatMRI);
        })

    } catch (err) {
        console.log(err);
    }
}

/*
const yAxis =  await where(hcmDataRef, option1.value, '==', true).get();

function queryDatabase() {
    const xAxis = hcmDataRef.where(option2.value, '==', true).get();
}


async function fetch(){
    try {
        const db = firebaseFireStore()
        const myAuthLevel = (firebaseFireStore.auth().currentUser != null) ? await (await db.collection('users').doc(firebaseFireStore.auth().currentUser.uid).get()).data().authLevel : 0
        console.log(myAuthLevel)
        const courses = await db.collection("courses").where(myAuthLevel, '>=', 'authLevel').get()// orderBy('createdAt').get()
        console.log(courses)
    } catch (err) {
        console.log(err);
    }
}

/*
const hcmDataRef = collection(firebaseFireStore,"Temp_HCMData");

const yAxis = await hcmDataRef.where(option1.value, '==', true).get();
const xAxis = await hcmDataRef.where(option2.value, '==', true).get();
*/

</script>

<template>

    
    <el-form id="queryData">
        <el-row>
            <el-form-item label="Option 1">
                <el-select
                    @input="setOption1"
                    v-model="option1"
                    placeholder="Select first data set"
                    style="width: 260px"
                >
                <el-option-group
                    v-for="group in options"
                    :key="group.label"
                    :label="group.label"
                >
                    <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled"
                    />
                </el-option-group>
                </el-select>
            </el-form-item>
            <el-form-item label="Option 2">
                <el-select
                    @input="setOption2"
                    v-model="option2"
                    placeholder="Select second data set"
                    style="width: 260px"
                >
                <el-option-group
                    v-for="group in options"
                    :key="group.label"
                    :label="group.label"
                >
                    <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled"
                    />
                </el-option-group>
                </el-select>
            </el-form-item>
        </el-row>

        <el-button 
            class="btnStandard" 
            type="primary" 
            @click="fetch"
        >
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