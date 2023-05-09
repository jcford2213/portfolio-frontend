<script>
import navComponent from '../components/navComponent.vue';

export default {
  components: {
    navComponent
  },
  props: {
    currentRoute: String 
  },
  data() {
    return {
      logoLinkClicked: 0
    }
  }
}
</script>

<template>
  <header>
    <!-- Render <a> if currentRoute is Home page
      So home page can relaod when user clicks logo
    Otherwise render <router-link> -->
    <a v-if="currentRoute === 'Home'" @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="header-logo" href="/">
      <img src="/logos/JC-logo-colored.svg" alt="JC Logo" height="60" width="60">
    </a>
    <router-link v-else @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="header-logo" to="/">
      <img src="/logos/JC-logo-colored.svg" alt="JC Logo" height="60" width="60">
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
  #header-logo {
    margin-left: 2rem;
  }
}
</style>