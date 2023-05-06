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
import Login from '../components/SignIn.vue';

</script>

<template>

  <Login />

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