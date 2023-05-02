<script>
export default {
  data() {
    return {
      showNav: false
    }
  },
  props: {
    logoLinkClicked: Number
  },
  watch: {
    logoLinkClicked() {
      if (this.showNav) {
        this.showNav = false;
      }
    }
  },
  methods: {
    hideNav() {
      this.showNav = false;
    }
  }
}
</script>

<template>
  <nav id="nav-wrapper">
    <ul id="nav-ul" class="paragraph" v-if="showNav">
      <li class="nav-button" @click="hideNav">
        <a href="/Jackson_Crantford_Resume.pdf" target="_blank" ref="noopener noreferrer">Resume</a>
      </li>
      <li class="nav-button" @click="hideNav">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <a href="javascript:void(0);" @click="showNav = !showNav">
      <font-awesome-icon id="fa-bars" icon="fa-solid fa-bars" class="fa-2x" v-if="!showNav" />        
      <font-awesome-icon id="fa-times" class="fa-2x" icon="fa-solid fa-times" v-if="showNav"/>
    </a>
  </nav>
</template>

<style>
#nav-wrapper {
  display: grid;
  position: relative;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding-right: .75rem;
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
#fa-bars {
  color: #028090;
}
#fa-times {
  transform: scale(1.2);
  color:  #028090;
}
</style>