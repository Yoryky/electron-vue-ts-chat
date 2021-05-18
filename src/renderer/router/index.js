import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NewsPage from '../views/NewsPage.vue';
import UserPage from '../views/UserPage';
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/news",
      name: "news",
      component: NewsPage,
    },
    {
      path: "/user",
      name: "user",
      component: UserPage,
    },
  ],
});
// dynamically set application title to current view
// router.afterEach((to) => {
//   let title =
//     to.path === '/home'
//       ? process.env.PRODUCT_NAME
//       : `${to.meta.title} - ${process.env.PRODUCT_NAME}`

//   if (!title) {
//     title = 'Home'
//   }

//   document.title = title
// })

export default router
