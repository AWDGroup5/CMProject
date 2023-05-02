<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
<template>
  <div class="app">
    <header class="header">
      <div class="headerwrapper">
        <div class="headermenu" @click="toggleSidebar">
          <label v-if="!sidebarOpen">Menu</label>
          <label v-else>X</label>
        </div>
        <nav class="headernav">
          <RouterLink to="/login">Login</RouterLink>
        </nav>
      </div>
    </header>
    <main class="main">
      <div class="title-card">
        <div class="wrapper">
          <img alt="CMP logo" class="logo" src="@/assets/heart-attack.png" width="125" height="125" />
          <HelloWorld msg="Cardiomyopathy Project" />
        </div>
      </div>
      <div class="content-card">
        <RouterView />
      </div>
    </main>
    <div class="nav-bar"></div>
    <div class="sidebar" v-show="sidebarOpen" :class="{ show: sidebarOpen }">
      <div class="sidebarclose" @click="toggleSidebar">X</div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/news">News</RouterLink>
        <RouterLink to="/search">Search</RouterLink>
        <RouterLink to="/message-board">Message Board</RouterLink>
        <RouterLink to="/data">Data</RouterLink>
      </nav>
    </div>
  </div>
</template>
<style scoped>
/* Reset some styles */
html, body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

a {
  text-decoration: none;
  color: #0a529e;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {

  border-bottom: 1px solid #f70561;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.headerwrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.headermenu {
  cursor: pointer;
}

.main {
  flex: 1;
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem;
  box-sizing: border-box;
}

.title-card {
  margin-bottom: 2rem;
}

.logo {
  display: block;
  width: 90px;
  height: 80px;
  margin-bottom: 1rem;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #eb0d4c;
  overflow-y: auto;
  padding: 1rem;
  z-index: 100;
  transition: transform 0.3s;
  transform: translateX(-100%);
}

.sidebar.show {
  transform: translateX(0);
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar nav a {
  padding: 0.5rem 1rem;
  background-color: #070707;
  border-radius: 4px;
}
.sidebar__close {
  position: absolute;
  top: 0px;
  right: 2px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
}

</style>