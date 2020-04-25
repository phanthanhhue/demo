<template>
  <div id="app">
    <TheLayout />
  </div>
</template>

<script>
import TheLayout from '@/components/TheLayout'
export default {
  name: 'App',
  components: {
    TheLayout
  }
}
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #e4e8eca9;
  }
</style>
