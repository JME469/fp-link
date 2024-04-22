<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<style scoped>
</style>

<script>

// @ is an alias to /src
import HelloWorld from "@/components/headerComponent.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
