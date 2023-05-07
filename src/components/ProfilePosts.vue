<script setup>
import { ref, reactive } from 'vue';
import { where, getDocs } from 'firebase/firestore';
import { firebaseAuthentication, collection, firebaseFireStore, query } from "../firebase/database";
import { onAuthStateChanged } from 'firebase/auth';
  
const user = ref(null)
const uploadedData = reactive([]);

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

        dataSnap.forEach(doc => {
            uploadedData.value = doc.id, '=>', doc.data();
            console.log(doc.id, '=>', doc.data().uploaded, doc.data().female);
        })

    } catch (err) {
        console.log(err);
    }
}


</script>

<template>

    <el-col :span="24">
        <el-table :data="uploadedData">
            <el-table-column fixed prop="uploaded" label="Date" />
            <el-table-column fixed="right" label="Actions">
                <template #default>
                    <el-button class="btnStandard" type="primary">Edit</el-button>
                    <el-button class="btnStandard" type="primary">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button class="btnStandard" type="primary" @click="fetch">{{ user }}</el-button>
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