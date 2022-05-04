<template>
  <div class="filters">
    <div class="search">
      <input
        :value="search"
        @input="search = $event.target.value"
        type="text"
        placeholder="Поиск..."
      />
      <i class="fas fa-magnifying-glass" />
    </div>
    <div class="categories">
      <div class="category">
        <button :class="{ active: isActive[0] }" @click="selectTag(0)">
          Все
        </button>
      </div>
      <div class="category" v-for="(cat, i) in categories" :key="i">
        <button
          :class="{ active: isActive[cat.id] }"
          @click="selectTag(cat.id)"
        >
          {{ cat.title }}
        </button>
      </div>
    </div>
  </div>
  <div class="news" v-for="i in Math.ceil(news.length / 4)" :key="i">
    <div
      class="news__content"
      v-for="(post, j) in news.slice((i - 1) * 4, (i - 1) * 4 + 4)"
      :key="j"
    >
      <img :srcset="storageURL + post.preview" alt="news" />
      <strong>{{ post.title }}</strong>
      <p>
        {{ post.content.replace(/<[^>]*>/g, " ").replace(/&[^;]*;/g, " ") }}
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
    tagsURL: "http://127.0.0.1:8000/api/tags",
    news: [],
    search: "",
    categories: [],
    isActive: {
      0: true,
    },
  }),
  created() {
    axios
      .get(this.newsURL)
      .then((response) => (this.news = response.data.reverse()));
    axios
      .get(this.tagsURL)
      .then((response) => (this.categories = response.data));
  },
  watch: {
    search() {
      axios
        .get(this.newsURL + "?content=" + this.search)
        .then((response) => (this.news = response.data));
    },
  },
  methods: {
    selectTag(id) {
      this.isActive = {};
      this.isActive[id] = !this.isActive[id];
      this.showTaggedNews(id);
    },
    showTaggedNews(id) {
      if (id > 0) {
        axios
          .get(this.newsURL + "?tag_id=" + id)
          .then((response) => (this.news = response.data.reverse()));
      } else {
        axios
          .get(this.newsURL)
          .then((response) => (this.news = response.data.reverse()));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.news__content {
  height: 100%;
  width: 24%;
  margin: 0 5px;

  img {
    width: 100%;
    height: 300px;
    max-height: 100%;

    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  p {
    height: 130px;
    overflow: hidden;
  }
}

button {
  background-color: #395fb6;
  opacity: 80%;
  transition: 0.3s;

  border: none;
  color: white;
  text-shadow: #515151 1px 1px 2px;
  padding: 5px 15px;

  text-align: center;
  text-decoration: none;

  display: inline-block;
  border-radius: 15px;

  &:hover {
    opacity: 100%;
    transition: 0.3s;
    cursor: pointer;
  }

  &.active {
    opacity: 100%;
  }
}
svg {
  margin: 5px 15px;
  &:hover {
    cursor: pointer;
  }
}
</style>

<style scoped>
.filters {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.search {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.categories {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-flow: row wrap;
}

.category {
  margin: 0px 7px;
}

input {
  width: 30ch;
  border: 2px solid #395fb6;
  border-radius: 15px;
  font-size: 16px;
  padding: 2px 10px;
}

.news {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

@media (max-width: 800px) {
  .news {
    flex-direction: column;
  }
  .news__content {
    width: 100%;
  }
}

@media (max-width: 1085px) {
  .filters {
    flex-direction: column;
  }
  .search {
    margin-bottom: 10px;
  }
}

@media (max-width: 765px) {
  .categories {
    flex-grow: 1;
    justify-content: center;
  }
  .category {
    margin-bottom: 5px;
  }
}

@media (max-width: 420px) {
  input {
    width: 24ch;
  }
}
</style>
