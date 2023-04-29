<script>
import headerComponent from './views/headerComponent.vue';
import footerComponent from './views/footerComponent.vue';

export default {
  components: {
    headerComponent,
    footerComponent
  },
  
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
}
</style>