<template>
  <vueper-slides ref="myVueperSlides" :parallax="parallax" fixed-height="true">
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="storageURL + slide.preview"
      :title="parallaxFixedContent ? slide.title : ''"
      :content="parallaxFixedContent ? slide.content : ''"
      @click="$router.push('/news/' + slide.id)"
    />
    <!-- <div class="news__date">
      <div
        class="news__date__day_month"
        v-for="slide in slides"
        :key="slide.id"
      >
        {{ newsDate(slide) }}
      </div>
    </div> -->
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "axios";

export default {
  components: { VueperSlides, VueperSlide },
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
};
</script>

<style>
.vueperslides--fixed-height {
  height: 300px;
}
.vueperslides__parallax-wrapper {
  border-radius: 20px;
}
.vueperslide__content-wrapper {
  padding-left: 100px;
  padding-right: 100px;
  cursor: pointer;
}
.vueperslide__title {
  font-size: 1.5em;
  color: #fff;
  text-shadow: black 1px 1px 5px;
}
.vueperslide__content {
  color: #fff;
  text-shadow: black 1px 1px 5px;
}

.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom) {
  height: 80%;
}

@media (max-width: 600px) {
  .vueperslide__title {
    font-size: 1em;
  }
  .vueperslide__content {
    font-size: 0.65em;
  }
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
