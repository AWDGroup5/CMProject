import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Search from'../views/SearchView.vue'
import Upload from '../Views/UploadView.vue'
import PostList from "../components/PostList.vue";
import SinglePost from "../components/SinglePost.vue";
import Login from '../views/LoginScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: "/:postID",
      name: "SinglePost",
      component: SinglePost,
      props: true
    },
    {
      path: "/",
      name: "PostList",
      component: PostList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router
