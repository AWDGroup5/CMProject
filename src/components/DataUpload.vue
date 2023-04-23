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
        
        <div style="margin: auto; text-align: left" >
            <p>Heart Conditions</p>
        </div>
        
        <el-row>
            <el-col :span="12">
                <el-form-item label="LEDV">
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
                <el-form-item label="REDV">
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
                <el-form-item label="LESV">
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
                <el-form-item label="RESV">
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
                <el-form-item label="LVEF">
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
                <el-form-item label="RVEF">
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
                <el-form-item label="LVMASS">
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
                <el-form-item label="RVMASS">
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
                <el-form-item label="LSV">
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
                <el-form-item label="RSV">
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
        
        <div style="margin: auto; text-align: left" >
            <p>Patient Information</p>
        </div>

        <el-form-item label="Age at MRI">
            <el-input 
                type="number" 
                v-model="age"
                required
                style="width: 50px;"
            >
            </el-input>
        </el-form-item>

        <el-form-item label="Gender">
            <el-select
                v-model="gender"
                placeholder="Select a gender"
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

        <el-form-item label="Diabetes">
            <el-select
                v-model="diabetes"
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
                        v-model="hcm"
                    />
                </el-form-item>
            </el-col>

            <el-col :span="12">
                <el-form-item label="Sudden Cardiac Death">
                    <el-checkbox 
                        v-model="scd"
                    />
                </el-form-item>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="12">
                <el-form-item label="Hypertension">
                    <el-checkbox 
                        v-model="hyp"
                    />
                </el-form-item>
            </el-col>

            <el-col :span="12">
                <el-form-item label="Myectomy">
                    <el-checkbox 
                        v-model="mye"
                    />
                </el-form-item>
            </el-col>
        </el-row>

        <el-form-item>
            <el-button type="success" @click="addData">Add Data</el-button>
            <RouterLink :to="{ name: 'PostList' }"
            ><el-button>Cancel</el-button>
            </RouterLink>
        </el-form-item>
    </el-form>
</template>

<style>

</style>