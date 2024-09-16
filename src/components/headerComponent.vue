<script>
import { ref, onMounted } from 'vue';

export default {
  props: {
    currentRoute: String 
  },
  setup() {
    const logoLinkClicked = ref(0);
    const showNav = ref(false);
    const mobileView = ref(window.innerWidth < 800);

    const hideNav = () => {
      showNav.value = false;
    };

    const toggleNav = () => {
      showNav.value = !showNav.value;
    };

    const handleResize = () => {
      mobileView.value = window.innerWidth < 800;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    return {
      logoLinkClicked,
      showNav,
      mobileView,
      hideNav,
      toggleNav
    };
  }
};
</script>

<template>
  <header>
    <!-- Render <a> if currentRoute is Home page
      So home page can relaod when user clicks logo
    Otherwise render <router-link> -->
    <a v-if="currentRoute === 'Home'" @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="header-logo" href="/">
      <img src="/logos/my-logos/JC-logo-colored.svg" alt="JC Logo" height="60" width="60">
    </a>
    <router-link v-else @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="header-logo" to="/">
      <img src="/logos/my-logos/JC-logo-colored.svg" alt="JC Logo" height="60" width="60">
    </router-link>
    <nav id="nav-wrapper">
      <!-- Desktop -->
      <ul id="nav-ul" class="paragraph" v-if="!mobileView">
        <li>
          <router-link to="/projects" class="nav-button" @click="hideNav">Projects</router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-button" @click="hideNav">Contact</router-link>
        </li>
      </ul>
      <!-- Mobile -->
      <a href="javascript:void(0);" @click="toggleNav" v-if="mobileView">
        <font-awesome-icon id="fa-bars" icon="fa-bars" class="fa-2x" v-if="!showNav" />        
      </a>
      <!-- Slide-out navigation for mobile -->
      <div id="mobile-nav" :class="{ open: showNav }" @click="hideNav" v-if="mobileView">
        <div id="mobile-nav-top">
          <a v-if="currentRoute === 'Home'" @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="mobile-header-logo" href="/">
            <img src="/logos/my-logos/JC-logo-white.svg" alt="JC Logo" height="60" width="60">  
          </a>
          <!-- Render <router-link> if from page is not '/' -->
          <router-link v-else @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="mobile-header-logo" to="/">
            <img src="/logos/my-logos/JC-logo-white.svg" alt="JC Logo" height="60" width="60">  
          </router-link>
          <a href="javascript:void(0);" @click="toggleNav">       
            <font-awesome-icon id="fa-times" class="fa-2x" icon="fa-times" v-if="showNav"/>
          </a>
        </div>
        <ul id="mobile-nav-ul" class="paragraph">
          <li>
            <router-link to="/projects" class="nav-button-white" @click="hideNav">Projects</router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-button-white" @click="hideNav">Contact</router-link>
          </li>
        </ul>
      </div>
       <!-- Overlay for mobile nav -->
       <div v-if="showNav" class="overlay" @click="hideNav"></div>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-inline: 10%;
}
@media screen and (min-width: 800px) {
  header {
    max-width: 1700px;
  }
  #header-logo {
    margin-left: 2rem;
  }
  #nav-ul {
    display: flex;
    flex-direction: row;
    margin-right: 2rem;
    column-gap: 2rem;
    font-size: 1.25rem;
  }
}

/* Mobile Navigation */
#fa-bars {
  color: #028090;
}
#fa-times {
  transform: scale(1.2);
  color:  #fff;
}
#mobile-nav {
  position: fixed;
  top: 0;
  right: -250px;
  height: 100vh;
  width: 250px;
  background-color: #028090;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: right 0.3s ease;
  padding: 1rem 1rem 0 0.5rem;
}
#mobile-nav.open {
  right: 0; /* Slide the navigation in */
}
/* Overlay for mobile */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
}
#mobile-nav-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#mobile-nav-ul {
  margin-top: 2rem;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>