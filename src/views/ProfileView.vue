<script setup>
import Profile from '../components/UserProfile.vue'
import ProfilePosts from '../components/ProfilePosts.vue'

/*
import { ref } from "vue";
import { useRouter } from "vue-router";
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuthentication, firebaseFireStore } from "../firebase/database";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const user = ref(null)

onAuthStateChanged(firebaseAuthentication, (currentUser) => {
if (currentUser) {
    user.value = currentUser.email;
    
    let userDataRef = query(collection(firebaseFireStore, 'users'), where('email', '==', user.value))

    onSnapshot(userDataRef, (snapShot) => {
        const snapData = {};

        snapShot.forEach((doc) => {
            snapData.push({
                displayName: doc.data().displayName,
                email: doc.data().email,
                phone: doc.data().phone,
                institute: doc.data().institute,
                address1: doc.data().address1,
                address2: doc.data().address2,
                address3: doc.data().address3,
                postCode: doc.data().postCode
            });
        });

        userData.value = snapData;
    })
} else {
    user.value == null;
}


});*/

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