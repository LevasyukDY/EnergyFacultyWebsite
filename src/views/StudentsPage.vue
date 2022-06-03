<template>
  <div class="students">
    <div class="schedule">
      <h1>Поиск расписания</h1>
      <div class="search__schedule">
        <div class="search__schedule_by_group">
          <input
            class="search__input"
            :value="searchInputByGroup"
            @input="searchInputByGroup = $event.target.value"
            @keyup.enter="searchByGroup()"
            type="text"
            placeholder="Введите группу..."
          />
          <button @click="searchByGroup()">Найти</button>
        </div>
        <div class="search__schedule_by_teacher">
          <input
            class="search__input"
            :value="searchInputByTeacher"
            @input="searchInputByTeacher = $event.target.value"
            @keyup.enter="searchByTeacher()"
            type="text"
            placeholder="Введите преподавателя..."
          />
          <button @click="searchByTeacher()">Найти</button>
        </div>
      </div>
      <div class="schedule__result" v-if="scheduleResult != ''">
        <table>
          <tr>
            <th>Неделя</th>
            <th>День</th>
            <th>Время</th>
            <th>Предмет</th>
            <th>Вид занятий</th>
            <th>Преподаватель</th>
            <th>Кабинет</th>
          </tr>
          <tr v-for="res in scheduleResult" :key="res.id">
            <td>{{ res.week_type }}</td>
            <td>{{ res.day }}</td>
            <td>{{ res.class_time.start_time.slice(0, -3) }}</td>
            <td>{{ res.lesson.discipline }}</td>
            <td>{{ res.class_type }}</td>
            <td>
              {{ res.lesson.teacher.surname }} {{ res.lesson.teacher.name }}
              {{ res.lesson.teacher.patronymic }}
            </td>
            <td>{{ res.classroom.corps }}-{{ res.classroom.cabinet }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="teachers">
      <h1>Поиск преподавателя</h1>
      <div class="search__teacher">
        <input
          class="search__input"
          :value="searchInputTeacher"
          @input="searchInputTeacher = $event.target.value"
          @keyup.enter="searchTeacher()"
          type="text"
          placeholder="Введите часть ФИО..."
        />
        <button @click="searchTeacher()">Найти</button>
      </div>
      <div class="teachers__result" v-if="teacherResult != ''">
        <table>
          <tr>
            <th>ФИО</th>
            <th>Должность</th>
            <th>Кафедра</th>
            <th>Кабинет</th>
            <th>Телефон</th>
            <th>Ссылка</th>
          </tr>
          <tr v-for="res in teacherResult" :key="res.id">
            <td>{{ res.surname }} {{ res.name }} {{ res.patronymic }}</td>
            <td>{{ res.post }}</td>
            <td>{{ res.chair.title }}</td>
            <td>{{ res.chair.cabinet }}</td>
            <td>{{ res.work_phone }}</td>
            <td>{{ res.link }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    serverURL: "http://127.0.0.1:8000/api/",
    searchInputByGroupURL: "schedules?group=",
    searchInputByTeacherURL: "schedules?teacher=",
    searchInputTeacherURL: "teachers?full_name=",
    searchInputByGroup: "",
    searchInputByTeacher: "",
    searchInputTeacher: "",
    scheduleResult: [],
    teacherResult: [],
  }),
  methods: {
    searchByGroup() {
      if (this.searchInputByGroup != "")
        axios
          .get(
            this.serverURL +
              this.searchInputByGroupURL +
              this.searchInputByGroup
          )
          .then((response) => (this.scheduleResult = response.data));

      this.searchInputByGroup = "";
    },
    searchByTeacher() {
      if (this.searchInputByTeacher != "")
        axios
          .get(
            this.serverURL +
              this.searchInputByTeacherURL +
              this.searchInputByTeacher
          )
          .then((response) => (this.scheduleResult = response.data));

      this.searchInputByTeacher = "";
    },
    searchTeacher() {
      if (this.searchInputTeacher != "")
        axios
          .get(
            this.serverURL +
              this.searchInputTeacherURL +
              this.searchInputTeacher
          )
          .then((response) => (this.teacherResult = response.data));

      this.searchInputTeacher = "";
    },
  },
};
</script>

<style scoped>
.search__schedule {
  display: flex;
  justify-content: space-evenly;
}

.teachers__result {
  display: flex;
  justify-content: center;
}

.schedule__result {
  display: flex;
  justify-content: center;
}

.search__teacher {
  display: flex;
  justify-content: center;
}

table {
  margin-top: 10px;
  overflow-x: auto;
}

th,
td {
  padding: 5px 10px;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

tr:nth-child(odd) {
  background-color: var(--table-bg-color);
}

tr:nth-child(even) {
  background-color: var(--table-bg-color-2);
}

.search__schedule_by_group,
.search__schedule_by_teacher,
.search__teacher {
  text-align: left;
  padding-bottom: 10px;
}

button {
  width: 10ch;
  border: 2px solid var(--sidebar-link-hover);
  border-radius: 0 15px 15px 0;
  font-size: 16px;
  padding: 2px 10px;
  background-color: var(--buttons-color);
  color: white;
  margin-left: 3px;
  cursor: pointer;
}

button:hover {
  background-color: var(--buttons-hover);
}

.search__input {
  width: 25ch;
  border: 2px solid var(--sidebar-link-hover);
  border-radius: 15px 0 0 15px;
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

@media (max-width: 960px) {
  .search__schedule {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 430px) {
  .search__input {
    width: 20ch;
  }
}

@media (max-width: 380px) {
  .search__input {
    width: 13ch;
  }
}
</style>
