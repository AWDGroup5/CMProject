<template>
    <div class="center">
      <h1 class="globalfont">List of Diseases from Human Phenotype Ontology</h1>
      <DBLinks />
    </div>
  </template>
  
  <script setup>
  import DBLinks from '../components/DBLinks.vue';
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap");
  
  .globalfont {
    font-family: "Open Sans Condensed", sans-serif;
  }
  .center {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
    text-align: center;
  }
  </style>
  