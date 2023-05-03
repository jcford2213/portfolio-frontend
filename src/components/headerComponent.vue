<script>
import navComponent from '../components/navComponent.vue';

export default {
  components: {
    navComponent
  },
  data() {
    return {
      logoLinkClicked: 0
    }
  },
  methods: {
    testFunction() {
      console.log('testFunction ran');
    }
  }
}
</script>

<template>
  <header>
    <router-link @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="logo" to="/">
      <img src="/logos/my-logo.svg" alt="JC Logo" height="60" width="60">
    </router-link>
    <navComponent :logoLinkClicked="logoLinkClicked"/>
  </header>
</template>

<style>
header {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}
#logo {
  padding: 0.75rem;
}

@media screen and (min-width: 800px) {
  header {
   max-width: 1700px;
  margin-inline: 10%;
  }
  #logo {
    margin-left: 2rem;
  }
}
</style>