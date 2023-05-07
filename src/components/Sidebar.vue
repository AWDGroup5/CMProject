<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="modal-mask">

    </div>
    
    <div class="nav-bar"></div>

    <div class="sidebar" v-show="sidebarOpen" :class="{ show: sidebarOpen }">
      <div class="sidebarclose" @click="toggleSidebar">X</div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/news">News</RouterLink>
            <!-- <RouterLink to="/search">Search</RouterLink>-->
            <RouterLink to="/message-board">Message Board</RouterLink>
            <RouterLink to="/data">Data</RouterLink>
            <RouterLink to="/logout">Logout</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
    .modal-mask {
        position:  fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--vt-c-divider-light-2);
    }
    .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height: 100%;
    background-color: var(--vt-c-divider-dark-2);
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