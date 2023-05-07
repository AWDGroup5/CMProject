<script setup>
import { ref, watch } from "vue";
import { firebaseFireStore, doc, getDoc } from "@/firebase/database";
import { firebaseAuthentication, collection, where, query } from '@/firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const user = ref(null)

onAuthStateChanged(firebaseAuthentication, (currentUser) => {
if (currentUser) {
    user.value = currentUser.uid;
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
    
        <el-divider />

        <div v-if="errorProfile">
            <el-button plain type="danger" disabled icon="el-icon-error">
                {{ errorProfile }}
            </el-button>
        </div>

        <el-form-item label="Display Name">
        <el-input
            type="text"
            placeholder="Display Name"
            required
            autocomplete="off"
            v-model="displayName"
        ></el-input>
        </el-form-item>

        <el-form-item label="Email">
            <el-input
                type="email"
                required
                placeholder="Placeholder"
                autocomplete="off"
                v-model="email"
            ></el-input>
        </el-form-item>

        <el-form-item label="Password" prop="pass">
            <el-input
                type="password"
                required
                autocomplete="off"
                show-passwod
                v-model="password"
            ></el-input>
        </el-form-item>

        <el-form-item label="Confirm Password" prop="pass">
        <el-input
            type="password"
            placeholder="confirm password"
            required
            autocomplete="off"
            show-passwod
            v-model="confirmPassword"
        ></el-input>
        </el-form-item>

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