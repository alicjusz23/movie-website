<template>
    <div>
        <div >
        <v-navigation-drawer v-model="drawer" app dark disable-resize-watcher temporary>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item v-if="!item.group" :key="index" @click="goToNavItem(item.url)">
                        <v-list-item-content>
                            {{item.title}}
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-group no-action v-else :key="index">
                        <template v-slot:activator>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                        </template>
                        <v-list-item v-for="(g, i) in genres" :key="i" link @click="goToGenre(g.id)">
                            <v-list-item-title class="text-caption" v-text="g.name"></v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        </div>
        <div>
        <v-app-bar app color="black" dark >
            <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <div class="hidden-sm-and-down">
                <v-icon size="60" class="ma-2">{{filmIcon}}</v-icon>
                <v-btn class="ma-2" outlined to="/">Home</v-btn>
                <v-btn class="ma-2" outlined @click="goToMovieRoute()">Find movie</v-btn>
                <v-menu offset-y dark >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="ma-2" outlined v-bind="attrs"
                            v-on="on">Find by genre</v-btn>
                    </template>
                    <v-row>
                        <v-col class="pa-0">
                            <v-list class="pa-0" v-for="(genre, i) in genres.slice(0,7)" :key="i">
                                <v-list-item class="px-5" @click="goToGenre(genre.id)">
                                    <v-list-item-title class="caption">{{genre.name}}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col class="pa-0">
                            <v-list class="pa-0" v-for="(genre, i) in genres.slice(7,14)" :key="i">
                                <v-list-item class="px-5" @click="goToGenre(genre.id)">
                                    <v-list-item-title class="caption">{{genre.name}}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col class="pa-0">
                            <v-list class="pa-0" v-for="(genre, i) in genres.slice(14,21)" :key="i">
                                <v-list-item class="px-5" @click="goToGenre(genre.id)">
                                    <v-list-item-title class="caption">{{genre.name}}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-menu>
                <v-btn class="ma-2" outlined disabled>Join</v-btn>
                <v-btn class="ma-2" outlined to="/about">About</v-btn>
            </div>
        </v-app-bar>
        </div>
    </div>
</template>

<script>
import { mdiVideoVintage } from '@mdi/js';

export default {
    name: 'Navigation',
    data() {
        return {
            filmIcon: mdiVideoVintage,
            drawer: false,
            items: [
                {title: 'Home', url: '/', group: false},
                {title: 'Find Movie', url: '/movie', group: false},
                {title: 'Find By Genre', url: '/', group: true},
                //{title: 'Join', url: '/join', group: false},
                {title: 'About', url: '/about', group: false}
            ]
        }
    },
    computed: {
        genres() {
            return this.$store.getters.getGenres;
        },
        // drawer(){
        //     if(window.innerHeight<700){
        //         return true;
        //     } else
        //         return false;
        // }
    },
    methods: {
        goToGenre(id){
            //this.$router.push("/genre/" + id);
            this.$router.push({ name: 'Genre', params: { id: id }});
        },
        goToNavItem(item){
            if(item!=='/movie'){
            this.$router.push(item)
                //avoid redundant navigation error
                .catch(()=>{
                    location.reload();
                });
            }else{
                this.goToMovieRoute();
            }
        },
        goToMovieRoute(){
            this.$store.dispatch('clearMovieError');
            this.$router.push('/movie')
                //avoid redundant navigation error
                .catch(()=>{
                    location.reload();
                });
        }
    }
}
</script>

<style scoped>
.v-menu__content{
    background-color: #1e1e1e;
}
</style>