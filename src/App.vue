<script>
import headerComponent from './components/headerComponent.vue';
import footerComponent from './components/footerComponent.vue';

export default {
  components: {
    headerComponent,
    footerComponent
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
}
</script>

<template>
  <div id="app-wrapper">
    <headerComponent :current-route="currentRoute"/>
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