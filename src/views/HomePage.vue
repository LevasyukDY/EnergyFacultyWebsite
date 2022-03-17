<template>
  <div class="home">
    <ParallaxCarousel />
  </div>
</template>

<script>
import ParallaxCarousel from "@/components/ParallaxCarousel";

export default {
  name: "HomePage",
  components: {
    ParallaxCarousel,
  },
};
</script>

<style scoped>
.home {
  margin-left: 46px;
}
</style>
