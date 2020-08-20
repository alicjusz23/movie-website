<template>
    <div class="genre">
        <genre-movies></genre-movies>
    </div>
</template>

<script>
import GenreMovies from '@/components/GenreMovies';
export default {
    name: 'Genre',
    components: {
        GenreMovies
    }
}
</script>

<style scoped>
.table {
    opacity: 90%;
}
.genre {
    color: white;
}
.movieLine {
    cursor: pointer;
}
</style>