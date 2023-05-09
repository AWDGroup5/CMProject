<script setup>
import Profile from '../components/UserProfile.vue'
import ProfilePosts from '../components/ProfilePosts.vue'
import { reactive } from 'vue'
import { where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuthentication, collection, firebaseFireStore, query } from '@/firebase/database';

const userInfo = reactive([
    {
        displayName: "",
        email: "",
        phone: "",
        institute: "",
        address1: "",
        address2: "",
        address3: "",
        postCode: "",
    }
])

/*
  const userTest = await where(userTable, email, '==', user.value);
*/

onAuthStateChanged(firebaseAuthentication, (currentUser) => {
  if (currentUser) {
    userInfo.displayName = currentUser.displayName;
    userInfo.email = currentUser.email;

    /*
    async function fetch() {
    const userDataRef = query(collection(firebaseFireStore, 'users'), where('email', '==', userInfo.email))
    const userSnap = await getDocs()
    }
    */

  } else {
    userInfo == null;
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