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
    <h1 class="headline"></h1>
    <form id="email-form" @submit.prevent="sendMessage(formValues)">
      <span>
        <label class="paragraph" for="name">Name</label>
        <input type="text" name="name" id="name-input" v-model="formValues.name">
      </span>
      <span>
        <label class="paragraph" for="email">Email</label>
        <input type="email" name="email" id="email-input" v-model="formValues.email">
      </span>
      <span>
        <label class="paragraph" for="name">Message</label>
        <textarea name="message" id="message-Input" rows="10" v-model="formValues.message"></textarea>
      </span>
      <button class="nav-button" type="submit">Send</button>
    </form>
  </div>
</template>

<style>
#contact-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#email-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1.25rem;
  max-width: 700px;
  padding-inline: 0.5rem;
  margin-block: 1rem;
}
#email-form span {
  display: flex;
  flex-direction: column;
}
input, textarea {
  padding: 0.5rem;
  border: 0.2rem solid #028090;
  border-radius: 5px;
  margin-top: 0.675rem;
}
textarea {
  resize: vertical;
}
input:focus, textarea:focus {
  outline: none;
  border: none;
  box-shadow: 0px 0px 3px 3px #1DB954;
}
#email-form button {
  width: fit-content;
}

@media screen and (min-width: 800px) {
  #email-form {
    padding-inline: 0;
    margin-block: 0;

  }
}
</style>