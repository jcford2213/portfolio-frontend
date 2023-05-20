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
      <figure class="project-figure">
        <img class="project-image" :src="project.snapshot" alt="Project Screenshot">      
        <figcaption class="project-figcaption headline">
          <p class="paragraph description">
            {{ project.description }}
          </p>
          <button class="nav-button link-to-project">
            <a v-bind:href="project.link" target="_blank">Visit Site ></a>
          </button>
        </figcaption>
      </figure>
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
.project-figure {
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  position: relative;
  background-color: #000000;
  margin-inline: auto;
  max-width: 800px;
  overflow: hidden;
}
.project-image{
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
  transition: .25s ease-in-out;
}
.project-figcaption {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  row-gap: 0.6rem;
  padding: 3.5rem 1.5rem;
  background-color: #404040;
  opacity: 0;
  transition: .45s ease-in-out;
}
.project-figure:hover .project-figcaption {
  opacity: 1;
}
.project-figure:hover .project-image {
  transform: scale(1.1);
}
.description-div {
  
}
.link-to-project {
  max-width: 70%;
}


@media screen and (min-width: 800px) {
  .project-figcaption {
    padding-inline: 10%;
    row-gap: 2.5rem;
    font-size: 1.6rem;
  }
  .description {
    padding-inline: 2rem;
  }
}
</style>