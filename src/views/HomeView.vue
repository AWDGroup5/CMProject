<template>
<div class="content">
      <div class="news-feed">
        <h2>Latest News on Cardiomyopathy</h2>
        <rss-feed></rss-feed>
      </div>
</div>
<div class="posts-feed">
        <h2>Latest Posts from Our Website</h2>
        <post-feed></post-feed>
      </div>
        <div class="graph-data">
        <h2>Overall Graph Data</h2>
        <graph></graph>
      </div>
</template>
<style>
.news-feed, .posts-feed {
  background-color: transparent;
  padding: 16px;
border-radius: 8px;
align-self: center;
}
.graph-data {
  background-color: transparent;
  padding: 16px;
  border-radius: 8px;
  align-self: center;
}
</style>
