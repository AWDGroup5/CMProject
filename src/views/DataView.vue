<script setup>
import Data from '../components/Data.vue';
import DataUpload from '../components/DataUpload.vue';

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
    
    <DataUpload />

</template>

<style>

</style>