<template>
  <div class="profile">
    <h1>This is an profile page</h1>
  </div>
</template>

<script>
export default {
  created() {
    window.location.href = "http://127.0.0.1:8000/login";
  },
};
</script>
