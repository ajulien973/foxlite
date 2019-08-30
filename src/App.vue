<template>
  <div id="app">
    <TotalRevenueManager />
  </div>
</template>

<script>
import TotalRevenueManager from './components/TotalRevenueManager.vue';

export default {
  name: 'app',
  components: {
    TotalRevenueManager,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
