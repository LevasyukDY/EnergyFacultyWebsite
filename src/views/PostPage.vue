<template>
  <div class="post__content">
    <img class="post_preview" :srcset="storageURL + post.preview" />
    <div class="news__date">
      <div class="news__date__day_month">{{ newsDate(post) }}</div>
    </div>
    <h1>{{ post.title }}</h1>
    <span v-html="post.content"></span>
  </div>
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
  mounted() {
    axios
      .get(this.postURL + this.$route.params.id)
      .then((response) => (this.post = response.data));
  },
  methods: {
    newsDate(post) {
      const date = (post.created_at || "").slice(5, 10).split("-");
      const year = (post.created_at || "").slice(0, 4);
      return date[1] + "/" + date[0] + "/" + year;
    },
  },
};
</script>

<style scoped>
.post__content {
  position: relative;
}

.news__date {
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  width: 105px;
  height: 25px;
  border-radius: 10px;
  margin-left: 5px;
  margin-top: 5px;
  background: #ffffff40;
  box-shadow: 0 8px 32px 0 #8787875e;
  backdrop-filter: blur(6px);
  border: 1px solid #ffffff2e;
}

.news__date__day_month {
  color: #ffffffcc;
  font-size: larger;
  font-weight: bold;
  text-shadow: 1px 1px 10px #4d4d4d;
}

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
