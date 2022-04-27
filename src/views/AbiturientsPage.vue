<template>
  <div class="abiturients">
    <img src="@/assets/images/приемная-комиссия.jpeg" />
    <h1>Приёмная кампания 2022</h1>
    <p>
      Приём документов в приёмную комиссию с 20 июня 2022 года будет полностью
      дистанционным. Сервис
      <a href="http://zabgu.ru/php/page.php?query=podat%27_zayavlenie">
        «Личный кабинет поступающего»
      </a>
      позволяет подать заявление на любую форму обучения по всем направлениям
      подготовки всех уровней образования.
    </p>
    <p>
      Вступительные испытания в вузе по общеобразовательным предметам (для
      инвалидов, иностранных граждан и лиц, имеющих среднее профессиональное или
      высшее образование), а также вступительные испытания творческой или
      профессиональной направленности будут проводиться по утверждённому
      расписанию с применением дистанционных технологий.
    </p>
    <p>
      Вся информация об изменении порядка приёма в вузы будет оперативно
      размещаться на официальном сайте нашего вуза в разделе «Приёмная кампания
      2022» и в группе приёмной комиссии в социальной сети Вконтакте.
    </p>
    <div class="links">
      <a href="http://entrant.zabgu.ru/?page_id=193">
        Список документов для поступления
      </a>
      <a href="http://entrant.zabgu.ru/?page_id=16">Сроки приёма заявлений</a>
      <a href="http://entrant.zabgu.ru/?page_id=4902">О медицинских справках</a>
      <a href="http://entrant.zabgu.ru/?page_id=116">Приказы о зачислении</a>
      <a href="http://entrant.zabgu.ru/?page_id=610">Статистика приёма</a>
      <a href="http://entrant.zabgu.ru/?page_id=604">Платный приём</a>
      <a href="http://entrant.zabgu.ru/?page_id=203">
        Приём иностранных граждан
      </a>
      <a href="http://entrant.zabgu.ru/?page_id=12">Правила приёма</a>
    </div>
  </div>
</template>

<style scoped>
img {
  box-shadow: #909090 3px 3px 25px;
  border-radius: 15px;
}

.abiturients p {
  text-align: justify;
}

.links {
  display: flex;
  flex-grow: 1;
  flex-flow: row wrap;
  justify-content: center;
}

a {
  margin-right: 20px;
  margin-bottom: 10px;
}

@media (max-width: 1140px) {
  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
}
</style>
