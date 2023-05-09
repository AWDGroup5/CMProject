<template>
    <div>
      <h1>List of diseases from Human Phenotype Ontology</h1>
      <div v-if="error">{{ error }}</div>
      <el-row v-if="humanList.length">
        <el-col
          :span="8"
          v-for="human in humanList"
          :key="human.id"
          :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <template #header>
              <div class="header">
                <span>{{ human.name }}</span>
              </div>
            </template>
            <div style="padding: 14px;" class="bottom">
              <span>Symbol: {{ human.id }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import getExternalLinks from "../composables/getExternalLinks.js";
  
  export default {
    name: "DBLinks",
  
    setup() {
      const diseaseId = "YOUR_DISEASE_ID"; // Replace this with the ID of your desired disease
  
      const { human_list, error, populateHumanList } = getExternalLinks(
        diseaseId
      );
  
      onMounted(() => {
        populateHumanList();
      });
  
      return { humanList: human_list, error, populateHumanList };
    },
  };
  </script>
  
  <style scoped>
  .header {
    padding: 0px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    text-align: center;
  }
  </style>
  