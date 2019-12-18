import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import App from './App.vue'
import Post from './components/Post.vue'
import Journal from './components/Journal.vue'
import PostAxios from './components/PostAxios.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import Edit from './components/Edit.vue'
import NotFound from './components/NotFound.vue'
import store from './store'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
 routes: [
   {
     path: '/',
     name:'journal',
     component: Journal,
   },
   {
     path: '/post/:id',
     name:'post',
     component: Post,
     props: true,
   },
   {
     path: '/axios1',
     name:'axios1',
     component: PostAxios,
   },
   {
     path: '/login',
     name:'login',
     component: Login,
   },
   {
     path: '/profile',
     name:'profile',
     component: Profile,
     props: true,
   },
   {
     path: '/edit',
     name:'edit',
     component: Edit,
     props: true,
   },
   { path: '/notFound',
     component: NotFound 
   },  
 ],
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/notFound');
  } else {
    next();
  }
})

new Vue({
 el: '#app',
 render: h => h(App),
 router,
 store
})