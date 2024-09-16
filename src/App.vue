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
  <headerComponent :current-route="currentRoute"/>
  <main>
    <router-view />
  </main>
  <footerComponent :current-route="currentRoute"/>
</template>

<style>
#app-wrapper {
  max-width: 1600px;
  margin: 0 auto;
}
</style>