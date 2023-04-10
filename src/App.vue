<script>
import headerComponent from './components/headerComponent.vue';
import footerComponent from './components/footerComponent.vue';

export default {
  components: {
    headerComponent,
    footerComponent
  }
}
</script>

<template>
  <div id="app-wrapper">
    <headerComponent />
    <router-view />
    <footerComponent />
  </div>
</template>

<style>
#app-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 3rem;
  min-height: 100svh;
}
</style>