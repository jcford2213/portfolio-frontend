<script>
export default {
  data() {
    return {
      formValues: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async sendMessage(message = {}) {
      const server = 'http://localhost:3000';
      const response = await fetch(server, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
      .catch(err => {
        return err.message;
      });
      this.$router.push('/');
      return response.data;
    }
  }
}
</script>

<template>
  <div id="contact-wrapper">
    <h2 class="headline">Get in touch!</h2>
    <h2 class="headline">Email me at:</h2>
    <a href="mailto: jackson-crantford@outlook.com" class="paragraph">jackson-crantford@outlook.com</a>
  </div>
</template>

<style>
#contact-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  row-gap: 1rem;
  margin-top: 4rem;
  margin-inline: auto;
}
a {
  font-size: 1.25rem;;
}
a:hover {
  color: #1DB954;
}
#email-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1rem;
}
#email-form > div {
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
}
#email-form > button {
  width: fit-content;
}
</style>