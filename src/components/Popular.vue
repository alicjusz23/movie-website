<template>
    <v-container class="popular">
        <h1 class="text-center white--text">Discover top-rated movies!</h1>
        <v-carousel cycle show-arrows-on-hover height="500">
            <v-carousel-item v-for="(q, j) in popular" :key="j">
                <v-layout row wrap>
                    <v-flex xs12 sm6 md6 lg4 v-for="(p, i) in q" :key="i">
                        <v-card class="pa-5 ma-5" height="430" dark>
                            <v-responsive>
                                <router-link :to="'/movie/' + p.id">
                                    <v-img v-if="p.poster_path" height="300" contain :src="posterPath + p.poster_path"></v-img>
                                </router-link>
                            </v-responsive>
                            <v-card-text class="text-justify">
                                <router-link :to="'/movie/' + p.id">
                                    <div class="title">
                                        {{p.title}}
                                    </div>
                                </router-link>
                                <p>
                                    <v-icon size="16">
                                        {{starIcon}}
                                    </v-icon>
                                    Average vote: {{p.vote_average}}
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
import { mdiStar } from '@mdi/js';

export default {
    name: 'Popular',
    data(){
        return {
            starIcon: mdiStar,
            posterPath: 'http://image.tmdb.org/t/p/w185/',
            windowSize: window.innerWidth
        }
    },
    computed: {
        popular(){
            var pop = this.$store.state.popular;
            var i, j, chunk;
            var r = [];
            //calculate image carousel elements based on window width
            if(this.windowSize<1200 && this.windowSize>500){
                chunk = 2;
            } else if(this.windowSize<=500){
                chunk = 1;
            }else
                chunk = 3;
            for (i=0, j=pop.length; i<j; i+=chunk){
                r.push(pop.slice(i, i+chunk));
            }
            return r;
        }
    },
    mounted() {
        this.$store.dispatch('getPopular');
        window.onresize = () => {
            this.windowSize = window.innerWidth;
        }
    }
}
</script>

<style scoped>

.v-application a {
    color: white;
    text-decoration: none;
}
</style>