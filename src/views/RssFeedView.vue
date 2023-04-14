<template>
    <div id="app">
      <h1>Cardiomyopathy News</h1>
      <Loading :loaded="loaded"></Loading>
      <div v-if="updating" class="updating">Using cached RSS feed</div>
      <!-- Create an Item component for each entry in the RSS feed -->
      <Item v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :link="item.link"
        :image="item.url"
        :desc="item.description"
      >
      </Item>
    </div>
  </template>
  
  <script setup>
  import {ref, watch, onMounted} from 'vue'
  import Item from './components/RssFeed.vue'
  import Loading from './components/Loading.vue'

  const items = ref(null);
  const loaded = ref(false);
  const updating = ref(false);

  async function getData() {
    const rss = localStorage.getItem(`CmRss`);
    if (rss) {
      let data = JSON.parse(rss);
      if (!data[0].url) {
        data = data.map((story) => {
          const url = story.enclosure?.['$']?.url;
          return {...story, url};
        });
        localStorage.setItem(`CmRss`, JSON.stringify(data));
      }
      items.value = data;
      loaded.value = true;
      updating.value = true;
    }
    
    try {
      const data = await fetch('https://rss.app/feeds/1mDqPNunGm48692G.xml'
      }).toString())
      const json = await data.json();
      const rss = json.rss.channel.item;
      items.value = rss.map((story) => {
        const url = story.enclosure?.['$']?.url;
        return {...story, url};
      });
      localStorage.setItem(`CmRss`, JSON.stringify(items.value));
      loaded.value = true;
      updating.value = false;
    } catch(error) {
      console.error(error)
    }
  }

  watch(selected, async () => getData());
  onMounted(async () => getData());
  </script>
  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    padding: 2% 0;
    max-width: 800px;
  }
  h1 {
    font-size: 1.5em;
  }
  .updating {
    font-size: 11px;
    font-style: italic;
    color: rgba(0,0,0,0.6);
  }
  </style>