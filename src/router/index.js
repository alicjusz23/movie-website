import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue";
import Genre from "../views/Genre.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movie",
    name: "Movie",
    component: Movie
  },
  {
    path: "/movie/:id",
    name: "Movie2",
    component: Movie
  },
  {
    path: "/genre/:id",
    name: "Genre",
    component: Genre
  },
  {
    path: "/genre",
    redirect: "/"
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
