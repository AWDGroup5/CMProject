<template>
  <div class="main-div">
    <login v-if="showLogin" @goToLogin="showLoginPage"></login>
    <sign-up v-else @goToLogin="showLoginPage"></sign-up>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
export default {
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
}
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