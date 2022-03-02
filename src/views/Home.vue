<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" height="100" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.home {
  margin-left: 46px;
}
</style>
