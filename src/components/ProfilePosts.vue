<script setup>
import { ref, reactive, computed } from 'vue';
import { where, getDocs, deleteDoc } from 'firebase/firestore';
import { firebaseAuthentication, collection, firebaseFireStore, query } from "../firebase/database";
import { onAuthStateChanged } from 'firebase/auth';
  
const user = ref(null)
const uploadedData = ref('');

onAuthStateChanged(firebaseAuthentication, (currentUser) => {
if (currentUser) {
    user.value = currentUser.uid;
} else {
    user.value == null;
}
});

async function fetch() {
    try {
        const hcmDataRef = query(collection(firebaseFireStore,'HCMData'), where('userID', '==', user.value))
        const dataSnap = await getDocs(hcmDataRef);
        
        if (dataSnap.empty){
            console.log('No data uploaded');
            return;
        }

        const searchResults = dataSnap.docs.map(doc => doc.data());
        uploadedData.value = searchResults
        console.log(uploadedData)
        return searchResults

        

    } catch (err) {
        console.log(err);
    }
}

async function deleteData(DataID) {
    try {
        const hcmDataRef = query(collection(firebaseFireStore,'HCMData'), where('DataID', '==', DataID))
        const dataSnap = await getDocs(hcmDataRef);

        dataSnap.forEach((doc) => {
            deleteDoc(doc.ref);
        })

        fetch()


    } catch (err) {
        console.log(err);
    }
}


</script>

<template>

    <el-row>
        <el-col v-if="uploadedData" :span="12">
            <h2>Data Uploads</h2>
        </el-col>

        <el-col :span="12">
            <el-button v-if="!uploadedData" class="btnStandard" type="primary" @click="fetch"> Get Uploads </el-button>
        </el-col>
    </el-row>

    <el-divider />

    <el-col v-if="uploadedData" :span="24">
        <el-table :data="uploadedData" highlight-current-row max-height="500">

            <el-table-column fixed="left" prop="uploaded" label="Date" sortable/>

            <el-table-column label="Heart Conditions">
                <el-table-column prop="ledv" label="LEDV" sortable/>
                <el-table-column prop="redv" label="REDV" sortable/>
                <el-table-column prop="lesv" label="LESV" sortable/>
                <el-table-column prop="resv" label="RESV" sortable/>
                <el-table-column prop="lvef" label="LVEF" sortable/>
                <el-table-column prop="rvef" label="RVEF" sortable/>
                <el-table-column prop="lsv" label="LSV" sortable/>
                <el-table-column prop="rsv" label="RSV" sortable/>
                <el-table-column prop="lvmass" label="LVMASS" sortable/>
                <el-table-column prop="rvmass" label="RVMASS" sortable/>
                <el-table-column prop="scar" label="Fibrosis / Scarring" sortable/>
            </el-table-column>

            <el-table-column label="Mutations">
                <el-table-column prop="MYH7" label="MYH7" sortable/>
                <el-table-column prop="MYBPC3mutation" label="MYBPC3" sortable/>
                <el-table-column prop="TNNT2mutation" label="TNNT2" sortable/>
                <el-table-column prop="ACTCmutation" label="ACTC" sortable/>
                <el-table-column prop="TPM1" label="TPM1" sortable/>
                <el-table-column prop="LAMP2" label="LAMP2" sortable/>
                <el-table-column prop="TNNCI" label="TNNCI" sortable/>
                <el-table-column prop="TNNI3" label="TNNI3" sortable/>
                <el-table-column prop="MYL2" label="MYL2" sortable/>
                <el-table-column prop="TTN" label="TTN" sortable/>
                
            </el-table-column>
            <el-table-column label="Patient Information">
                <el-table-column prop="AgeatMRI" label="Age at MRI" sortable/>
                <el-table-column prop="female" label="Sex" sortable/>
                <el-table-column prop="diabetes" label="Diabetes" sortable/>
                <el-table-column prop="ApicalHCM" label="Apical HCM" sortable/>
                <el-table-column prop="SuddenCardiacDeath" label="Sudden Cardiac Death" sortable/>
                <el-table-column prop="hypertension" label="Hypertension" sortable/>
                <el-table-column prop="Myectomy" label="Myectomy" sortable/>
                
            </el-table-column>
            <el-table-column fixed="right" label="Actions">
                <template #default>
                    <el-button type="danger" disabled>Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        
    </el-col>

</template>

<style scoped>

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