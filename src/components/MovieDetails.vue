<template>
    <v-container>
        <v-row>
            <v-spacer></v-spacer>
            <v-col :cols="9">
                <v-card dark class="darkCard">
                    <v-row v-if="!error">
                        <v-col v-if="movie" class="text-justify ma-4">
                            <v-card-title>
                                <h2>{{movie.title}}</h2>
                            </v-card-title>
                            <v-card-subtitle>
                                {{movie.tagline}}
                            </v-card-subtitle>
                            <v-card-text>
                                <h4>Average vote: {{movie.vote_average}}</h4>
                                <h5>Vote count: {{movie.vote_count}}</h5>
                                <h5>Popularity: {{movie.popularity}}</h5>
                                <div class="my-2">
                                    <h5>Release date: {{movie.release_date}}</h5>
                                    <div v-if="movie.production_countries && movie.production_countries.length!==0">
                                        <h5>Production:
                                        </h5>
                                        <span v-for="(c, i) in movie.production_countries" :key="i"> 
                                            <img class="mx-1" :src="'https://www.countryflags.io/' + c.iso_3166_1 + '/flat/32.png'" :alt="c.name" :title="c.name"/>
                                        </span>
                                    </div>
                                </div>
                                <p class="mt-5">
                                    {{movie.overview}}
                                </p>
                                <p v-if="movie.genres">
                                    Genres:
                                    <v-layout row wrap>
                                        <v-list v-for="(g, i) in movie.genres" :key="i">
                                            <v-chip class="mx-1" :to="'/genre/' + g.id">{{g.name}}</v-chip>
                                        </v-list>
                                    </v-layout>
                                </p>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon v-if="movie.adult" v-bind="attrs" v-on="on" class="me-4">{{adultIcon}}</v-icon>
                                    </template>
                                    <span>For adults</span>
                                </v-tooltip>
                                <v-btn v-if="movie.imdb_id" @click="goToImdb(movie.imdb_id)">Go to IMDB</v-btn>
                            </v-card-text>
                        </v-col>
                        <v-col v-if="movie" class="ma-4">
                            <v-responsive>
                                <v-img v-if="movie.poster_path" :src="'http://image.tmdb.org/t/p/w185/' + movie.poster_path"></v-img>
                            </v-responsive>
                        </v-col>
                    </v-row>
                    <v-row v-else>
                        <v-card>
                            <v-card-text>
                                Sorry, I could not find your movie!
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
</template>

<script>
import { mdiAccountCancel } from '@mdi/js';

export default {
    name: 'MovieDetails',
    data(){
        return {
            adultIcon: mdiAccountCancel
        }
    },
    methods: {
        goToImdb(path){
            window.location.href = 'https://www.imdb.com/title/' + path;
        }
    },
    computed: {
        error(){
            return this.$store.state.movieError;
        },
        movie() {
            if(this.$route.params.id){
                return this.$store.state.movies;
            }else{
                //return this.$store.state.movies[0];
                return null;
            }
        }
    }
}
</script>