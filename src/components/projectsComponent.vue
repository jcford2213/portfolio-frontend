<script>
import myProjects from '../assets/myProjects.json';
export default {
  data() {
    return {
      projects: myProjects.projects
    }
  }
}
</script>

<template>
  <div id="projects-wrapper">
    <h3 class="headline">An Example of My Work</h3>
    <section v-for="project in projects">
      <figure class="project-banner">
        <img id="project-image" :src="project.snapshot" alt="Project Screenshot">
        <div class="overlay"></div>        
        <figcaption class="project-name headline">
          {{ project.name }}
        </figcaption>
      </figure>
      <div v-if="false">
        <p class="paragraph" id="description">
          {{ project.description }}
        </p>
        <button class="nav-button">
          <a v-bind:href="project.link" target="_blank">Visit Site ></a>
        </button>
      </div>
    </section>
  </div>
</template>

<style>
#projects-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  margin-block: 3.125rem;
  margin-inline: 10%;
}
.project-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  position: relative;
  background-color: #000000;
  margin-block: 1rem;
  margin-inline: auto;
  max-width: 800px;
}
.project-banner > figcaption {
  position: absolute;
}
.project-name {
  text-align: center;
  padding: 3.5rem 1.5rem;
  font-size: 1.6rem;
}
.project-image{
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
}
#description {
  padding-inline: 2rem;
}

@media screen and (min-width: 800px) {
}
</style>