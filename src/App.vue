<template>
  <v-app id='app'>
    <div class="background">
      <navigation></navigation>
      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "App",

  components: {
    Navigation
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
.background {
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 100%;
}
</style>
