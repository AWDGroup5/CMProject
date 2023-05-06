<script setup>
import { ref } from 'vue';
import { firebaseAuthentication, sendPasswordResetEmail } from "../firebase/database";

const email = ref("");
const errorFirebase = ref(null);

const auth = firebaseAuthentication;

function reset() {
    const deets = {
        email: email.value
    }
sendPasswordResetEmail(auth, deets.email)
    .then(() => {
    })
    .catch((error) => {
        errorFirebase.value = error.message;
    })
}
</script>

<template>
    <el-form label-width="50px" @submit.prevent>
        <h2>Forgotten Password</h2>

        <el-divider />

        <div v-if="errorFirebase">
            <el-button plain type="danger" disabled icon="el-icon-error">
                {{ errorFirebase }}
            </el-button>
        </div>

        <el-form-item label="Email">
            <el-input
                type="email"
                placeholder="email"
                required
                autocomplete="off"
                v-model="email"
            ></el-input>
        </el-form-item>

        <el-divider />

        <div class="loginLink">
        <label>
            <RouterLink to="/">Login</RouterLink>
        </label>

        <label id="noAccount">
            <RouterLink to="/register">Don't have an account? </RouterLink>
        </label>
        </div>

        <el-form-item>
            <el-button class="btnStandard" type="primary" style="margin: auto" @click="reset">
                Reset Password
            </el-button>
        </el-form-item>



    </el-form>

</template>

<style scoped>
</style>