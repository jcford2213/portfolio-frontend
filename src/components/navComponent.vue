<script>
export default {
  data() {
    return {
      showNav: false,
      mobileView: window.innerWidth < 800 ? true : false
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
    },
    innerWidth(width) {
      mobileView = width < 800 ? true : false;
    }
  },
  methods: {
    hideNav() {
      this.showNav = false;
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.mobileView = window.innerWidth < 800 ? true : false;
    })
  }
}
</script>

<template>
  <nav id="nav-wrapper">
    <a href="javascript:void(0);" @click="showNav = !showNav" v-if="mobileView">
      <font-awesome-icon id="fa-bars" icon="fa-bars" class="fa-2x" v-if="!showNav" />        
      <font-awesome-icon id="fa-times" class="fa-2x" icon="fa-times" v-if="showNav"/>
    </a>
    <ul id="nav-ul" class="paragraph" v-if="showNav || !mobileView">
      <li>
        <a 
          href="/JacksonCrantford_Resume.pdf"
          target="_blank"
          class="nav-button"
          @click="hideNav"
          ref="noopener noreferrer"
        >Resume</a>
      </li>
      <li>
        <router-link 
          to="/projects"
          class="nav-button"
          @click="hideNav"
        >Projects</router-link>
      </li>
      <li>
        <router-link
          to="/contact"
          class="nav-button"
          @click="hideNav"
        >Contact</router-link>
      </li>
    </ul>
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
  top: -1rem;
  left: 50%;
  right: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  row-gap: 1.5rem;
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

@media screen and (min-width: 800px) {
  #nav-ul {
    position: static;
    flex-direction: row;
    justify-content: end;
    margin-right: 2rem;
    column-gap: 2rem;
    font-size: 1.25rem;
  }
}
</style>