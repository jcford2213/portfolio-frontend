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
      <div>
        <label class="paragraph" for="name">Name</label>
        <input type="text" name="name" id="name-input" v-model="formValues.name">
      </div>
      <div>
        <label class="paragraph" for="email">Email</label>
        <input type="email" name="email" id="email-input" v-model="formValues.email">
      </div>
      <div>
        <label class="paragraph" for="name">Message</label>
        <textarea name="message" id="message-Input" rows="10" v-model="formValues.message"></textarea>
      </div>
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