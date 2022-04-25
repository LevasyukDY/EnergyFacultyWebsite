<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div
      class="sidebar__logo_content"
      @click="
        $router.push('/');
        $refs.myVueperSlides.refreshParallax();
      "
    >
      <img src="@/assets/logo.png" alt="logo" />
      <span>ЭФ ЗабГУ</span>
    </div>

    <!-- <SidebarLink to="/" icon="fas fa-home">Главная</SidebarLink> -->

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

.sidebar__logo_content {
  height: 3em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
  overflow-x: hidden;
  cursor: pointer;
}

.sidebar img {
  height: 38px;
  margin-right: 9px;
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
