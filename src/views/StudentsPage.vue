<template>
  <h1>Ресурсы</h1>
  <div class="students">
    <button>Календарный учебный график</button>
    <button>Расписание занятий</button>
    <button>Центр дистанционного образования</button>
    <button>Нумерация корпусов</button>
    <button>Расписание звонков</button>
    <button>Стипендии, общежития, трудоустройство</button>
    <button>Конференции и олимпиады</button>
    <button>Библиотека ЗабГУ</button>
    <button>Управление воспитательной и социальной работы</button>
    <button>Справочная информация</button>
    <button>Информация по трудоустройству</button>
    <button>Образцы заявлений</button>
    <button>Нормативные документы</button>
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-flow: row wrap;
  justify-content: center;
}

button {
  background-color: #fff;
  box-shadow: #c1c1c1 1px 1px 10px;
  border: 1px solid #6c84be;
  color: #000;
  font-size: 16px;
  width: 300px;
  height: 100px;
  border-radius: 15px;
  transition: 0.2s;
  margin: 20px;
}

button:hover {
  transition: 0.2s;
  background-color: #3862a1;
  cursor: pointer;
  width: 350px;
  height: 150px;
  font-size: 18px;
  color: #fff;
}
</style>
