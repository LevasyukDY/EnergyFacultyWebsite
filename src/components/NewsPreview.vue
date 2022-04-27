<template>
  <h1 @click="$router.push('/news')">Новости</h1>
  <div class="news">
    <div class="news__content" v-for="(post, i) in news" :key="i">
      <img :srcset="storageURL + post.preview" alt="news" />
      <strong>{{ post.title }}</strong>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque labore
        sint iure ab blanditiis voluptatum repellendus! Maxime, incidunt
        debitis? Perspiciatis harum nesciunt maxime repellendus commodi
        assumenda officiis non nisi quae.
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    storageURL: "http://127.0.0.1:8000/storage/",
    news: [],
  }),
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/news?is_slider_item=1")
      .then((response) => (this.news = response.data));
  },
};
</script>

<style scoped>
.news {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.news__content {
  height: 100%;
  width: 24%;
}

.news__content img {
  width: 100%;
  height: 300px;
  max-height: 100%;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
}

h1:hover {
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 800px) {
  .news {
    flex-direction: column;
  }
  .news__content {
    width: 100%;
  }
}
</style>
