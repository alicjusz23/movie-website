<template>
    <div class="genreMovies">
        <h1>{{genreName}} movies</h1>
        <template>
            <div class="text-center my-2">
                <v-pagination dark v-model="page" :length="5" color="red darken-4">
                </v-pagination>
            </div>
        </template>
        <v-simple-table dark class="table">
            <thead>
                <th>Poster</th>
                <th>Title</th>
                <th>Popularity</th>
                <th>Vote</th>
                <th>Vote count</th>
            </thead>
            <tbody class="text-center">
                <tr v-for="(movie, i) in movies" :key="i" @click="goToMovieDetails(movie.id)" class="movieLine">
                    <td v-if="movie">
                        <v-img v-if="movie.poster_path" height="80px" class="my-1" contain
                            :src="'http://image.tmdb.org/t/p/w185/' + movie.poster_path">
                        </v-img>
                    </td>
                    <td v-if="movie">{{movie.title}}</td>
                    <td v-if="movie">{{movie.popularity}}</td>
                    <td v-if="movie">{{movie.vote_average}}</td>
                    <td v-if="movie">{{movie.vote_count}}</td>
                </tr>
            </tbody>
        </v-simple-table>
        <template>
            <div class="text-center">
                <!-- color="#555" -->
                <v-pagination dark v-model="page" :length="5" color="red darken-4">
                </v-pagination>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'GenreMovies',
    data(){
        return {
            page: 1
        }
    },
    //refresh components while changing genre
    beforeRouteUpdate(to, from, next) {
        this.$store.dispatch('getMoviesByGenre', {genre: to.params.id, page: this.page});
        this.page =1;
        next();
    },
    mounted() {
        this.$store.dispatch('getMoviesByGenre', {genre: this.$route.params.id, page: this.page});
    },
    computed: {
        movies() {
            return this.$store.state.movies;
        },
        genreName() {
            return this.$store.getters.getGenreById(this.$route.params.id);
        }
    },
    //watch paginator to update components with next movies
    watch: {
        page(){
            this.$store.dispatch('getMoviesByGenre', {genre: this.$route.params.id, page: this.page});
        }
    },
    methods: {
        goToMovieDetails(movieId){
            this.$router.push('/movie-details/' + movieId);
        }
    }
}
</script>

<style scoped>
.table {
    opacity: 90%;
}
.genreMovies {
    color: white;
}
.movieLine {
    cursor: pointer;
}
</style>