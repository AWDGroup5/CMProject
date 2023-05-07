<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuthentication, firebaseFireStore, collection, timestamp, where, query } from '@/firebase/database';

import HelloWorld from './components/HelloWorld.vue';

const sidebarOpen = ref(false)

const userTable = collection(firebaseFireStore, "users");
const user = ref(null)

/*
  const userTest = await where(userTable, email, '==', user.value);
*/

onAuthStateChanged(firebaseAuthentication, (currentUser) => {
  if (currentUser) {
    user.value = currentUser.displayName;
  } else {
    user.value == null;
  }
});

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
<template>

  <div class="app">
    
    <header class="header">
      <div class="headerwrapper">
        <div class="headermenu" @click="toggleSidebar">
          <label>Menu</label>
        </div>

        <div id="headerUserID">

          {{ user }}
        </div>
        <nav class="headernav">
          <RouterLink v-if="user == null" to="/login">Login / Register</RouterLink>
          <RouterLink v-else to="/profile">Profile</RouterLink>
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
      <div class="sidebarClose" @click="toggleSidebar">Close</div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/news">News</RouterLink>
       <!-- <RouterLink to="/search">Search</RouterLink>-->
        <RouterLink to="/message-board">Message Board</RouterLink>
        <RouterLink to="/data">Data</RouterLink>
        <RouterLink v-if="!user == null" to="/logout">Logout</RouterLink>
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
  color: var(--text-theme-1);
  font-size: 16px;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  border-bottom: 1px solid var(--text-theme-1);
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
  color: var(--text-theme-1);
  font-size: 16px;
}
#headerUserID {
  font-size: 20px;
  font-weight: bold;
}

.main {
  flex: 1;
  margin-left: 15%;
  margin-right: 15%;
  max-width: 1200px;
  padding: 2rem;
  box-sizing: border-box;
}

.title-card {
  margin-bottom: 2rem;  
  text-align: center;
}

.logo {  
  display: block;
  width: 90px;
  height: 80px;
  margin: auto;
}

.sidebar {
  position: fixed;
  left: 0;  
  top: 0;
  width: 250px;
  height: 100%;
  background-color: rgba(84, 84, 84, 1);
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
  top: 25px;
}

.sidebar nav a {
  padding: 0.5rem 1rem;
  background-color: #070707;
  border-radius: 4px;
}
.sidebarClose {
  padding-bottom: 3%;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 16px;
}
</style>