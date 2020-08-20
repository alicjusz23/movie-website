<template>
  <div class="about">
    <about-content></about-content>
  </div>
</template>

<script>
import AboutContent from '@/components/AboutContent'


export default {
  name: "About",
  components: { AboutContent}
};
</script>

<style scoped>
.about {
  color: white;
}
.darkCard {
  opacity: 90%;
}
a{
  color: white;
}
</style>