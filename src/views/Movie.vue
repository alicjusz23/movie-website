<template>
    <v-container class="details">
        <div>
            <h1>Movie details</h1>
        </div>
        <v-form v-on:submit.prevent >
            <v-row>
                <v-spacer></v-spacer>
                <v-col :cols="5">
                    <v-text-field label="Movie title" autocomplete="off" v-model="title" @keydown.enter="searchMovie(title)" dark>
                    </v-text-field>
                </v-col>
                <v-col :cols="3">
                    <v-btn @click="searchMovie(title)" block>
                        Search
                    </v-btn>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-form>
        <movie-details></movie-details>
    </v-container>
</template>

<script>
import MovieDetails from '@/components/MovieDetails'

export default {
    name: 'Movie',
    components: {
        MovieDetails
    },
    //refresh components while changing movie
    beforeRouteUpdate(to, from, next) {
        if(this.$route.params.id)
            this.$store.dispatch('getMovieById', to.params.id);
        next();
    },
    data(){
        return {
            title: ''
        }
    },
    methods: {
        async searchMovie(){
            if(this.title!==''){
                try{
                    await this.$store.dispatch('getMovieByTitle', this.title)
                        .then(() => {
                            this.$router.push({ path: `/movie/${this.$store.state.id}` })
                                //avoid recurring nacigation
                                .catch(()=>{location.reload()});
                        })
                        //avoid recurring nacigation
                        //.catch(()=>{});
                }catch(error){
                    //this.$router.push({ path: `/movie/`});
                    //this.error=1;
                    //throw new Error(error)
                }
                this.title='';
            }
        },
    },
    mounted() {
        if(this.$route.params.id){
            this.$store.dispatch('getMovieById', this.$route.params.id);
        }
    },
}
</script>

<style scoped>
.details {
    color: white;
}
.darkCard {
    opacity: 90%;
}
</style>