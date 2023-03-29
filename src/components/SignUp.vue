<template>
    <div class="login-div">
      <div class="logo">
        <img class="img-style" src="@/assets/heart-attack.png" alt="heart">
      </div>
      <b-form @submit="onSubmit">
        <b-form-group
          id="name-input"
          label="Name"
          label-for="name"
        >
          <b-form-input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Enter Name"
            required
            class="input-fields"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="mt-3"
          id="email-input"
          label="Email"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
            class="input-fields"
          ></b-form-input>
        </b-form-group>
  
        <b-form-group
          class="mt-3"
          id="password-input"
          label="Password"
          label-for="password"
        >
          <b-form-input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
            class="input-fields"
          ></b-form-input>
        </b-form-group>
  
        <!-- button -->
        <div class="mt-4 text-center">
          <b-button class="btn-style" type="submit" variant="primary">Sign Up</b-button>
        </div>
        <div class="mt-4">
          <hr/>
        </div>
        <div class="mt-3 text-center">
          <b-form-text class="mr-0">
            Already a user? <span @click="goToLogin" class="hand link">LOGIN</span>
          </b-form-text>
        </div>
      </b-form>
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
  .logo {
    text-align: center;
    margin: 10px;
  }
  .img-style {
    width: 50px;
  }
  .back-img {
    width: 11px;
    filter:grayscale(#ff0059)
  }
  </style>
  