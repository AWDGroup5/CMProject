<!--
  <template>
    <div class="login-div">
      <el-form @submit="onSubmit">
        <el-form-group
          id="name-input"
          label="Name"
          label-for="name"
        >
          <el-form-input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Enter Name"
            required
            class="input-fields"
          ></el-form-input>
        </el-form-group>

        <el-form-group
          class="mt-3"
          id="email-input"
          label="Email"
          label-for="email"
        >
          <el-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
            class="input-fields"
          ></el-form-input>
        </el-form-group>
  
        <el-form-group
          class="mt-3"
          id="password-input"
          label="Password"
          label-for="password"
        >
          <el-form-input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
            class="input-fields"
          ></el-form-input>
        </el-form-group>
  
        <div class="mt-4 text-center">
          <el-button class="btn-style" type="submit" variant="primary">Sign Up</el-button>
        </div>
        <div class="mt-4">
          <hr/>
        </div>
        <div class="mt-3 text-center">
          <el-form-text class="mr-0">
            Already a user? <span @click="goToLogin" class="hand link">LOGIN</span>
          </el-form-text>
        </div>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignIn',
    data() {
        return {
          form: {
            name: '',
            email: '',
            password: '',
          },
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
          this.form = {}
        },
        goToLogin() {
            this.$emit('goToLogin', true)
        }
      }
  }
  </script>
  
  <style scoped>
  .login-div {
    width: 350px;
    text-align: start;
    padding: 40px;
    border: 1px solid #ff5c5b;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .input-fields {
    width: 270px;
    margin: auto;
    border-color: #ff5c5b;
  }
  .input-fields:focus {
    outline: none;
    border-color: #ff0059;
    box-shadow: 0 0 5px #ff0059;
  }
  .btn-style {
    width: 250px;
    cursor: pointer;
    background: #ff5c5b;
    border-color: #ff5c5b;
  }
  .btn-style:hover {
    background: #ff0059;
    border-color: #ff0059;
  }
  .hand {
    cursor: pointer;
  }
  .link {
    text-decoration: underline;
    color: #ff0059;
  }
  .link:hover {
    color: #ff5c5b;
  }
  </style>
-->

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication, createUserWithEmailAndPassword, updateProfile } from "@/firebase/database";

defineEmits(["register-clicked"])

const firstName = ref("");
const surname = ref("");
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
    createUserWithEmailAndPassword(firebaseAuthentication, info.email, info.email)
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

    <el-form-item label="First Name">
      <el-input
        type="text"
        placeholder="First Name"
        required
        autocomplete="off"
        v-model="firstName"
      ></el-input>
    </el-form-item>

    <el-form-item label="Last Name">
      <el-input
        type="text"
        placeholder="Surname"
        required
        autocomplete="off"
        v-model="surname"
      ></el-input>
    </el-form-item>

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