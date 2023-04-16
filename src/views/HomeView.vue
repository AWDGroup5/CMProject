<template>
<div class="content">
      <div class="news-feed">
        <h2>Latest News on Cardiomyopathy</h2>
        <rss-feed url="https://rss.app/feeds/1mDqPNunGm48692G.xml"></rss-feed>
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
  background-color: #f8f8f8;
  padding: 16px;
border-radius: 8px;
}
</style>