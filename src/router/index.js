import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MovieDetails from "../views/MovieDetails.vue";
import GenreMovies from "../views/GenreMovies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movie-details",
    name: "MovieDetails",
    component: MovieDetails
  },
  {
    path: "/movie-details/:id",
    name: "MovieDetails2",
    component: MovieDetails
  },
  {
    path: "/genre/:id",
    name: "GenreMovies",
    component: GenreMovies
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
