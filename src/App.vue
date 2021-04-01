<template>
<div id="app">
  <InteractiveObject />

</div>
</template>

<script>
import InteractiveObject from './components/InteractiveObject.vue'

export default {
  name: 'App',
  components: {
    InteractiveObject,

  }
}
</script>

<style lang="scss">
#app {
    width: 100%;
    height: 100vh;
}
</style>
