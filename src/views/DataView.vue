<script setup>
import { ref } from 'vue';
import Data from '../components/Data.vue';
import DataUpload from '../components/DataUpload.vue';
import { firebaseAuthentication } from '@/firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
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
</script>

<template>
    <Suspense>
        <main>
            <Data />
        </main>

        <template #fallback>
            <div>Loading...</div>
        </template>
    
    </Suspense>
    
    <DataUpload v-if="user" />

</template>

<style>
</style>