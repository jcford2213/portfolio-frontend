<script>
import mySkills from '../assets/mySkills.json';
export default {
  data() {
    return {
      skills: mySkills.skills,
      frontendSkills: [],
      backendSkills: [],
      devSkills: []
    }
  },
  created() {
    for (let skill of this.skills) {
      if (skill.type == 'frontend') {
        this.frontendSkills.push(skill);
      }
      if (skill.type == 'backend') {
        this.backendSkills.push(skill);
      }
      if (skill.type == 'dev') {
        this.devSkills.push(skill);
      }
    }
  }
}
</script>

<template>
  <div id="skills-wrapper">
      <section class="skill-section">
        <h3 class="headline category-headline">
          Frontend
        </h3>
        <ul>
          <li v-for="skill in frontendSkills">
            <p class="paragraph">
              {{ skill.name }}
            </p>
            <img class="logo-image" :src="skill.logo" :alt="skill.altmessage" width="50" height="50">
          </li>
        </ul>
      </section>
      <section class="skill-section">
        <h3 class="headline category-headline">
          Backend
        </h3>
        <ul>
          <li v-for="skill in backendSkills">
            <p class="paragraph">
              {{ skill.name }}
            </p>
            <img class="logo-image" :src="skill.logo" :alt="skill.altmessage" width="50" height="50">
          </li>
        </ul>
      </section>
      <section class="skill-section">
        <h3 class="headline category-headline">
          Dev Tools
        </h3>
        <ul>
          <li v-for="skill in devSkills">
            <p class="paragraph">
              {{ skill.name }}
            </p>
            <img class="logo-image" :src="skill.logo" :alt="skill.altmessage" width="50" height="50">
          </li>
        </ul>
      </section>
    </div>
</template>

<style>
  #skills-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: 10%;
}
#category-headline {
  font-size: 1.375rem;
}
.skill-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: -0.125rem;
  padding-block: 2rem;
  border: 0.125rem solid white;
  max-width: 700px; 
  background-color: #404040;
}
.skill-section li {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  column-gap: 1rem;
}
@media screen and (min-width: 800px) {
  #skills-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: fit-content;
  }
  .skill-section {
    height: 100%;
  }
}
</style>