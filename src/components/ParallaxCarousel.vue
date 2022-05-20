<template>
  <Carousel :autoplay="5000" :wrap-around="true">
    <Slide
      v-for="slide in slides"
      :key="slide.id"
      @click="$router.push('/news/' + slide.id)"
    >
      <img :srcset="storageURL + slide.preview" />
      <p>{{ slide.title }}</p>
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
  border-radius: 20px;
}

.carousel__viewport:hover {
  cursor: pointer;
}

.carousel__prev,
.carousel__next {
  background: #ffffff40;
  box-shadow: 0 8px 32px 0 #8787875e;
  backdrop-filter: blur(6px);
  border: 1px solid #ffffff2e;
}

.carousel__prev {
  top: 50%;
  left: 25px;
}

.carousel__next {
  top: 50%;
  right: 25px;
}

.carousel__pagination {
  padding: 0;
  position: absolute;
  top: 250px;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0);
  z-index: 5;
}

.carousel__pagination-button {
  border-radius: 20px;
  height: 10px;
  width: 10px;
  background: #ffffff40;
  box-shadow: 0 8px 32px 0 #8787875e;
  backdrop-filter: blur(6px);
  border: 1px solid #ffffff2e;
}

.carousel__pagination-button--active {
  background-color: #c5c5c5;
}

.carousel__icon {
  color: #ffffffcc;
}
</style>

<style scoped>
img {
  object-fit: cover;
  width: 100%;
  height: 300px;
}

p {
  position: absolute;
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  text-shadow: #4d4d4d 1px 1px 10px;
  background: #ffffff40;
  box-shadow: 0 8px 32px 0 #8787875e;
  backdrop-filter: blur(6px);
  border-radius: 20px;
  padding: 5px 15px;
  margin-left: 80px;
  margin-right: 80px;
}
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
