<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>
          <img alt="logo" src="../../assets/logo.png" height="38" />
        </div>
      </span>
      <span v-else>
        <div>
          <img alt="logo" src="../../assets/logo.png" height="80" />
        </div>
      </span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Главная</SidebarLink>

    <SidebarLink to="/faculty" icon="fas fa-landmark">Факультет</SidebarLink>

    <SidebarLink to="/news" icon="fas fa-newspaper">Новости</SidebarLink>

    <SidebarLink to="/students" icon="fas fa-graduation-cap">
      Студентам
    </SidebarLink>

    <SidebarLink to="/abiturients" icon="fas fa-users">
      Абитуриентам
    </SidebarLink>

    <SidebarLink to="/contacts" icon="fas fa-phone">Контакты</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #2f5185;
  --sidebar-item-hover: #3862a1;
  --sidebar-item-active: #273667;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
  margin-block-start: 0;
  margin-block-end: 0.4em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
