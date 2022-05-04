<template>
  <h1 @click="$router.push('/news')">Новости</h1>
  <div class="news">
    <div class="news__content" v-for="(post, i) in news.slice(0, 4)" :key="i">
      <img
        :srcset="storageURL + post.preview"
        alt="news"
        @click="$router.push('/news/' + post.id)"
      />
      <strong @click="$router.push('/news/' + post.id)">
        {{ post.title }}
      </strong>
      <p>
        {{ normalizePostContent(i) }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    storageURL: "http://127.0.0.1:8000/storage/",
    newsURL: "http://127.0.0.1:8000/api/news",
    news: [],
  }),
  created() {
    axios
      .get(this.newsURL)
      .then((response) => (this.news = response.data.reverse()));
  },
  methods: {
    normalizePostContent(id) {
      return this.news[id].content
        .replace(/<[^>]*>/g, " ")
        .replace(/&[^;]*;/g, " ");
    },
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

.news__content p {
  height: 130px;
  overflow: hidden;
}

.news__content img {
  width: 100%;
  height: 300px;
  max-height: 100%;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
}

img:hover,
strong:hover {
  cursor: pointer;
  text-decoration: underline;
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
