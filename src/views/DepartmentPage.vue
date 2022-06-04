<template>
  <div class="video" v-if="chairs.video">
    <iframe
      :src="convertVideoURL(chairs.video)"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <h1>{{ chairs?.full_title }}</h1>
  <p><b>Адрес:</b> {{ chairs?.address }}, кабинет {{ chairs?.cabinet }}</p>
  <p><b>Телефон:</b> {{ chairs?.phone_number }}</p>
  <p><b>E-mail:</b> {{ chairs?.email }}</p>
  <span v-html="chairs?.description"></span>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    chairsURL: "http://127.0.0.1:8000/api/chairs/",
    chairs: [],
  }),
  created() {
    axios
      .get(this.chairsURL + this.$route.params.id)
      .then((response) => (this.chairs = response.data));
  },
  methods: {
    convertVideoURL(video) {
      let splittedVideo = video.split("=");
      return "https://www.youtube.com/embed/" + splittedVideo[1];
    },
  },
};
</script>

<style scoped>
span {
  text-align: justify;
}

.video {
  display: flex;
  justify-content: center;
  height: 70vh;
}

iframe {
  width: 100%;
}

p {
  text-align: justify;
}
</style>
