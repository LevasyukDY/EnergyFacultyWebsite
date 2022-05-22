<template>
  <Carousel :autoplay="5000" :wrap-around="true" :slide-width="100">
    <Slide v-for="slide in slides" :key="slide.id">
      <img :srcset="storageURL + slide.preview" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import "vueperslides/dist/vueperslides.css";
import axios from "axios";
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    parallax: 1,
    parallaxFixedContent: true,
    storageURL: "http://127.0.0.1:8000/storage/",
    newsURL: "http://127.0.0.1:8000/api/news",
    slides: [],
  }),
  mounted() {
    axios
      .get(this.newsURL + "?is_slider_item=1")
      .then((response) => (this.slides = response.data));
  },
  // methods: {
  //   newsDate(post) {
  //     const date = post.created_at.slice(5, 10).split("-");
  //     return date[1] + "/" + date[0];
  //   },
  // },
});
</script>

<style>
.carousel__viewport {
  height: 300px;
  border-radius: 20px;
  padding-left: 100px;
  padding-right: 100px;
  cursor: pointer;
}
</style>

<style scoped>
/* .news__date {
  position: absolute;
  display: block;
  top: 95px;
  left: 10px;
  width: 60px;
  height: 25px;
  border-radius: 5px;
  margin-left: 5px;
  margin-top: 5px;
  background: #ffffff40;
  box-shadow: 0 8px 32px 0 #8787875e;
  backdrop-filter: blur(6px);
  border: 1px solid #ffffff2e;
  z-index: 100;
}

.news__date__day_month {
  color: #ffffffcc;
  font-size: larger;
  font-weight: bold;
  text-shadow: 1px 1px 10px #4d4d4d;
  z-index: 100;
} */
</style>
