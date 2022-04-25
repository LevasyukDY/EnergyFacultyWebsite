<template>
  <div class="home">
    <!-- <ParallaxCarousel /> -->
    <NewsPreview />
    <StudentDeanery />
  </div>
</template>

<script>
// import ParallaxCarousel from "@/components/ParallaxCarousel";
import NewsPreview from "@/components/NewsPreview";
import StudentDeanery from "@/components/StudentDeanery";

export default {
  name: "HomePage",
  components: {
    // ParallaxCarousel,
    NewsPreview,
    StudentDeanery,
  },
};
</script>

<style scoped></style>
