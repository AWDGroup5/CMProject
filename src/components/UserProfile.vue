<script setup>
import { ref, watch } from "vue";
import { firebaseFireStore, doc, getDoc } from "@/firebase/database";
import { firebaseAuthentication, collection, where, query } from '@/firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const user = ref(null)

onAuthStateChanged(firebaseAuthentication, (currentUser) => {
if (currentUser) {
    user.value = currentUser.displayName;
} else {
    user.value == null;
}
});

/*
defineProps ({
    user: {
        type: Object,
        default: () => {}
    }
})
const userRef = doc(firebaseFireStore,"users", "A6sLxD93MyfT54tcgyeU")
const userSnap = await getDoc(userRef)

if(userSnap,exists()) {
    user.value = userSnap.data().displayName;
} else {
    user.value == null;
    console.log(firebaseError)
}
*/

const displayName = ref("");
const email = ref("");
const password = ref("");
const phone = ref("");
const institute = ref("");
const address1 = ref("");
const address2 = ref("");
const address3 = ref("");
const postCode = ref("")
const confirmPassword = ref("");

const errorProfile = ref("");

watch(confirmPassword, () => {
  if(
    password.value !== "" &&
    confirmPassword.value !== "" &&
    password.value !== confirmPassword.value
  ) {
    errorProfile.value = "The passwords do not match";
  } else {
    errorProfile.value = null;
  }
})

/*
getAuth().updateCurrentUser(uid, {
    displayName: displayName.value,
    email: email.value,
    password: password.value
})
*/
</script>

<template>
    <el-form class="register" @submit.prevent>

        <h2>{{ user }}</h2>
    
        <el-divider />

        <div v-if="errorProfile">
            <el-button plain type="danger" disabled icon="el-icon-error">
                {{ errorProfile }}
            </el-button>
        </div>
        
        <el-row>
            <el-col :span="12">
                <el-form-item label="Name"
                :rules="[
                    { required: true, message: 'Name is required'}
                ]">
                    <el-input
                        type="text"
                        autocomplete="off"
                        v-model="displayName"
                    ></el-input>
                </el-form-item>
                
            </el-col>
            <el-col :span="12">

                <el-form-item label="Institution Affiliation"
                :rules="[
                    { required: true, message: 'Institution Affiliation is required'}
                ]">
                <el-input
                    type="text"
                    v-model="institute"
                ></el-input>
                </el-form-item>
            
            </el-col>
        </el-row>
        
        <el-row>
            <el-col :span="12">
                <el-form-item label="Email"
                :rules="[
                    { required: true, message: 'Email is required'}
                ]">
                    <el-input
                        type="email"
                        v-model="email"
                    ></el-input>
                </el-form-item>
            
            </el-col>
            <el-col :span="12">

                <el-form-item label="Phone">
                    <el-input
                        type="tel"
                        v-model="phone"
                    ></el-input>
                </el-form-item>
            
            </el-col>
        </el-row>
        
        <el-row>
            <el-col :span="12">
                <el-form-item label="Password" prop="pass"
                :rules="[
                    { required: true, message: 'Password is required'}
                ]">
                    <el-input
                        type="password"
                        autocomplete="off"
                        show-password
                        v-model="password"
                    ></el-input>
                </el-form-item>
            
            </el-col>
            <el-col :span="12">
                <el-form-item v-if="password" label="Confirm Password" prop="pass"
                :rules="[
                    { required: true, message: 'Confirm the password'}
                ]">
                    <el-input
                        type="password"
                        required
                        autocomplete="off"
                        show-password
                        v-model="confirmPassword"
                    ></el-input>
                </el-form-item>
            
            </el-col>
        </el-row>

        <el-divider />

        <el-form-item label="Address Line 1">
            <el-input
                type="text"
                v-model="address1"
            ></el-input>
        </el-form-item>


        <el-form-item label="Address Line 2">
        <el-input
            type="text"
            v-model="address2"
        ></el-input>
        </el-form-item>

        <el-form-item label="Address Line 3">
        <el-input
            type="text"
            v-model="address3"
        ></el-input>
        </el-form-item>

        <el-form-item label="Postcode">
        <el-input
            type="text"
            v-model="postCode"
        ></el-input>
        </el-form-item>

        <el-divider />

        <el-form-item>
            <el-button class="btnAccount"
                type="primary"
                @click="update"
                >Update
            </el-button>
        </el-form-item>

        <el-divider />
    </el-form>

</template>

<style scoped>
.btnAccount {
    margin: auto;
    width: 50%;
}

</style>