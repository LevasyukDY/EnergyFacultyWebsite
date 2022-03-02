<template>
  <div class="dashboard">
    <h1>The sidebar is {{ collapsed ? "closed" : "open" }}</h1>
    <button @click="toggleSidebar">Toggle Sidebar</button>
  </div>
</template>

<script>
import { collapsed, toggleSidebar } from "@/components/sidebar/state";

export default {
  setup() {
    return { collapsed, toggleSidebar };
  },
};
</script>

<style scoped>
.dashboard {
  margin-left: 46px;
}
</style>
