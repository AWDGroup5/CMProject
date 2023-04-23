<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="Layout-app">

    <div class="Layout-header">
      <div class="Header-homepage">

        <div class="Header-menu">
          <label>Placeholder</label>
        </div>

        <nav class="Header-login">
          <RouterLink to="/login">Login</RouterLink>
        </nav>

      </div>
    </div>

    <div class="Layout-main">
      <div class="TitleCard">
        <div class="wrapper">
          <img alt="CMP logo" class="logo" src="@/assets/heart-attack.png" width="125" height="125" />
          <HelloWorld msg="Cardiomyopathy Project" />

          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/news">News</RouterLink>
            <RouterLink to="/search">Search</RouterLink>
            <RouterLink to="/message-board">Message Board</RouterLink>
            <RouterLink to="/data">Data</RouterLink>
          </nav>
        </div>

      </div>

      <div class="ContentCard">
        <RouterView />
      </div>
    </div>

    <div class="NavBar">

    </div>

  </div>
</template>

<style scoped>

.Layout-main {
  box-sizing: inherit;
  width: 1000px;
  margin-right: auto;
  margin-left: auto;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display:block;
  width:90px;
  height:80px;
  overflow:hidden;
  background-image: url(./assets/heart-attack.png);
  background-repeat:no-repeat;
  background-size:90px 80px;
  text-indent:-9999px
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.Layout-header, .Layout-main {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.Layout-header {
  z-index: 70;
}

.Header-homepage {    
  position: relative;
  width: 100%;
  min-height: 55px;
}

.Header-menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 55px;
  height: 55px;
  text-align: center;
}

.Header-login {
  position: absolute;
  top: 0;
  right: 0;
  width: 55px;
  height: 55px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1280px) {
  .Layout-main {
    display: block;
    position: relative;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .Layout-main .wrapper {
    display: block;
    place-items: start;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
