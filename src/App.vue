<template>
  <SidebarMenu />
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
import SidebarMenu from "@/components/sidebar/SidebarMenu";

export default {
  components: {
    SidebarMenu,
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
  margin-left: 54px;
  padding: 15px;
}
</style>
