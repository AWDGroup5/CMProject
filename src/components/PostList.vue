<script setup>
import PostListItem from "@/components/PostListItem.vue";
import { ref, defineProps, defineEmits } from "vue";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseFirestore = getFirestore();
const document_reference = doc(firebaseFirestore, "users", "h06n4S5PRmCQn9AuFSlj");
const user = ref(null);

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
getDoc(document_reference).then((docSnap) => {
  if (docSnap.exists()) {
    console.log("Document.data:", docSnap.data());
    user.value = docSnap.data().name;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
});

const emit = defineEmits(["delete-post"]);

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
      v-for="post in props.posts"
      :key="post.slug"
      :slug="post.slug"
      :title="post.title"
      :description="post.description"
      :tags="post.tags"

      @delete-post="deletePost"
    />
  </div>
</template>
