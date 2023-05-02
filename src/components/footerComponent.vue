<template>
  <div id="footer-wrapper">
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
          <a href="/Jackson_Crantford_Resume.pdf" target="_blank" ref="noopener noreferrer">Resume</a>
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
  row-gap: 2rem;
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
  padding: 0.125rem
}
#footer-nav > ul {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  font-size: 0.8rem;
}
#footer-nav > ul > li {
  padding: 0.125rem
}
</style>