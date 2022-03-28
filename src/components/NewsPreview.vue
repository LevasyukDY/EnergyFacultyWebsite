<template>
  <h1>Новости</h1>
  <div class="news">
    <div class="news__content">
      <img src="@/assets/images/2.jpeg" alt="news" />
      <strong>Заголовок</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nobis
        nulla doloremque ea dolorem id asperiores laudantium culpa perferendis!
        Sunt itaque accusamus delectus commodi. Molestias eaque consectetur
        autem asperiores corrupti.
      </p>
    </div>
    <div class="news__content">
      <img src="@/assets/images/3.jpeg" alt="news" />
      <strong>Заголовок</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nobis
        nulla doloremque ea dolorem id asperiores laudantium culpa perferendis!
        Sunt itaque accusamus delectus commodi. Molestias eaque consectetur
        autem asperiores corrupti.
      </p>
    </div>
    <div class="news__content">
      <img src="@/assets/images/1.jpeg" alt="news" />
      <strong>Заголовок</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nobis
        nulla doloremque ea dolorem id asperiores laudantium culpa perferendis!
        Sunt itaque accusamus delectus commodi. Molestias eaque consectetur
        autem asperiores corrupti.
      </p>
    </div>
    <div class="news__content">
      <img src="@/assets/images/2.jpeg" alt="news" />
      <strong>Заголовок</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nobis
        nulla doloremque ea dolorem id asperiores laudantium culpa perferendis!
        Sunt itaque accusamus delectus commodi. Molestias eaque consectetur
        autem asperiores corrupti.
      </p>
    </div>
  </div>
  <div class="news__link">
    <a href="#">Перейти к новостям...</a>
  </div>
</template>

<script></script>

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
}

.news__link {
  height: 22px;
}

.news__link a {
  float: right;
  color: #838383;
}

@media (max-width: 600px) {
  .news {
    flex-direction: column;
  }
  .news__content {
    width: 100%;
  }
}
</style>
