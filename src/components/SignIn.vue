<!--<template>
  <div class="login-div">
    <el-form label-width="50px" @submit.prevent>
      <h2>Login</h2>
      
      <el-form-group
        id="email-input"
        label="Email"
        label-for="email"
      >
        <el-form-item label="Email">
          <el-input
            type="email"
            placeholder="email"
            required
            autocomplete="off"
            v-model="email"
          ></el-input>
        </el-form-item>
      </el-form-group>

      <el-form-group
        v-if="!forgotPasswordScreen"
        class="mt-3"
        id="password-input"
        label="Password"
        label-for="password"
      >
      
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

        <div class="text-end">
          <el-form-text>
          <span @click="showForgotPassword(true)" class="hand link">Forgot Password?</span>
          </el-form-text>
        </div>
      </el-form-group>

      <div class="mt-4 text-center">
        <el-button v-if="forgotPasswordScreen" class="btn-style" type="submit" variant="primary">Submit</el-button>
        <el-button v-else class="btn-style" type="submit" variant="primary">Login</el-button>
      </div>
      <div class="mt-4">
        <hr/>
      </div>
      <div class="mt-3 text-center">
        <el-form-text v-if="forgotPasswordScreen" class="mr-0">
          <span @click="showForgotPassword(false)" class="hand link"> <img class="back-img" src="@/assets/back.png" alt="back"> Back to Login</span>
        </el-form-text>
        <el-form-text v-else class="mr-0">
          Need an account? <span @click="goToLogin" class="hand link">SIGN UP</span>
        </el-form-text>
      </div>
    </el-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { firebaseAuthentication, signInWithEmailAndPassword } from "@/firebase/database";
import { useRouter } from "vue-router";



export default {
  name: 'SignIn',
  data() {
      return {
        form: {
          email: '',
          password: '',
        },
        forgotPasswordScreen: false
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.form = {}
        this.forgotPasswordScreen = false
      },
      showForgotPassword(val) {
        this.forgotPasswordScreen = val;
      },
      goToLogin() {
          this.$emit('goToLogin', false)
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
.back-img {
  width: 11px;
  filter:grayscale(#ff0059)
}
</style>
-->
<script setup>
import { ref } from "vue";
import { firebaseAuthentication, signInWithEmailAndPassword } from "../firebase/database";
import { useRouter, RouterLink, RouterView } from "vue-router";

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
        <RouterLink to="/">Forgotten Password?</RouterLink>
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

