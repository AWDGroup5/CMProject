<template>
    <div>
      <button @click="populateGeneList">Test API</button>
      <div v-if="error">{{ error }}</div>
      <ul v-else>
          <li v-for="gene in genes" :key="gene.geneId">
            {{ console.log(gene) }}
          <div>{{ gene.geneSymbol }}</div>
          <ul>
            <li v-for="disease in gene.dbDiseases" :key="disease.diseaseId">
              <div>{{ disease.diseaseId }}</div>
              <div>{{ disease.diseaseName }}</div>
              <div>{{ geneCount }}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  
  <script>
import { ref, onMounted } from 'vue';
import getGenesFromHpo from "../composables/getExternalLinks.js";

export default {
  name: "GeneList",
  setup() {
    const { genes, error, populateGeneList } = getGenesFromHpo("HP:0001166");

    onMounted(() => {
        populateGeneList();
    });

    return { genes, error };
  },
};
</script>
