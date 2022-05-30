<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div class="sidebar__logo_content" @click="$router.push('/')">
      <img src="@/assets/logo.png" alt="logo" />
      <transition name="fade">
        <span v-if="!collapsed">Энергетический факультет ЗабГУ</span>
      </transition>
    </div>

    <SidebarLink to="/profile" icon="fas fa-user">Профиль</SidebarLink>

    <SidebarLink to="/news" icon="fas fa-newspaper">Новости</SidebarLink>

    <SidebarLink to="/faculty" icon="fas fa-landmark">Факультет</SidebarLink>

    <SidebarLink to="/students" icon="fas fa-graduation-cap">
      Студентам
    </SidebarLink>

    <SidebarLink to="/abiturients" icon="fas fa-users">
      Абитуриентам
    </SidebarLink>

    <SidebarLink to="/contacts" icon="fas fa-phone">Контакты</SidebarLink>

    <div
      class="sidebar__dark_theme"
      :class="{ 'change-icon': $store.state.darkTheme }"
      @click="toggleTheme()"
    >
      <i class="fas fa-moon"></i>
      <transition name="fade">
        <span v-if="!collapsed">День/Ночь</span>
      </transition>
    </div>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar()"
    >
      <i class="fas fa-angle-double-left"></i>
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
  methods: {
    toggleTheme() {
      this.$store.commit("changeTheme");
      if (this.$store.state.darkTheme == true) {
        return;
      }
      this.$router.push(this.$route.path);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.sidebar {
  color: white;
  background-color: #2f5185;

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

.sidebar-dark-theme {
  background-color: #0f0f0f;
  color: white;
}

.sidebar__logo_content {
  height: 4em;
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

.sidebar__logo_content img {
  height: 38px;
  margin-right: 9px;
  transition: 0.5s;
}

.sidebar__logo_content img:hover {
  transform: rotate(360deg);
  transition: 0.5s;
}

.sidebar__logo_content span {
  text-align: left;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: #ffffffb3;

  transition: 0.2s linear;
}

.collapse-icon:hover {
  cursor: pointer;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.sidebar__dark_theme {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;
}

.sidebar__dark_theme:hover {
  background-color: #3862a1;
}

.sidebar__dark_theme.active {
  background-color: #273667;
}

.sidebar__dark_theme svg {
  flex-shrink: 0;
  width: 25px;
  height: 18px;
  margin-right: 10px;
  transition: 0.2s linear;
}

.sidebar__dark_theme span {
  white-space: nowrap;
}

.change-icon svg {
  transform: rotate(220deg);
  transition: 0.2s linear;
}
</style>
