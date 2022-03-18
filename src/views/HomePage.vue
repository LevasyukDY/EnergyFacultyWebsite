<template>
  <div class="home">
    <ParallaxCarousel />
    <h1>Новости</h1>
    <NewsPreview />
  </div>
</template>

<script>
import ParallaxCarousel from "@/components/ParallaxCarousel";
import NewsPreview from "@/components/NewsPreview";

export default {
  name: "HomePage",
  components: {
    ParallaxCarousel,
    NewsPreview,
  },
};
</script>

<style scoped>
.home {
  margin-left: 54px;
}
</style>
