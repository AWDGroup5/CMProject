<!--<template>
  <div class="main-div">
    <login v-if="showLogin" @goToLogin="showLoginPage"></login>
    <sign-up v-else @goToLogin="showLoginPage"></sign-up>
  </div>
</template>

<script setup>
// @ is an alias to /src
import Login from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
const login = ({
  name: 'LoginScreen',
  components: {
    Login,
    SignUp
  },
  data(){
    return {
      showLogin: true,
    }
  },
  methods: {
    showLoginPage(val) {
      this.showLogin = val
    }
  }
})
</script>

<style scoped>
.main-div {
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b5b2b240;
}
</style>
-->

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView, userRouter } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuthentication } from '../firebase/database';

  const user = ref(null);
  const router = userRouter();

  onAuthStateChanged(firebaseAuthentication, (currentUser) => {
    if (currentUser) {
      user.value = currentUser.displayName;
    }
    else {
      user.value ==null;
    }
  });
  

  function logout() {
    signOut(firebaseAuthentication).then(
      () => {
        user.value = null;
        router.push("login");
      },
      (error) => {
        errorLogout.value = error.message;
      }
    );
  }
</script>

<template>
  <!-- <div> -->
  <div class="common-layout globalfont center">
    <RouterLink :to="{ name: 'Login' }">
      <el-button type="success" round v-if="!user"><el-icon><UserFilled /></el-icon>Login</el-button>
    </RouterLink>
    <RouterLink :to="{ name: 'Register' }">
      <el-button type="success" round v-if="!user"><el-icon><User /></el-icon>Register</el-button>
    </RouterLink>

    <h2>The Cardiomyopathy Blog</h2>
  </div>
  <RouterView
    :posts="posts"
    :user="user"
    @logout="logout"
    class="globalfont center"
  />

</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap");

.globalfont {
  font-family: "Open Sans Condensed", sans-serif;
}
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  text-align: center;
}

</style>