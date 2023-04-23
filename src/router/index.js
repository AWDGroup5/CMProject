import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Search from'../views/SearchView.vue'
import MessageBoard from '../Views/MessageBoardView.vue'
import PostList from "../components/PostList.vue";
import Login from "@/components/SignIn.vue";
import Register from "@/components/SignUp.vue";
import Data from "@/components/DataUpload.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'News',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/message-board',
      name: 'Message Board',
      component: MessageBoard
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
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/data",
      name: "Data",
      component: Data,
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name

  next()

})

export default router
