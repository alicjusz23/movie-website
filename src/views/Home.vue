<template>
    <div>
      <span>
        <popular></popular>
        <genres></genres>
      </span>
    </div>
</template>

<script>
import Genres from '@/components/Genres';
import Popular from '@/components/Popular';

export default {
  name: "Home",
  components: {
    Genres,
    Popular
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
