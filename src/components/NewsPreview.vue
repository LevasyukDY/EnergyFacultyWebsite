<template>
  <h1 @click="$router.push('/news')">Новости</h1>
  <div class="news">
    <div class="news__content" v-for="(post, i) in news.slice(0, 4)" :key="i">
      <img
        :srcset="storageURL + post.preview"
        alt="news"
        @click="$router.push('/news/' + post.id)"
      />
      <div class="news__date">
        <div class="news__date__day_month">{{ newsDate(post) }}</div>
      </div>
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
    newsURL: "http://127.0.0.1:8000/api/news?per_page=4&page=1",
    news: [],
  }),
  created() {
    axios
      .get(this.newsURL)
      .then((response) => (this.news = response.data["data"]));
  },
  methods: {
    normalizePostContent(id) {
      return this.news[id].content
        .replace(/<[^>]*>/g, " ")
        .replace(/&[^;]*;/g, " ")
        .replace(/ +/g, " ");
    },
    newsDate(post) {
      const date = post.created_at.slice(5, 10).split("-");
      return date[1] + "/" + date[0];
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
  position: relative;
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

.news__date {
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  width: 60px;
  height: 25px;
  border-radius: 5px;
  margin-left: 5px;
  margin-top: 5px;
  background: #ffffff40;
  box-shadow: 0 8px 32px 0 #1f26875e;
  backdrop-filter: blur(6px);
  border: 1px solid #ffffff2e;
}

.news__date__day_month {
  color: #ffffffde;
  font-size: larger;
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
