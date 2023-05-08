<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuthentication, firebaseFireStore } from "../firebase/database";
import { collection, addDoc } from "firebase/firestore";
  
const user = ref(null)
const errorUpload = ref("");

onAuthStateChanged(firebaseAuthentication, (currentUser) => {
if (currentUser) {
    user.value = currentUser.uid;
} else {
    user.value == null;
}
});

let emit = defineEmits(["add-data"])
defineProps({
posts: {
    type: Array,
    default: () => [],
},
})

const genders = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    },
];
const mutations = [
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
];
const diabetesType = [
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
const mutation = ref([]);
const Diabetes = ref([]);
const sex = ref([]);
const AgeatMRI = ref("");
const ledv = ref("");
const redv = ref("");
const lesv = ref("");
const resv = ref("");
const lvef = ref("");
const rvef = ref("");
const lvmass = ref("");
const lsv = ref("");
const rsv = ref("");
const scar = ref(false);
const ApicalHCM = ref(false);
const SuddenCardiacDeath = ref(false);
const hypertension = ref(false);
const Myectomy = ref(false);
const MYH7 = ref("");
const MYBPC3mutation = ref("");
const TNNT2mutation = ref("");
const ACTCmutation = ref("");
const TPM1 = ref("");
const LAMP2 = ref("");
const TNNCI = ref("");
const TNNI3 = ref("");
const MYL2 = ref("");
const TTN = ref("");

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

const uploadDate = ref(year + month + date);

const dataRef = collection(firebaseFireStore, 'HCMData');

const router = useRouter();

function addData() {

    if(scar.value = false){
        scar.value = 0
    } else {
        scar.value = 1
    }

    if(ApicalHCM.value = false){
        ApicalHCM.value = 0
    } else {
        ApicalHCM.value = 1
    }

    if(SuddenCardiacDeath.value = false){
        SuddenCardiacDeath.value = 0
    } else {
        SuddenCardiacDeath.value = 1
    }

    if(Myectomy.value = false){
        Myectomy.value = 0
    } else {
        Myectomy.value = 1
    }

    if(sex.value = "Male"){
        sex.value = 0
    } else {
        sex.value = 1
    }

    if(mutation.value = "MYH7"){
        MYH7.value = 1, MYBPC3mutation.value = 0, TNNT2mutation.value = 0, ACTCmutation.value = 0, TPM1.value = 0, LAMP2.value = 0, TNNCI.value = 0, TNNI3.value = 0, MYL2.value = 0, TTN.value = 0
    } else if (mutation.value = "MYBPC3"){
        MYH7.value = 0, MYBPC3mutation.value = 1, TNNT2mutation.value = 0, ACTCmutation.value = 0, TPM1.value = 0, LAMP2.value = 0, TNNCI.value = 0, TNNI3.value = 0, MYL2.value = 0, TTN.value = 0
    } else if (mutation.value = "TNNT2"){
        MYH7.value = 0, MYBPC3mutation.value = 0, TNNT2mutation.value = 1, ACTCmutation.value = 0, TPM1.value = 0, LAMP2.value = 0, TNNCI.value = 0, TNNI3.value = 0, MYL2.value = 0, TTN.value = 0
    } else if (mutation.value = "ACTC"){
        MYH7.value = 0, MYBPC3mutation.value = 0, TNNT2mutation.value = 0, ACTCmutation.value = 1, TPM1.value = 0, LAMP2.value = 0, TNNCI.value = 0, TNNI3.value = 0, MYL2.value = 0, TTN.value = 0
    } else if (mutation.value = "TPM1"){
        MYH7.value = 0, MYBPC3mutation.value = 0, TNNT2mutation.value = 0, ACTCmutation.value = 0, TPM1.value = 1, LAMP2.value = 0, TNNCI.value = 0, TNNI3.value = 0, MYL2.value = 0, TTN.value = 0
    } else if (mutation.value = "LAMP2"){
        MYH7.value = 0, MYBPC3mutation.value = 0, TNNT2mutation.value = 0, ACTCmutation.value = 0, TPM1.value = 0, LAMP2.value = 1, TNNCI.value = 0, TNNI3.value = 0, MYL2.value = 0, TTN.value = 0
    } else if (mutation.value = "TNNCI"){
        MYH7.value = 0, MYBPC3mutation.value = 0, TNNT2mutation.value = 0, ACTCmutation.value = 0, TPM1.value = 0, LAMP2.value = 0, TNNCI.value = 1, TNNI3.value = 0, MYL2.value = 0, TTN.value = 0
    } else if (mutation.value = "TNNI3"){
        MYH7.value = 0, MYBPC3mutation.value = 0, TNNT2mutation.value = 0, ACTCmutation.value = 0, TPM1.value = 0, LAMP2.value = 0, TNNCI.value = 0, TNNI3.value = 1, MYL2.value = 0, TTN.value = 0
    } else if (mutation.value = "MYL2"){
        MYH7.value = 0, MYBPC3mutation.value = 0, TNNT2mutation.value = 0, ACTCmutation.value = 0, TPM1.value = 0, LAMP2.value = 0, TNNCI.value = 0, TNNI3.value = 0, MYL2.value = 1, TTN.value = 0
    } else {
        MYH7.value = 0, MYBPC3mutation.value = 0, TNNT2mutation.value = 0, ACTCmutation.value = 0, TPM1.value = 0, LAMP2.value = 0, TNNCI.value = 0, TNNI3.value = 0, MYL2.value = 0, TTN.value = 1
    }


    const dataInfo = {
        uploaded: uploadDate.value,
        userID: user.value,
        ledv: ledv.value,
        redv: redv.value,
        lesv: lesv.value,
        resv: resv.value,
        lvef: lvef.value,
        rvef: rvef.value,
        lvmass: lvmass.value,
        lsv: lsv.value,
        rsv: rsv.value,
        scar: scar.value,
        ApicalHCM: ApicalHCM.value,
        SuddenCardiacDeath: SuddenCardiacDeath.value,
        hypertension: hypertension.value,
        Myectomy: Myectomy.value,
        female: sex.value,
        AgeatMRI: AgeatMRI.value,
        Diabetes: Diabetes.value,
    };

    if (!errorUpload.value) {
        addDoc(dataRef, dataInfo)
            .then(docRef => {
                console.log(docRef.id + ": Document has been successfully added");
            })
            .then(() => {
                router.push("/data")
            })
            .catch(error => {
                console.log(error);
            })

        .catch((error) => {
            errorUpload.value = error.message;
        }
        )
    }
}

</script>

<template>
    <el-form label-width="150px"  @submit.prever>
        <div style="text-align: center" >
            <h2>Add Data</h2>

        </div>
        
        <el-divider />
        
        <div style="margin: auto; text-align: left" >
            <p>Heart Conditions</p>
        </div>
        
        <el-row>
            <el-col :span="12">
                <el-form-item label="ledv">
                    <el-input 
                        type="number" 
                        v-model="ledv"
                        placeholder="Left Ventricular End Diastolic Volume"
                        style="width: 260px;"
                    >
                    </el-input>
                </el-form-item>
            </el-col>

            <el-col :span="12">
                <el-form-item label="redv">
                    <el-input 
                        type="number" 
                        v-model="redv"
                        placeholder="Right Ventricular End Diastolic Volume"
                        style="width: 260px;"
                    >
                    </el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <el-form-item label="lesv">
                    <el-input 
                        type="number" 
                        v-model="lesv"
                        placeholder="Left Ventricular End Systolic Volume"
                        style="width: 260px;"
                    >
                    </el-input>
                </el-form-item>
            </el-col>

            <el-col :span="12">
                <el-form-item label="resv">
                    <el-input 
                        type="number" 
                        v-model="resv"
                        placeholder="Right Ventricular End Systolic Volume"
                        style="width: 260px;"
                    >
                    </el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <el-form-item label="lvef">
                    <el-input 
                        type="number" 
                        v-model="lvef"
                        placeholder="Left Ventricular Ejection Fraction"
                        style="width: 260px;"
                    >
                    </el-input>
                </el-form-item>
            </el-col>   

            <el-col :span="12">
                <el-form-item label="rvef">
                    <el-input 
                        type="number" 
                        v-model="rvef"
                        placeholder="Right Ventricular Ejection Fraction"
                        style="width: 260px;"
                    >
                    </el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <el-form-item label="lsv">
                    <el-input 
                        type="number" 
                        v-model="lsv"
                        placeholder="Left Systolic Volume"
                        style="width: 260px;"
                    >
                    </el-input>
                </el-form-item>
            </el-col>

            <el-col :span="12">
                <el-form-item label="rsv">
                    <el-input 
                        type="number" 
                        v-model="rsv"
                        placeholder="Right Systolic Volume"
                        style="width: 260px;"
                    >
                    </el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <el-form-item label="lvmass">
                    <el-input 
                        type="number" 
                        v-model="lvmass"
                        placeholder="Left Ventricular Mass"
                        style="width: 260px;"
                    >
                    </el-input>
                </el-form-item>
            </el-col>

            <el-col :span="12">
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
            </el-col>
        </el-row>

        <el-form-item label="Fiborsis / Scarring">
            <el-checkbox 
                v-model="scar"
            />
        </el-form-item>

        <el-divider />
        
        <div style="margin: auto; text-align: left" >
            <p>Patient Information</p>
        </div>

        <el-row>
            <el-col :span="12">
                <el-form-item label="Age at MRI">
                    <el-input 
                        type="number" 
                        v-model="AgeatMRI"
                        required
                        style="width: 50px;"
                    >
                    </el-input>
                </el-form-item>
            </el-col>

            <el-col :span="12">
                <el-form-item label="Sex">
                    <el-select
                        v-model="sex"
                        placeholder="Select a sex"
                        required
                        style="width: 260px"
                    >
                    <el-option
                        v-for="item in genders"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>

        <el-form-item label="Diabetes">
            <el-select
                v-model="Diabetes"
                placeholder="Select an option"
                required
                style="width: 260px"
            >
            <el-option
                v-for="item in diabetesType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
            </el-select>
        </el-form-item>

        <el-row>
            <el-col :span="12">
                <el-form-item label="Apical HCM">
                    <el-checkbox 
                        v-model="ApicalHCM"
                    />
                </el-form-item>
            </el-col>

            <el-col :span="12">
                <el-form-item label="Sudden Cardiac Death">
                    <el-checkbox 
                        v-model="SuddenCardiacDeath"
                    />
                </el-form-item>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <el-form-item label="Hypertension">
                    <el-checkbox 
                        v-model="hypertension"
                    />
                </el-form-item>
            </el-col>

            <el-col :span="12">
                <el-form-item label="Myectomy">
                    <el-checkbox 
                        v-model="Myectomy"
                    />
                </el-form-item>
            </el-col>
        </el-row>

        <el-divider />

        <el-form-item>
            <el-button class="btnStandard"  type="primary" @click="addData">Add Data</el-button>
            <RouterLink :to="{ name: 'Data' }"
            >
            </RouterLink>
        </el-form-item>
    </el-form>
</template>

<style>

</style>