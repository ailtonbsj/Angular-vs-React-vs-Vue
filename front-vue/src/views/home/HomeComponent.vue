<template>
  <section>
    <h1>{{ msg }}</h1>
    <h2>{{ legend }}</h2>
    <input type="text" :value="legend">
  </section>
</template>

<script>
export default {
  props: ["msg"],
  data: () => {
    return {
      legend: "Im in Vue",
    };
  },
};
</script>

<style>
</style>