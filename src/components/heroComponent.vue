
<template>
  <section id=hero-wrapper>
    <h1 class="headline">Hi I'm Jackson,<br>Fullstack Web Developer</h1>
  </section>    
</template>

<style>
#hero-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100svh - 5.25rem); /* Vertically centers content */
}
h1 {
  text-align: center;
  margin-bottom: 3.125rem;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 2.25rem;
  }
}
</style>