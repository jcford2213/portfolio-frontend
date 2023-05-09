<script>
export default {
  props: {
    currentRoute: String
  }
}
</script>

<template>
  <div id="footer-wrapper">
    <!-- Render <a> if currentRoute is Home page
      So home page can relaod when user clicks logo
    Otherwise render <router-link> -->
    <a v-if="currentRoute === 'Home'" @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="footer-logo" href="/">
     <img src="/logos/JC-logo-white.svg" alt="JC Logo" height="60" width="60">  
    </a>
    <router-link v-else @click="logoLinkClicked = logoLinkClicked > 0 ? 0 : 1" id="footer-logo" to="/">
     <img src="/logos/JC-logo-white.svg" alt="JC Logo" height="60" width="60">  
    </router-link>
    
    <section id="social-links">
      <ul>
        <li class="link-wrapper">
          <a href="https://github.com/jcford2213" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github" class="fa-2x fa-icon-foreground" />
          </a>
        </li>
        <li class="link-wrapper">
          <a href="https://www.linkedin.com/in/jackson-crantford-364abb91/" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-2x fa-icon-foreground" />
          </a>
        </li>
      </ul>
    </section>
    <nav id="footer-nav">
      <ul class="paragraph">
        <li>
          <a href="/JacksonCrantford_Resume.pdf" target="_blank" ref="noopener noreferrer">Resume</a>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
    </ul>
    </nav>
    <p class="paragraph">Designed and built by me. &copy 2023.</p>
  </div>
</template>

<style>
#footer-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #028090;
  row-gap: 1.25rem;
  padding: 3.125rem 1rem 1rem 1rem;
}
#social-links > ul {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
}
#footer-wrapper > p {
  font-size: 0.8rem;
}
.link-wrapper {
  padding: 0.125rem;
}
#footer-nav > ul {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}
#footer-nav ul li {
  padding: 0.125rem;
}
@media screen and (min-width: 800px) {
  a:hover {
    color: #1DB954;
  }
}
</style>