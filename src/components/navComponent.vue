<script>
export default {
  data() {
    return {
      showNav: false
    }
  },
  props: {
    routerChanged: Boolean
  },
  watch: {
    routerChanged() {
      if (!this.showNav) {
        return;
      }
      this.showNav = !this.showNav;
    }
  }
}
</script>

<template>
  <nav id="nav-wrapper">
    <ul id="nav-ul" class="paragraph" v-if="showNav">
      <li>
        <a class="nav-button" href="/Jackson_Crantford_Resume.pdf" target="_blank" ref="noopener noreferrer">Resume</a>
      </li>
      <li>
        <router-link class="nav-button" to="/contact">Contact</router-link>
      </li>
    </ul>
    <a href="javascript:void(0);" @click="showNav = !showNav">
      <i v-if="!showNav" class="fa fa-bars fa-2x"></i>
      <i v-if="showNav" class="fa fa-times fa-2x"></i>
    </a>
  </nav>
</template>

<style>
#nav-wrapper {
  display: grid;
  position: relative;
  grid-template-columns: 1fr auto;
  align-items: center;
}
#nav-ul {
  position: absolute;
  top: 1rem;
  left: 50%;
  right: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  /* height: 0; */
}
#nav-wrapper > a {
  justify-self: end;
}
</style>