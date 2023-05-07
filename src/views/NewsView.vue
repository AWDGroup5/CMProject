<template>
  <section class="details-card">
  <h1 class="cardio">Cardiomyopathy News</h1>
    <Loading :loaded="loaded"></Loading>
    <div v-if="updating" class="updating">Using cached RSS feed</div>
    <div v-if="items" class="container-fluid mt-4">
        <div class="row">
            <div class="col-md-4 mb-4" v-for="(item, index) in items" :key="index">
                <div class="card-content" >
                    <div class="card-img">
                        <img :src="getImageUrl(item)" alt="" style="height:300px">
                        <span><h4>heading</h4></span>
                    </div>
                    <div class="card-desc">
                        <h3>{{ truncate(item.title , 12) }}</h3>
                        <p>{{truncate(item.description, 20)}}</p>
                        <a :href="item.link" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';
import Loading from '../components/Loading.vue';

const items = ref(null);
const loaded = ref(false);
const updating = ref(false);

async function getData() {
  const rss = localStorage.getItem(`CmRss`);
  if (rss) {
    let data = JSON.parse(rss);
    if (!data[0].image) {
      data = data.map((story) => {
        const image = story.image;
        return { ...story, image };
      });
      localStorage.setItem(`CmRss`, JSON.stringify(data));
    }
    items.value = data;
    loaded.value = true;
    updating.value = true;
  }

  axios
    .get('https://rss.app/feeds/v1.1/1mDqPNunGm48692G.json')
    .then((response) => {
      const items = response.data.items;
      const data = items.map((item) => {
        const title = item.title;
        const link = item.url;
        const description = item.content_text;
        const image = item.image;
        
        return { title, link, description ,image};
      });
      items.value = data;
      console.log("ITEM :: ",items[2].image)

      localStorage.setItem(`CmRss`, JSON.stringify(data));
      loaded.value = true;
    })
    .catch((error) => {
      console.error(error);
    });
}
function getImageUrl(item) {
  if (item.image) {
    return item.image;
  } else {
    return 'https://via.placeholder.com/300x200?text=No+Image';
  }
}

function truncate(str, num) {
  const words = str.split(' ');
  if (words.length > num) {
    return words.slice(0, num).join(' ') + '...';
  } else {
    return str;
  }
}
getData()
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ecf0f1;
  margin: 0 auto;
  padding: 0% 0;
}
h1 {
  font-size: 1.5em;
}
.cardio{
  color:rgba(255, 0, 89,1)
}
section{
    padding: 25px 0;
}
.details-card {
	background: #ecf0f1;
}

.card-content {
	background: #ffffff;
	border: 4px;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  height: 100%;
}

.card-img {
	position: relative;
	overflow: hidden;
	border-radius: 0;
	z-index: 1;
}

.card-img img {
	width: 100%;
	height: auto;
	display: block;
}

.card-img span {
	position: absolute;
    top: 15%;
    left: 12%;
    background: #1ABC9C;
    padding: 6px;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    transform: translate(-50%,-50%);
}
.card-img span h4{
        font-size: 12px;
        margin:0;
        padding:10px 5px;
         line-height: 0;
}
.card-desc {
	padding: 1.25rem;
}

.card-desc h3 {
	color: #000000;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.3em;
    margin-top: 0;
    margin-bottom: 5px;
    padding: 0;
}

.card-desc p {
	color: #747373;
    font-size: 14px;
	font-weight: 400;
	font-size: 1em;
	line-height: 1.5;
	margin: 0px;
	margin-bottom: 20px;
	padding: 0;
	font-family: 'Raleway', sans-serif;
}
.btn-card{
	background-color: #1ABC9C;
	color: #fff;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    padding: .84rem 2.14rem;
    font-size: .81rem;
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    -o-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    margin: 0;
    border: 0;
    -webkit-border-radius: .125rem;
    border-radius: .125rem;
    cursor: pointer;
    text-transform: uppercase;
    white-space: normal;
    word-wrap: break-word;
    color: #fff;
}
.btn-card:hover {
    background: orange;
}
a.btn-card {
    text-decoration: none;
    color: #fff;
}
</style>