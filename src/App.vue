<template>
  <SidebarMenu />
  <div v-if="mobileSize">
    <div class="wrapper">
      <router-view />
    </div>
  </div>
  <div v-else>
    <div class="wrapper__mobile" :class="{ 'shift-wrapper': collapsed }">
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/sidebar/SidebarMenu";
import { collapsed } from "@/components/sidebar/state";

export default {
  data: () => ({
    mobileSize: {},
  }),
  components: {
    SidebarMenu,
  },
  setup() {
    return { collapsed };
  },
  created() {
    if (document.documentElement.clientWidth < 480) this.mobileSize = true;
    else this.mobileSize = false;
  },
};
</script>

<style>
html {
  --font-color: #2c3e50;
  --bg-color: #ffffff;
  --sidebar-bg-color: #2f5185;
  --sidebar-link-hover: #3862a1;
  --sidebar-link-active: #273667;
  --buttons-color: #3e6cb1;
  --buttons-shadow: #c1c1c1;
  --buttons-hover: #3862a1;
}

html[data-theme="dark"] {
  --font-color: #d5d5d5;
  --bg-color: #212121;
  --sidebar-bg-color: #1b1b1b;
  --sidebar-link-hover: #2f2f2f;
  --sidebar-link-active: #3d3d3d;
  --buttons-color: #4e4e4e;
  --buttons-shadow: #414141;
  --buttons-hover: #464646;
}

#app {
  font-family: sans-serif, Roboto, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0%;
  transition: 0.3s;
  color: var(--font-color);
  background-color: var(--bg-color);
}

.wrapper {
  margin-left: 54px;
  padding: 15px;
}

.wrapper__mobile {
  margin-left: 196px;
  padding: 15px;
  transition: 0.3s;
}

.shift-wrapper {
  margin-left: 54px;
  transition: 0.3s;
}
</style>
