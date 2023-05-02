<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication, createUserWithEmailAndPassword, updateProfile } from "@/firebase/database";

const firstName = ref("");
const surname = ref("");
const userName = ref("");
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


const router = useRouter();
</script>

<template>
    <el-form class="register" @submit.prevent>
    
        <el-divider class="dividerHeader"/>

        <div v-if="errorProfile">
            <el-button plain type="danger" disabled icon="el-icon-error">
                {{ errorProfile }}
            </el-button>
        </div>

        <el-form-item label="First Name">
            <el-input
                type="text"
                required
                autocomplete="off"
                v-model="firstName"
            ></el-input>
        </el-form-item>

        <el-form-item label="Last Name">
            <el-input
                type="text"
                required
                autocomplete="off"
                v-model="surname"
            ></el-input>
        </el-form-item>

        <el-form-item label="Email">
            <el-input
                type="email"
                required
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

        <el-form-item>
            <el-button class="btnAccount"
                type="primary"
                @click="update"
                >Update
            </el-button>
        </el-form-item>
    </el-form>

</template>

<style scoped>
.btnAccount {
    margin: auto;
    width: 50%;
}
</style>