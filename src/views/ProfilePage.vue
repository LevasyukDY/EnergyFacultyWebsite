<template>
  <div class="profile">
    <h1>Пожалуйста, подождите...</h1>
  </div>
</template>

<script>
export default {
  created() {
    window.location.href = "http://127.0.0.1:8000/login";
  },
};
</script>
