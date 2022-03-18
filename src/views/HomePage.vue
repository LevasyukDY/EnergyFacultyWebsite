<template>
  <div class="home">
    <ParallaxCarousel />
    <h1>Новости</h1>
    <NewsPreview />
    <br />
    <h1>Студенческий деканат</h1>
    <img src="@/assets/images/позитрон.png" alt="pozitron" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum
      veniam nam sed natus rerum maiores fugit magni dolor? Explicabo architecto
      numquam natus, autem laudantium sed voluptatibus non soluta voluptatum.
    </p>
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
