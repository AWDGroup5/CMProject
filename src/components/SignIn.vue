<script setup>
import { ref } from "vue";
import { firebaseAuthentication, signInWithEmailAndPassword } from "../firebase/database";
import { useRouter, RouterLink } from "vue-router";

//defineEmits(["login-clicked"])

const email = ref("");
const password = ref("");
const errorFirebase = ref(null);

const router = useRouter();

function login() {
  const info = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword( firebaseAuthentication, info.email, info.password)
    .then(
      () => {
        // const user = userCredential.user;
        router.push("/data");
        // console.log("user = ", user)
        // router.push({ name: 'PostList', params: { user: user} });
      },
      (error) => {
        errorFirebase.value = error.message;
      }
    );
  
}
</script>

<template>
  <el-form label-width="50px" @submit.prevent>
    <h2>Login</h2>

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

    <el-form-item label="Password">
      <el-input
        type="password"
        placeholder="password"
        required
        autocomplete="off"
        show-password
        v-model="password"
      ></el-input>
    </el-form-item>
    
    <el-divider />

    <div class="loginLink">
      <label>
        <RouterLink to="/forgot">Forgotten Password?</RouterLink>
      </label>

      <label id="noAccount">
        <RouterLink to="/register">Don't have an account? </RouterLink>
      </label>
    </div>

    <el-form-item>
      <el-button class="btnStandard" type="primary" style="margin: auto" @click="login">
        Login
      </el-button>
    </el-form-item>
    
  </el-form>

</template>

<style>
.loginLink {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    padding: 10px;
}
.loginLink label {
    width: 100%;
}

label {
    width: 150px;
}

#noAccount {
  text-align: right;
}

</style>

