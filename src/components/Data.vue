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
            value: 'MYBPC3mutation',
            label: 'MYBPC3',
        },
        {
            value: 'TNNT2mutation',
            label: 'TNNT2',
        },
        {
            value: 'ACTCmutation',
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
const option1Data = ref("");
const option2Data = ref("");
const chartData = ref("");
        
const hcmDataRef = query(collection(firebaseFireStore,'HCMData')) //, where('uploaded', '==', 20230401)) 
const dataSnap = await getDocs(hcmDataRef);

function setOption1(event) {
    option1.value = event.target.value;
}

function setOption2(event) {
    try {
        option2.value = event.target.value;
        option2Data.value = dataSnap.docs.map(doc => doc.data().lvmass);
        console.log(option2.value + option2Data)
    }
    catch {
        console.log('Fail')
    }
    
}

const test = computed( () => {
    return option1.value + " " + option2.value
})

const chartOptions = ref({
    chart: {
        type: "line",
        id: "dataChart"
    },
    xaxis: {
        categories: [1,2,3,4,5,6,10,20,30,50,100,200,300,500]
    },
    title: {
        text: option1.value,
        align: 'left',
        offsetY: 0,
        style: {
            fontSize: 17,
            fontWeight: 'bold'
        }
    }
});

const series = ref([
    {
        name: option2.value,
        data: option2Data.value
    }
])



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
        //const yAxis = await where(hcmDataRef, 'ledv', '==', true).get();
        
        if (dataSnap.empty){
            console.log('fail');
            return;
        } else {
            const searchResults = dataSnap.docs.map(doc => doc.data().$option1);
            chartData.value = searchResults
            console.log(searchResults)
            return searchResults
        }

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
                Chart Data
        </el-button>
    </el-form>

    <el-divider />

    <el-col :span="24">
        <div v-if="option1 && option2" id="dataChart"> 
            <apexchart
                :options="chartOptions"
                :series="series"
                height="400"
            ></apexchart>
        
            <el-divider />
        </div>
    </el-col>
    

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