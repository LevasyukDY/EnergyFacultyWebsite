<template>
  <img class="post_preview" :srcset="storageURL + post.preview" />
  <h1>{{ post.title }}</h1>
  <span v-html="post.content"></span>
  <div class="images__container">
    <div class="image" v-for="image in post.images" :key="image.id">
      <img :srcset="storageURL + image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    storageURL: "http://127.0.0.1:8000/storage/",
    postURL: "http://127.0.0.1:8000/api/news/",
    post: [],
  }),
  created() {
    axios
      .get(this.postURL + this.$route.params.id)
      .then((response) => (this.post = response.data));
  },
};
</script>

<style scoped>
.post_preview {
  object-fit: cover;
  width: 100%;
  height: 300px;
  max-height: 100%;
  border-radius: 15px;
}

span {
  text-align: justify;
}

.images__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.image img {
  border-radius: 10px;
  margin: 5px;
  max-width: 100%;
}
</style>
