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
            <div>Loading profile data...
                <el-divider />
            </div>
        </template>
        
    
    </Suspense>
    <Suspense>
        <main>
            <ProfilePosts />
        </main>

        <template #fallback>
            <div>Loading uploaded data...
                <el-divider />
            </div>
        </template>
        
    
    </Suspense>
    
</template>

<style scoped>
</style>