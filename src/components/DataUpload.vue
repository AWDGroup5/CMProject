<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

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
    const rvmass = ref("");
    const lsv = ref("");
    const rsv = ref("");
    const scar = ref(false);
    const ApicalHCM = ref(false);
    const SuddenCardiacDeath = ref(false);
    const hypertension = ref(false);
    const Myectomy = ref(false);

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();

    const dateToday = ref(year + month + date);

    const router = useRouter();

    function addData() {
    emit("add-data", slug.value, title.value, age.value, content.value, tags.value);

    router.push("/");
    }

</script>

<template>
    <el-form label-width="150px"  @submit.prever>
        <div style="margin: auto; text-align: center" >
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
                <el-form-item label="rvmass">
                    <el-input 
                        type="number" 
                        v-model="rvmass"
                        placeholder="Right Ventricular Mass"
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