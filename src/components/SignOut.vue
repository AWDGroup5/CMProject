<script setup>
import { ref } from "vue";
import { firebaseAuthentication } from "../firebase/database";
import { useRouter, RouterLink, RouterView } from "vue-router";
import { onAuthStateChanged, signOut } from 'firebase/auth';

const router = useRouter();
  
const user = ref(null)

onAuthStateChanged(firebaseAuthentication, (currentUser) => {
if (currentUser) {
    user.value = currentUser.uid;
} else {
    user.value == null;
}
});

function cancel() {
    router.go(-1);
}

function logout() {
    signOut(firebaseAuthentication).then(
        () => {
            user.value = null;
            router.push("/");
        },
        (error) => {
            errorLogout.value = error.message;
        }
    );
}

</script>

<template>
    <h2>Log out?</h2>

    <el-divider/>

    <div class="loginLink">
        <div class="signOut">
            <el-button class="btnStandard" type="primary" @click="logout">
                Logout
            </el-button>
        </div>

        <div class="cancel">
            <el-button class="btnStandard" type="danger" @click="cancel">
                Cancel
            </el-button>
        </div>

    </div>

</template>

<style scoped>
</style>