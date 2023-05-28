<script>
export default {
  methods: {
    pauseChevronBounce() {
      const chevron = document.getElementById('fa-chevron');
      chevron.style.animationPlayState = window.scrollY === 0 ? 'running' : 'paused';
      chevron.style.opacity = window.scrollY >= 100 ? '0' : '100';
    }
  },
  mounted() {
    window.addEventListener('scroll', this.pauseChevronBounce);
  },
  unmounted() {
    window.removeEventListener('scroll', this.pauseChevronBounce);
  }
}
</script>

<template>
  <section id=hero-wrapper>
    <div>
      <h1 class="headline">Hi I'm Jackson,<br>Fullstack Web Developer</h1>
      <img id="profile-headshot" src="/project-images/ProfilePic.png" alt="Profile Headshot Image" width="250" height="250">
    </div>
    <span><font-awesome-icon id="fa-chevron" icon="fa-chevron-down" /></span>
  </section>    
</template>

<style>
#hero-wrapper {
  display: grid;
  grid-template-rows: 1fr 3rem;
  justify-content: center;
  height: calc(100svh - 4.75rem); /* Vertically centers content. 4.75rem is height of header*/
}
#hero-wrapper div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  text-align: center;
  margin-bottom: 3.125rem;
}
#profile-headshot {
  border: 0px solid;
  border-radius: 50%;
  box-shadow: 0px 0px 6px 4px #028090;
}
#hero-wrapper span {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#fa-chevron {
  font-size: 4rem;
  align-self: end;
  color: #1DB954;
  animation: bounce 3s ease infinite;
  transition: opacity 1s ease;
}
@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 2.25rem;
  }
  #fa-chevron {
    font-size: 6rem;
  }
}
</style>