<template>
  <vueper-slides ref="myVueperSlides" :parallax="parallax" fixed-height="true">
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="storageURL + slide.preview"
      :title="parallaxFixedContent ? slide.title : ''"
      :content="parallaxFixedContent ? slide.content : ''"
    />
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
    slides: [],
  }),
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/news?is_slider_item=1")
      .then((response) => (this.slides = response.data.reverse()));
  },
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
