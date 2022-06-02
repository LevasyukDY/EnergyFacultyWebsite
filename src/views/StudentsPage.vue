<template>
  <div class="students">
    <div class="schedule">
      <h1>Поиск расписания</h1>
      <div class="search__schedule_by_group">
        <input
          class="search__input"
          :value="search"
          @input="search = $event.target.value"
          type="text"
          placeholder="Введите группу..."
        />
      </div>
      <div class="search__schedule_by_teacher">
        <input
          class="search__input"
          :value="search"
          @input="search = $event.target.value"
          type="text"
          placeholder="Введите преподавателя..."
        />
      </div>
    </div>
    <div class="teachers">
      <h1>Поиск преподавателя</h1>
      <div class="search__teacher">
        <input
          class="search__input"
          :value="search"
          @input="search = $event.target.value"
          type="text"
          placeholder="Введите часть ФИО..."
        />
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.search__schedule_by_group {
  margin-bottom: 10px;
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
</style>
