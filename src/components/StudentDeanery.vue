<template>
  <h1>
    <a href="https://vk.com/energopozitron">Студенческий деканат</a>
  </h1>
  <div class="student_deanery">
    <div class="student_deanery__img">
      <img src="@/assets/images/позитрон.png" alt="pozitron" />
    </div>
    <div class="student_deanery__text">
      <p>
        Студенческий деканат ЭФ Позитрон – это добровольное объединение
        студентов энергетического факультета ЗабГУ. Мы организуем внеучебную
        деятельность ЭФ.
      </p>
      <br />
      <p>
        Каждый желающий студент этого факультета может вступить к нам в любое из
        направлений:
      </p>
      <br />
      <p>✔️ культурно-массовое</p>
      <p>✔️ информационно-техническое</p>
      <p>✔️ ️спортивное</p>
      <p>✔️ научное</p>
      <p>✔️ социальное</p>
      <br />
      <p>Желаешь вести активную жизнь? У тебя есть идеи? Приходи к нам!</p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.student_deanery {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}

p {
  margin: 0;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

a:hover {
  text-decoration: underline;
}

.student_deanery__text {
  text-align: justify;
  margin-left: 10px;
}

@media (max-width: 600px) {
  .student_deanery {
    flex-direction: column;
  }
}
</style>
