<script lang="ts">
// I used the axios to search data
import axios from 'axios';

// the search is done by name but it can be changed if needed
export default { name: 'Search', data() {
    return { 
      query: '', results: [], isLoading: false
    };
  },
  methods: {
    search() {
      this.isLoading = true;
      axios
      // needed to ad the api address of the database of where will be searching from
        .get(`enter api https address here =${this.query}`)
        .then(response => {
           this.results = response.data.results;
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<template>
    <div>
      <div>
        <input type="text" id="query" placeholder="Search Cardiomyopathy Project" v-model="query">
        <button @click="search" :disabled="isLoading">{{ isLoading ? 'Searching...' : 'Search' }}</button>
      </div>
      <div v-if="results.length > 0">
        <h2>Results:</h2>
        <ul>
          <li v-for="result in results" :key="result.title">
            <h3>{{ result.title }}</h3>
            <p>{{ result.description }}</p>
          </li>
        </ul>
      </div>
      <div v-else-if="!isLoading">
        <p>No results found.</p>
      </div>
      <div v-if="isLoading">
        <p>Loading...</p>
      </div>
    </div>
  </template>
  <style>
  /* 
  I have added a random style to it 
  just as an example
  */
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }
  
  label {
    font-size: 18px;
    margin-right: 10px;
  }
  
  input[type="text"] {
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 10px;
    width: 50%;
  }
  
  button {
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3e8e41;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 18px;
    line-height: 1.5;
  }
  </style>
  
  