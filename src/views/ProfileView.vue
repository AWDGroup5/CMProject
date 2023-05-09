<script setup>
import Profile from '../components/UserProfile.vue'
import ProfilePosts from '../components/ProfilePosts.vue'
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuthentication } from '@/firebase/database';

const user = ref(null)

/*
  const userTest = await where(userTable, email, '==', user.value);
*/

onAuthStateChanged(firebaseAuthentication, (currentUser) => {
  if (currentUser) {
    user.value = currentUser;
  } else {
    user.value == null;
  }
});


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