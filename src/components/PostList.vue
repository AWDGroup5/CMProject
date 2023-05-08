<script setup>
import PostListItem from "@/components/PostListItem.vue";


defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
  user: {
    type: Object,
    default: () => {},
  },
}) 


let emit = defineEmits(["delete-post"]);

function deletePost(slug) {
  emit("delete-post", slug);
}
</script>

<template>
  <div>
    <el-card class="box-card">
      <div v-if="props.user">
        Welcome back
        <span style="color: green; font-weight: bold">{{ props.user.displayName }}</span>,
        <!-- <span style="color: green; font-weight: bold">{{ props.user.email }}</span>, -->
        <el-button type="text" @click="$emit('logout')"><el-icon><User /></el-icon>Logout</el-button>

        <div><router-link :to="{ name: 'Post' }"><el-button type="text"><el-icon><Plus /></el-icon>Add a Post</el-button></router-link></div>
      </div>
    </el-card>
    <PostListItem
      v-for="post in posts"
      :key="post.slug"
      :slug="post.slug"
      :title="post.title"
      :description="post.description"
      :tags="post.tags"

      @delete-post="deletePost"
    />
  </div>
</template>
