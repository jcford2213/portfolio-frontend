<script>
import navComponent from './navComponent.vue';

export default {
  components: {
    navComponent
  }
}
</script>

<template>
  <header>
    <div id="personal-logo">
      <router-link to="/"><img src="/logos/my-logo.svg" alt="JC Logo" height="50" width="50"></router-link>
    </div>
    <navComponent />
  </header>
</template>

<style>
header {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: center;
}
</style>