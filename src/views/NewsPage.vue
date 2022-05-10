<template>
  <div class="filters">
    <div class="search">
      <input
        :value="search"
        @input="search = $event.target.value"
        type="text"
        placeholder="Поиск..."
      />
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
      <img
        :srcset="storageURL + post.preview"
        alt="news"
        @click="$router.push('/news/' + post.id)"
      />
      <strong @click="$router.push('/news/' + post.id)">
        {{ post.title }}
      </strong>
      <p>
        {{ post.content.replace(/<[^>]*>/g, " ").replace(/&[^;]*;/g, " ") }}
      </p>
    </div>
  </div>
  <div class="not_found" v-if="news.length == 0 && search == ''">
    <h1>Новостей нет</h1>
  </div>
  <div class="not_found" v-else-if="news.length == 0">
    <h1>Ничего не найдено</h1>
    <div class="not_found__maybe">
      <h3>Возможно, вы имели в виду:</h3>
      <h3 class="not_found__link" @click="changeSearchText">
        {{ changeSearchLang() }}
      </h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    storageURL: "http://127.0.0.1:8000/storage/",
    newsURL: "http://127.0.0.1:8000/api/news?per_page=4&page=1",
    tagsURL: "http://127.0.0.1:8000/api/tags",
    news: [],
    search: "",
    categories: [],
    isActive: {
      0: true,
    },
    alphabet: {
      a: "ф",
      b: "и",
      c: "с",
      d: "в",
      e: "у",
      f: "а",
      g: "п",
      h: "р",
      i: "ш",
      j: "о",
      k: "л",
      l: "д",
      m: "ь",
      n: "т",
      o: "щ",
      p: "з",
      q: "й",
      r: "к",
      s: "ы",
      t: "е",
      u: "г",
      v: "м",
      w: "ц",
      x: "ч",
      y: "н",
      z: "я",
    },
    alphabet_symbols: ["[", "]", ";", "'", "\\", ",", "."],
  }),
  created() {
    axios
      .get(this.newsURL)
      .then((response) => (this.news = response.data["data"].reverse()));
    axios
      .get(this.tagsURL)
      .then((response) => (this.categories = response.data));
  },
  watch: {
    search() {
      axios
        .get(this.newsURL + "&content=" + this.search)
        .then((response) => (this.news = response.data["data"]));
    },
  },
  methods: {
    changeSearchLang() {
      let search_copy = this.search.toLowerCase();
      let reversed_alphabet = {};
      Object.entries(this.alphabet).forEach(([key, value]) => {
        reversed_alphabet[value] = key;
      });
      let result = "";
      let new_char = "";
      for (let i = 0; i < Object.keys(search_copy).length; i++) {
        if (search_copy[i] in this.alphabet) {
          new_char = this.alphabet[search_copy[i]];
          let re = new RegExp(search_copy[i], "gim");
          result += search_copy[i].replace(re, new_char);
        } else if (search_copy[i] in reversed_alphabet) {
          new_char = reversed_alphabet[search_copy[i]];
          let re = new RegExp(search_copy[i], "gim");
          result += search_copy[i].replace(re, new_char);
        } else if (this.alphabet_symbols.includes(search_copy[i])) {
          search_copy[i] == "[" || search_copy[i] == "{"
            ? (new_char = "х")
            : "";
          search_copy[i] == "]" || search_copy[i] == "}"
            ? (new_char = "ъ")
            : "";
          search_copy[i] == ";" || search_copy[i] == ":"
            ? (new_char = "ж")
            : "";
          search_copy[i] == "'" || search_copy[i] == '"'
            ? (new_char = "э")
            : "";
          search_copy[i] == "\\" ||
          search_copy[i] == "|" ||
          search_copy[i] == "`" ||
          search_copy[i] == "~"
            ? (new_char = "ё")
            : "";
          search_copy[i] == "," || search_copy[i] == "<"
            ? (new_char = "б")
            : "";
          search_copy[i] == "." || search_copy[i] == ">"
            ? (new_char = "ю")
            : "";
          result += new_char;
        } else {
          result += search_copy[i];
        }
      }
      return result;
    },
    changeSearchText() {
      this.search = this.changeSearchLang();
    },
    selectTag(id) {
      this.isActive = {};
      this.isActive[id] = !this.isActive[id];
      this.showTaggedNews(id);
    },
    showTaggedNews(id) {
      if (id > 0) {
        axios
          .get(this.newsURL + "&tag_id=" + id)
          .then((response) => (this.news = response.data["data"].reverse()));
      } else {
        axios
          .get(this.newsURL)
          .then((response) => (this.news = response.data["data"].reverse()));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.not_found__maybe {
  display: flex;
  align-items: center;
  .not_found__link {
    padding-left: 5px;
    color: #395fb6;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}

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

    &:hover {
      cursor: pointer;
    }
  }

  strong:hover {
    cursor: pointer;
    text-decoration: underline;
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
