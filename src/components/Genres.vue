<template>
    <v-container class="genres">
        <h1>Find by genre</h1>
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="(genre, i) in genres" :key="i">
                <v-hover v-slot:default="{hover}">
                    <v-responsive>
                        <v-card dark :class="{'on-hover': hover}" class="ma-3 pa-2">
                            <v-card-actions>
                                <v-img :src="genre.picture" height="200" @click="goToGenre(genre.id)" class="genreImg">
                                    <v-container fill-height >
                                        <v-layout fill-height >
                                            <v-flex xs12 align-self-center>
                                                <span class="px-1 textBorder">{{genre.name}}</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-img>
                            </v-card-actions>
                        </v-card>
                    </v-responsive>
                </v-hover>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Genres',
    computed: {
        genres(){
            var genreList = this.$store.state.genres
                .filter((value)=>{
                    return value.name !== "TV Movie"
                });
            return genreList;
        }
    },
    // mounted() {
    //     this.$store.dispatch('getGenres');
    // },
    methods: {
        goToGenre(genreId) {
            this.$router.push('/genre/' + genreId);
        }
    }
}
</script>

<style scoped>
.v-card {
  transition: all .4s ease-in-out;
  filter: sepia(80%)
}
.v-card:hover {
    transform: scale(1.2);
    /* filter: brightness(120%); */
    filter: sepia(0%)
}
.genres {
    color: white;
    text-align: center;
}
.genreImg {
    cursor: pointer;
}
.textBorder {
    -webkit-text-stroke: 2px rgb(48, 48, 48);
    /* background: rgba(48, 48, 48, 0.4); */
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 40px;
    font-weight:900;
}
</style>