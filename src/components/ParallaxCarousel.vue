<template>
  <!-- <button
    @click="
      parallax *= -1;
      $refs.myVueperSlides.refreshParallax();
    "
  >
    reverse parallax effect
  </button>
  <button @click="parallaxFixedContent = !parallaxFixedContent">
    Add a fix title
  </button> -->

  <vueper-slides
    ref="myVueperSlides"
    :parallax="parallax"
    :parallax-fixed-content="parallaxFixedContent"
  >
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :title="parallaxFixedContent ? slide.title : ''"
      :content="parallaxFixedContent ? slide.content : ''"
    />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    parallax: 1,
    parallaxFixedContent: true,
    slides: [
      {
        title: "RuCode 2022",
        content: "Запись до 25 марта",
        image: require("@/assets/images/1.jpeg"),
      },
      {
        title: "Студенты ЭФ ЗабГУ приняли участие в Наука++",
        content: "Посмотри как всё происходило",
        image: require("@/assets/images/3.jpeg"),
      },
      {
        title: "Дистанционка отменяется",
        content: "С 15 февраля переходим в очный формат обучения",
        image: require("@/assets/images/2.jpeg"),
      },
      // Other slides.
    ],
  }),
};
</script>

<style scoped></style>
