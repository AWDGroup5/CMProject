<script setup>
import Profile from '../components/UserProfile.vue'
import ProfilePosts from '../components/ProfilePosts.vue'
</script>

<template>
    <Suspense>
        <main>
            <Profile />
        </main>

        <template #fallback>
            <div>Loading...</div>
        </template>
    
    </Suspense>
    <ProfilePosts />
    
</template>

<style scoped>
</style>