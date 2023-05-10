import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Search from'../views/SearchView.vue';
import MessageBoard from '../Views/MessageBoardView.vue';
import PostList from '../components/PostList.vue';
import SinglePost from '../components/SinglePost.vue';
import Login from '../views/LoginScreen.vue';
import Logout from '../views/LogoutView.vue';
import Register from '../views/RegisterView.vue';
import Data from '../views/DataView.vue';
import Profile from '../views/ProfileView.vue';
import Forgotten from '../views/ForgottenView.vue';

import ApiTest from '../views/ApiTest.vue'

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
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/forgot",
      name: "Forgot",
      component: Forgotten,
    },
    {
      path: "/data",
      name: "Data",
      component: Data,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
   
    
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
    {
      path: "/api-test",
      name: "ApiTest",
      component: ApiTest,
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title =  to.name + " | Cardiomyopathy Project"

  next()

})

export default router
