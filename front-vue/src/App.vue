<template>
  <div id="app">
    <HomeComponent msg="Home component!"></HomeComponent>
  </div>
</template>

<script>
import HomeComponent from "./views/home/HomeComponent.vue";

export default {
  name: "App",
  components: {
    HomeComponent,
  },
};
</script>

<style>
</style>
