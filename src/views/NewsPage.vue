<template>
  <div class="filters">
    <div class="tags">
      <div class="tag">
        <button :class="{ active: isActiveTag === 0 }" @click="selectTag(0)">
          Все
        </button>
      </div>
      <div class="tag" v-for="cat in tags" :key="cat.id">
        <button
          :class="{ active: isActiveTag === cat.id }"
          @click="selectTag(cat.id)"
        >
          {{ cat.title }}
        </button>
      </div>
    </div>
    <div class="search">
      <input
        class="search__input"
        :value="search"
        @input="search = $event.target.value"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  </div>
  <div class="chairs">
    <div class="chair">
      <button :class="{ active: isActiveChair === 0 }" @click="selectChair(0)">
        Все
      </button>
    </div>
    <div class="chair" v-for="chair in chairs" :key="chair.id">
      <button
        :class="{ active: isActiveChair === chair.id }"
        @click="selectChair(chair.id)"
      >
        {{ chair.title }}
      </button>
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
      <div class="news__date">
        <div class="news__date__day_month">{{ newsDate(post) }}</div>
      </div>
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
  <div ref="observer" class="observer"></div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    storageURL: "http://127.0.0.1:8000/storage/",
    newsURL: "http://127.0.0.1:8000/api/news",
    tagsURL: "http://127.0.0.1:8000/api/tags",
    chairsURL: "http://127.0.0.1:8000/api/chairs",
    page: 0,
    per_page: 8,
    totalPages: 0,
    news: [],
    search: "",
    tags: [],
    chairs: [],
    isActiveTag: 0,
    isActiveChair: 0,
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
    alphabet_symbols: [
      "[",
      "]",
      ";",
      "'",
      "\\",
      ",",
      ".",
      "{",
      "}",
      '"',
      ":",
      "|",
      "<",
      ">",
      "`",
      "~",
    ],
  }),
  created() {
    this.fetchTags();
    this.fetchChairs();
  },
  watch: {
    search() {
      this.page = 1;
      if (this.isActiveTag == 0 && this.isActiveChair == 0) {
        axios
          .get(this.newsURL, {
            params: {
              per_page: this.per_page,
              page: this.page,
              content: this.search,
            },
          })
          .then((response) => (this.news = response.data["data"]));
      } else if (this.isActiveTag == 0 && this.isActiveChair > 0) {
        axios
          .get(this.newsURL, {
            params: {
              chair_id: this.isActiveChair,
              per_page: this.per_page,
              page: this.page,
              content: this.search,
            },
          })
          .then(
            (response) => (
              (this.news = response.data["data"]),
              (this.totalPages = response.data["meta"]["last_page"])
            )
          );
      } else if (this.isActiveTag > 0 && this.isActiveChair == 0) {
        axios
          .get(this.newsURL, {
            params: {
              tag_id: this.isActiveTag,
              per_page: this.per_page,
              page: this.page,
              content: this.search,
            },
          })
          .then(
            (response) => (
              (this.news = response.data["data"]),
              (this.totalPages = response.data["meta"]["last_page"])
            )
          );
      } else if (this.isActiveTag > 0 && this.isActiveChair > 0) {
        axios
          .get(this.newsURL, {
            params: {
              tag_id: this.isActiveTag,
              chair_id: this.isActiveChair,
              per_page: this.per_page,
              page: this.page,
              content: this.search,
            },
          })
          .then(
            (response) => (
              (this.news = response.data["data"]),
              (this.totalPages = response.data["meta"]["last_page"])
            )
          );
      }
    },
  },
  mounted() {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  methods: {
    newsDate(post) {
      const date = post.created_at.slice(5, 10).split("-");
      return date[1] + "/" + date[0];
    },
    loadMorePosts() {
      this.page += 1;
      if (this.isActiveTag === 0) {
        axios
          .get(this.newsURL, {
            params: {
              per_page: this.per_page,
              page: this.page,
              content: this.search,
            },
          })
          .then(
            (response) => (
              (this.news = [...this.news, ...response.data["data"]]),
              (this.totalPages = response.data["meta"]["last_page"])
            )
          );
      } else {
        axios
          .get(this.newsURL, {
            params: {
              tag_id: this.isActiveTag,
              per_page: this.per_page,
              page: this.page,
              content: this.search,
            },
          })
          .then(
            (response) => (
              (this.news = [...this.news, ...response.data["data"]]),
              (this.totalPages = response.data["meta"]["last_page"])
            )
          );
      }
    },
    fetchTags() {
      axios.get(this.tagsURL).then((response) => (this.tags = response.data));
    },
    fetchChairs() {
      axios
        .get(this.chairsURL)
        .then((response) => (this.chairs = response.data));
    },
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
      this.isActiveTag = id;
      this.page = 1;
      if (id > 0 && this.isActiveChair > 0) {
        axios
          .get(this.newsURL, {
            params: {
              tag_id: id,
              per_page: this.per_page,
              page: this.page,
              content: this.search,
              chair_id: this.isActiveChair,
            },
          })
          .then((response) => (this.news = response.data["data"]));
      } else if (id > 0 && this.isActiveChair == 0) {
        axios
          .get(this.newsURL, {
            params: {
              tag_id: id,
              per_page: this.per_page,
              page: this.page,
              content: this.search,
            },
          })
          .then((response) => (this.news = response.data["data"]));
      } else if (id == 0 && this.isActiveChair > 0) {
        axios
          .get(this.newsURL, {
            params: {
              per_page: this.per_page,
              page: this.page,
              content: this.search,
              chair_id: this.isActiveChair,
            },
          })
          .then((response) => (this.news = response.data["data"]));
      } else {
        axios
          .get(this.newsURL, {
            params: {
              per_page: this.per_page,
              page: this.page,
              content: this.search,
            },
          })
          .then((response) => (this.news = response.data["data"]));
      }
    },
    selectChair(id) {
      this.isActiveChair = id;
      this.page = 1;
      if (id > 0 && this.isActiveTag > 0) {
        axios
          .get(this.newsURL, {
            params: {
              tag_id: this.isActiveTag,
              per_page: this.per_page,
              page: this.page,
              content: this.search,
              chair_id: id,
            },
          })
          .then((response) => (this.news = response.data["data"]));
      } else if (id > 0 && this.isActiveTag == 0) {
        axios
          .get(this.newsURL, {
            params: {
              chair_id: id,
              per_page: this.per_page,
              page: this.page,
              content: this.search,
            },
          })
          .then((response) => (this.news = response.data["data"]));
      } else if (id == 0 && this.isActiveTag > 0) {
        axios
          .get(this.newsURL, {
            params: {
              per_page: this.per_page,
              page: this.page,
              content: this.search,
              tag_id: this.isActiveTag,
            },
          })
          .then((response) => (this.news = response.data["data"]));
      } else {
        axios
          .get(this.newsURL, {
            params: {
              per_page: this.per_page,
              page: this.page,
              content: this.search,
            },
          })
          .then((response) => (this.news = response.data["data"]));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// .observer {
//   background-color: #39b665;
//   height: 30px;
// }

.pages__wrapper {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

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
  position: relative;

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
.tag,
.chair {
  button {
    opacity: 60%;
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
}

.chair {
  button {
    background-color: var(--chair-buttons-color);
  }
}

.tag {
  button {
    background-color: var(--buttons-color);
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

.tags {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-flow: row wrap;
}

.tag {
  margin: 0px 7px;
}

.chairs {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  margin-bottom: 15px;
}

.chair {
  margin: 0px 7px;
}

.search__input {
  width: 30ch;
  border: 2px solid var(--sidebar-link-hover);
  border-radius: 15px;
  font-size: 16px;
  padding: 2px 10px;
  background-color: var(--bg-color);
  color: var(--font-color);
}

.search__input:focus {
  border-color: var(--sidebar-link-hover);
  outline: 0;
  outline: thin dotted \9;
  /* IE6-9 */

  -webkit-box-shadow: inset 0 1px 1px #00000013,
    0 0 8px var(--sidebar-link-active);
  -moz-box-shadow: inset 0 1px 1px #00000013, 0 0 8px var(--sidebar-link-active);
  box-shadow: inset 0 1px 1px #00000013, 0 0 8px var(--sidebar-link-active);
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
  .tags {
    margin-bottom: 10px;
  }
  .chairs {
    justify-content: center;
  }
}

@media (max-width: 780px) {
  .tags {
    flex-grow: 1;
    justify-content: center;
  }
  .tag {
    margin-bottom: 5px;
  }

  .chairs {
    flex-grow: 1;
    justify-content: center;
  }
  .chair {
    margin-bottom: 5px;
  }
}

@media (max-width: 420px) {
  .search__input {
    width: 24ch;
  }
}
</style>
