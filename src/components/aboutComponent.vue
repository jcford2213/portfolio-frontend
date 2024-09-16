<script>
import skillsComponent from '../components/skillsComponent.vue'
export default {
  components: {
    skillsComponent
  }
}
</script>

<template>
  <div id="about-wrapper">
    <section id="about-header">
      <p class="paragraph">
        I've been a web developer for nearly 2 years. I have a passion for creating and problem solving. I enjoy putting those passions to work building responsive web applications.
      </p>
      <ul class="paragraph">
        <li class="link-wrapper">
          <a href="https://github.com/jcford2213" target="_blank" class="social-button">
            <font-awesome-layers class="fa-2x">
              <font-awesome-icon icon="fa-circle" class="fa-stack-1x fa-icon-background" />
              <font-awesome-icon icon="fa-brands fa-github" class="fa-stack-1x fa-icon-foreground" />
            </font-awesome-layers>
            <p class="paragraph">GitHub</p>
          </a>
          
        </li>
        <li class="link-wrapper">
          <a href="https://www.linkedin.com/in/jackson-crantford-364abb91/" target="_blank" class="social-button">
            <font-awesome-layers class="fa-2x">
              <font-awesome-icon icon="fa-square" class="fa-stack-1x fa-icon-background" />
              <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-stack-1x fa-icon-foreground" />
            </font-awesome-layers>
            <p>Linkedin</p>
          </a>
        </li>
      </ul>
    </section>
    <section id="about-skills">
      <skillsComponent />    
    </section>
  </div>
</template>

<style>

#about-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
}
#about-header {
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;
  font-size: 1.2rem;
  padding-bottom: 14rem;
  background-color: #028090;
}
#about-header > p {
  padding-top: 3rem;
  padding-inline: 2rem;
  max-width: 50rem;
  font-size: 1.25rem;
}
#about-header > ul {
  width: 100%;
  padding-inline: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 1rem;
  max-width: 50rem;

}
#about-skills {
  margin-top: -14rem;
}
.logo-button > a{
  color: #028090;
}
</style>