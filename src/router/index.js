import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import Upload from '../components/UploadView.vue'
import Search from '../components/Search.vue'
import LoginScreen from '../views/LoginScreen.vue'
import UploadView from '../views/UploadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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
      path: '/signin',
      name: 'Signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/post',
      name: 'Post',
      component: UploadView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginScreen
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/signin",
    }
  ]
})

export default router
