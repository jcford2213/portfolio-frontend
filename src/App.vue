<script>
import headerComponent from './components/headerComponent.vue';
import footerComponent from './components/footerComponent.vue';

export default {
  components: {
    headerComponent,
    footerComponent
  },
  data() {
    return {
      routerChanged: false
    }
  },
  watch: {
    $route() {
      this.routerChanged = !this.routerChanged;
    }
  }
}
</script>

<template>
  <div id="app-wrapper">
    <headerComponent :routerChanged="routerChanged"/>
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