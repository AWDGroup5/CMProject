<script setup>
import PostListItem from "@/components/PostListItem.vue";
import { ref } from "vue";
import { firebaseFireStore } from "@/firebase/database";
import { doc, getDoc } from "firebase/firestore";

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
const document_reference = doc(firebaseFireStore, "users", "h06n4S5PRmCQn9AuFSlj");
const docSnap = await getDoc(document_reference);

if (docSnap.exists()) {
  console.log("Document.data:", docSnap.data());
  user.value = docSnap.data().name;
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

let emit = defineEmits(["delete-post"])

function deletePost(slug) {
  emit("delete-post", slug);
}
</script>

<template>
  <div>
    <el-card class="box-card">
      <div v-if="user">
        Welcome back
        <span style="color: green; font-weight: bold">{{ user.displayName }}</span>,
        <!-- <span style="color: green; font-weight: bold">{{ user.email }}</span>, -->
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
