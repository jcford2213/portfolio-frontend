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
      <p class="paragraph" id="short-info">
        I've been a web developer for nearly 2 years. I have a passion for creating and problem solving. I enjoy putting those passions to work building responsive web applications.
      </p>
      <router-link id=contact-me class="nav-button" to="/contact">Contact Me</router-link>
    </section>
    <section id="about-skills">
      <p class="paragraph">
        Some tech I use...
      </p>
      <skillsComponent />    
    </section>
  </div>
</template>

<style>

#about-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  margin-block: 3.125rem;
}
#about-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  font-size: 1.2rem;
}
#about-skills > p {
  font-size: 1.2rem;
}
</style>