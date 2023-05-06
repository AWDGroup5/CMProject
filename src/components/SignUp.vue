<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication, createUserWithEmailAndPassword, updateProfile } from "@/firebase/database";

defineEmits(["register-clicked"])

const displayName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorRegistration = ref("");

watch(confirmPassword, () => {
  if(
    password.value !== "" &&
    confirmPassword.value !== "" &&
    password.value !== confirmPassword.value
  ) {
    errorRegistration.value = "The passwords do not match";
  } else {
    errorRegistration.value = null;
  }
})

const router = useRouter();

function register() {
  const info = {
    email: email.value,
    password: password.value,
    displayName: displayName.value
  };

  if (!errorRegistration.value) {
    createUserWithEmailAndPassword(firebaseAuthentication, info.email, info.password, info.displayName)
      .then(
        (userCredentials) => {
          userCredentials.displayName = info.displayName
        })
      .then(() =>
        updateProfile(firebaseAuthentication.currentUser, {
          displayName: info.displayName
        })
        .then(() => {
          router.replace("/login")
        })
      )
      
      .catch((error) => {
        errorRegistration.value = error.message;
      }
      )
  }
}

</script>

<template>
  <el-form label-width="150px" class="register" @submit.prever>
    <h2>Register</h2>

    <el-divider />

    <div v-if="errorRegistration">
      <el-button plain type="danger" disabled icon="el-icon-error">
        {{ errorRegistration }}
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
        placeholder="email"
        required
        autocomplete="off"
        v-model="email"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password" prop="pass">
      <el-input
        type="password"
        placeholder="password"
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

    <el-divider />

    <div class="loginLink">
      <label>
        <RouterLink to="/login">Already have an account?</RouterLink>
      </label>
    </div>

    <el-form-item>
      <el-button class="btnStandard"
        type="primary"
        style="margin: auto"
        @click="register"
        >Register
      </el-button>
    </el-form-item>

  </el-form>

</template>

<style></style>