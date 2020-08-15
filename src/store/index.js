import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    genres: [
      {
          id: 28,
          name: 'Action',
          picture: 'https://cdn.pixabay.com/photo/2020/07/21/22/21/woman-5427485_960_720.jpg'
      },
      {
          id: 12,
          name: 'Adverture',
          picture: 'https://cdn.pixabay.com/photo/2020/03/30/15/34/risk-4984577_960_720.jpg'
      },
      {
          id: 16,
          name: 'Animation',
          picture: 'https://cdn.pixabay.com/photo/2016/05/17/11/53/minions-1397954__340.jpg'
      },
      {
          id: 35,
          name: 'Comedy',
          picture: 'https://images.unsplash.com/photo-1587331722574-acf78f587c4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
      },
      {
          id: 80,
          name: 'Crime',
          picture: 'https://www.thestatesman.com/wp-content/uploads/2020/04/murder.jpg'
      },
      {
          id: 99,
          name: 'Documentary',
          picture: 'https://www.adorama.com/alc/wp-content/uploads/2018/02/shutterstock_663360523-1024x483.jpg'
      },
      {
          id: 18,
          name: 'Drama',
          picture: 'https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
      },
      {
          id: 10751,
          name: 'Family',
          picture: 'https://images.pexels.com/photos/4260639/pexels-photo-4260639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      },
      {
          id: 14,
          name: 'Fantasy',
          picture: 'https://images.unsplash.com/photo-1574244931790-ee19df716899?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=366&q=80'
      },
      {
          id: 36,
          name: 'History', 
          picture: 'https://images.unsplash.com/photo-1486150702851-498e985c2efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80'
      },
      {
          id: 27,
          name: 'Horror',
          picture: 'https://image.freepik.com/free-photo/blood-hand-sticking-out-ground-fog_23-2147898936.jpg'
      },
      {
          id: 9648,
          name: 'Mystery',
          picture: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/04/10/youtube-mystery-box-jake-paul.jpg?w968h681'
      },
      {
          id: 10402,
          name: 'Music',
          picture: 'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
      },
      {
          id: 10749,
          name: 'Romance',
          picture: 'https://images.unsplash.com/photo-1486989813814-da4a10a6fc7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=590&q=80'
      },
      {
          id: 878,
          name: 'Science Fiction',
          picture: 'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_960_720.jpg'
      },
      {
          id: 10770,
          name: 'TV Movie',
          picture: 'https://cdn.pixabay.com/photo/2017/07/31/18/28/room-2559790_960_720.jpg'
      },
      {
          id: 53,
          name: 'Thriller',
          picture: 'https://images.unsplash.com/photo-1444146085469-2a4ef5a7e5fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      },
      {
          id: 10752,
          name: 'War',
          picture: 'https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
      },
      {
          id: 37,
          name: 'Western',
          picture: 'https://cdn.pixabay.com/photo/2011/02/11/22/37/cowboy-4896_960_720.jpg'
      }
    ],
    popular: [],
    id : '',
    movieError: 0,
    apiUrl: {
      //genres: 'https://api.themoviedb.org/3/genre/movie/list',
      search: 'https://api.themoviedb.org/3/search/movie',
      popular: 'https://api.themoviedb.org/3/movie/top_rated',
      discover: 'https://api.themoviedb.org/3/discover/movie',
      movie: 'https://api.themoviedb.org/3/movie/',
    },
    api_key: 'a7bbb50f5f31641bcba2610c4b25a244'
  },
  mutations: {
    /*
    setGenres(state, payload){
      state.genres = payload;
    },
    */
    setMovies(state, payload){
      state.movies = payload;
    },
    setPopular(state, payload){
      state.popular = payload;
    },
    setId(state, payload){
      state.id = payload;
    },
    setMovieError(state, payload){
      state.movieError = payload;
    }
  },
  actions: {

    async getMovieById({state, commit}, id){
      try {
        let path = state.apiUrl.movie + id;
        let response = await axios.get(`${path}`, {
          params: {
            api_key: state.api_key
          }
        }).catch(() => {throw new Error('Unable to get a token5.')});
        commit('setMovies', response.data);
        commit('setMovieError', 0);
      }catch(error) {
        commit('setMovies', []);
        commit('setMovieError', 1);
      }
    },

    async getMoviesByGenre({state, commit}, {genre, page}){
      try {
        let response = await axios.get(`${state.apiUrl.discover}`, {
          params: {
            api_key: state.api_key,
            with_genres: genre,
            page: page,
            //sort_by: 'vote_count.desc'
            sort_by: 'popularity.desc'
          }
        });
        commit('setMovies', response.data.results);
      } catch(error){
        commit('setMovies', []);
      }
    },

    // async getMovies({state, commit}, query){
    //   try {
    //     let response = await axios.get(`${state.apiUrl.search}`, {
    //       params: {
    //         api_key: state.api_key,
    //         query: query
    //       }
    //     });
    //     commit('setMovies', response.data.results);
    //   } catch(error){
    //     commit('setMovies', []);
    //   }
    // },

    async getMovieByTitle({state, commit}, query){
      try {
        let response = await axios.get(`${state.apiUrl.search}`, {
          params: {
            api_key: state.api_key,
            query: query
          }
        });
        commit('setMovies', response.data.results[0]);
        commit('setId', response.data.results[0].id);
        commit('setMovieError', 0);
      }catch{
        commit('setMovieError', 1);
      }
    },

    async getPopular({state, commit}){
      try {
        let response = await axios.get(`${state.apiUrl.popular}`, {
          params: {
            api_key: state.api_key,
            page: 1
          }
        });
        commit('setPopular', response.data.results);
      } catch(error){
        commit('setPopular', []);
      }
    },
    /*
    async getGenres({state, commit}){
      try {
        let response = await axios.get(`${state.apiUrl.genres}`, {
          params: {
            api_key: state.api_key,
          }
        });
        commit('setGenres', response.data.genres);
      } catch(error){
        commit('setGenres', []);
      }
    }
    */
  },


  getters: {
    getGenreById: (state) => (id) => {
      return state.genres.find(genre => genre.id == id).name;
      //return router.currentRoute.params.id;
    },
    getGenres: (state) => {
      return state.genres;
    }
  },
  modules: {}
});
