<template>
  <div class="home">
    <ParallaxCarousel />
    <NewsPreview />
    <h1 @click="$router.push('/faculty')">О факультете</h1>
    <iframe
      src="https://www.google.com/maps/embed?pb=!4v1652504903560!6m8!1m7!1sCAoSLEFGMVFpcE5xVVhlVlZFc1JzTGxrdHJOYzU4ZGRnNGVIeGV0b3dIdThodllq!2m2!1d52.0345972!2d113.529075!3f355.40899997066197!4f19.6765493257372!5f0.4000000000000002"
      allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <StudentDeanery />
    <div class="telegram_bot__info">
      <div class="telegram_bot__info__title">
        <h1>
          <a href="https://t.me/zabgu_energy_faculty_bot">Telegram-бот</a>
        </h1>
      </div>
      <div class="telegram_bot__content">
        <div class="telegram_bot__image">
          <img src="@/assets/TBot.gif" alt="tbot" />
        </div>
        <div class="telegram_bot__description">
          <div class="telegram_bot__text">
            <p>
              Студентам, как и преподавателям регулярно необходимо узнавать
              расписание занятий определённого преподавателя или группы, а также
              искать контактные данные сотрудников факультета.
            </p>
            <p>
              С этими задачами умело справляется Telegram-бот Энергетического
              факультета ЗабГУ.
            </p>
          </div>
          <img src="@/assets/qr.jpeg" alt="qr" />
        </div>
      </div>
    </div>
    <h1 @click="$router.push('/contacts')">Как добраться</h1>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4908.907580053773!2d113.52509651413787!3d52.03504759228389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5dcbcaba0e006963%3A0x8705f9a347a362a6!2z0JHQsNGA0LPRg9C30LjQvdGB0LrQsNGPINGD0LsuLCA0OSwg0KfQuNGC0LAsINCX0LDQsdCw0LnQutCw0LvRjNGB0LrQuNC5INC60YDQsNC5LCA2NzIwMzk!5e0!3m2!1sru!2sru!4v1651315026859!5m2!1sru!2sru"
      allowfullscreen="false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
import ParallaxCarousel from "@/components/ParallaxCarousel";
import NewsPreview from "@/components/NewsPreview";
import StudentDeanery from "@/components/StudentDeanery";

export default {
  name: "HomePage",
  components: {
    ParallaxCarousel,
    NewsPreview,
    StudentDeanery,
  },
};
</script>

<style scoped>
iframe {
  border: 0;
  width: 100%;
  height: 60vh;
  margin-bottom: 20px;
  border-radius: 20px;
}

h1:hover {
  cursor: pointer;
  text-decoration: underline;
}

.telegram_bot__info__title h1 a {
  text-decoration: none;
  color: #2c3e50;
}

.telegram_bot__info__title h1 .sidebar-dark-theme {
  color: #dbdbdb;
}

h1 a:hover {
  text-decoration: underline;
}

img {
  height: 90vh;
  border-radius: 20px;
}

.telegram_bot__text {
  margin: 10px 0;
  padding: 0 40px;
}

.telegram_bot__content {
  display: flex;
  align-items: flex-start;
}

.telegram_bot__description {
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76vh;
  flex-flow: row wrap;
  align-content: space-around;
}

.telegram_bot__description img {
  width: 15rem;
  height: 15rem;
  border-radius: 15px;
  transition: 0.3s;
}

.telegram_bot__description img:hover {
  transform: scale(1.2);
  transition: 0.3s;
}

@media (max-width: 740px) {
  .telegram_bot__content {
    flex-direction: column;
    align-items: center;
  }
  .telegram_bot__description {
    height: 100%;
  }
}
</style>
