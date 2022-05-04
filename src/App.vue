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
