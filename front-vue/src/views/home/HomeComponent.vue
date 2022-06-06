<template>
  <section>
    <h1>{{ msg }}</h1>
    <h2>{{ legend }}</h2>
    <input type="text" :value="legend">
    <button @click="resetLegend">Reset Legend</button><br><br>
    <input type="text" v-model="legend">
  </section>
</template>

<script>
export default {
  props: ['msg'],
  data: () => {
    return {
      legend: 'Im in Vue',
    };
  },
  methods: {
    resetLegend() {
      console.log('Event of click in Vue');
      this.legend = 'Im in Vue';
    }
  }
};
</script>

<style>
</style>