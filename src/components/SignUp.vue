<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication, createUserWithEmailAndPassword, firebaseFireStore, sendEmailVerification } from "@/firebase/database";
import { collection, addDoc } from "firebase/firestore";

defineEmits(["register-clicked"])

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

const userRef = collection(firebaseFireStore, 'users');

function register() {
  const userInfo = {
    email: email.value,
    password: password.value,
    displayName: displayName.value,
    phone: phone.value,
    institute: institute.value,
    address1: address1.value,
    address2: address2.value,
    address3: address3.value,
    postCode: postCode.value
  };

  if (!errorRegistration.value) {
    createUserWithEmailAndPassword(firebaseAuthentication, userInfo.email, userInfo.password, userInfo.displayName)
      .then(async(id) => {
        await sendEmailVerification(id.user);
      })
      .then(
        addDoc(userRef, userInfo)
          .then(docRef => {
            console.log(docRef.id + ": Document has been added successfully");
          })
          .catch(error => {
            console.log(error);
          })
      )
        .then(() => {
          router.replace("/login")
        })
      
      
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

    <h5>Fields marked with a (*) are required</h5><br />

    <div v-if="errorRegistration">
      <el-button plain type="danger" disabled icon="el-icon-error">
        {{ errorRegistration }}
      </el-button>
    </div>

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

    <el-form-item label="Email"
      :rules="[
        { required: true, message: 'Email is required'}
      ]">
      <el-input
        type="email"
        v-model="email"
      ></el-input>
    </el-form-item>

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

    <el-form-item label="Confirm Password" prop="pass"
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

    <el-divider />

    <el-form-item label="Institution Affiliation"
      :rules="[
        { required: true, message: 'Institution Affiliation is required'}
      ]">
      <el-input
        type="text"
        v-model="institute"
      ></el-input>
    </el-form-item>

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

    <el-form-item label="Phone">
      <el-input
        type="tel"
        v-model="phone"
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