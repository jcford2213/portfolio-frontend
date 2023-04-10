<script>

import HeroView from './HeroView.vue';
import AboutView from './AboutView.vue';
import ProjectsView from './ProjectsView.vue';

export default {
  components: {
    HeroView,
    AboutView,
    ProjectsView,
  }
}
</script>

<template> 
  <div>
    <Transition name="slide-fade" appear>
      <HeroView />
    </Transition>
    <AboutView />
    <ProjectsView /> 
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 1.0s ease-out;
}
.slide-fade-enter-from {
  transform: translateY(-50px) translateX(-20px);
  opacity: 0;
}
</style>