<script>
import { ref, onMounted } from 'vue'

export default {
  props: {
    currentRoute: String
  },
  setup () {
    const currentYear = ref(null)

    onMounted( () => {
      currentYear.value = new Date().getFullYear()
    })

    return {
      currentYear,
    }
  }
}
</script>

<template>
  <footer>
    <!-- Render <a> if from page is '/' for UX page reload -->
    <a v-if="currentRoute === 'Home'" class="footer-nav-link" @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="footer-logo" href="/">
     <img src="/logos/my-logos/JC-logo-white.svg" alt="JC Logo" height="60" width="60">  
    </a>
    <!-- Render <router-link> if from page is not '/' -->
    <router-link v-else class="footer-nav-link" @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="footer-logo" to="/">
     <img src="/logos/my-logos/JC-logo-white.svg" alt="JC Logo" height="60" width="60">  
    </router-link>
    
    <section id="social-links">
      <ul>
        <li class="logo-link-wrapper">
          <a class="footer-nav-link" href="https://github.com/jcford2213" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github" class="fa-2x fa-icon-foreground" />
          </a>
        </li>
        <li class="logo-link-wrapper">
          <a class="footer-nav-link" href="https://www.linkedin.com/in/jackson-crantford-364abb91/" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-2x fa-icon-foreground" />
          </a>
        </li>
      </ul>
    </section>
    <nav id="footer-nav">
      <ul class="paragraph">
        <li>
          <a class="footer-nav-link" href="/JacksonCrantford_Resume.pdf" target="_blank" ref="noopener noreferrer">Resume</a>
        </li>
        <li>
          <router-link class="footer-nav-link" to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link class="footer-nav-link" to="/contact">Contact</router-link>
        </li>
    </ul>
    </nav>
    <p class="paragraph">Designed and built by me. &copy {{ currentYear }}.</p>
  </footer>
</template>

<style>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #028090;
  row-gap: 1rem;
  padding: 1rem 0;
}
#social-links ul {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
}
#footer-wrapper p {
  padding-top: 1rem;
  font-size: 0.8rem;
}
.logo-link-wrapper {
  padding: 0.125rem;
}
#footer-nav ul {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}
@media screen and (min-width: 800px) {
  .footer-nav-link:hover {
    color: #1DB954;
  }
}
</style>