<template>
  <SidebarMenu />
  <div class="wrapper" :class="{ 'shift-wrapper': collapsed }">
    <router-view />
  </div>
</template>

<script>
import SidebarMenu from "@/components/sidebar/SidebarMenu";
import { collapsed } from "@/components/sidebar/state";

export default {
  components: {
    SidebarMenu,
  },
  setup() {
    return { collapsed };
  },
};
</script>

<style>
#app {
  font-family: sans-serif, Roboto, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0%;
}

.wrapper {
  margin-left: 196px;
  padding: 15px;
  transition: 0.3s;
}

.shift-wrapper {
  margin-left: 54px;
  transition: 0.3s;
}
</style>
