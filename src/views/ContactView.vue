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
    setInputError (keyName, message) {
      const element = document.getElementById(`${keyName}-input`);
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success');
    },
    setInputSuccess (keyName) {
      const element = document.getElementById(`${keyName}-input`);
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
      errorDisplay.innerText = '';
      inputControl.classList.add('success');
      inputControl.classList.remove('error');
    },
    validateInputs (formInput = {}) {
      return new Promise((resolve, reject) => {
        let shouldValidateReject = false;
        for (const [key, value] of Object.entries(formInput)) {
          if (value === '') {
            const message = `${key} is required.`
            this.setInputError(key, message);
            shouldValidateReject = true;
            continue;
          }
          if (key === 'email' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            const message = `Please enter a valid email address.`
            this.setInputError(key, message);
            shouldValidateReject = true;
            continue;
          }
          this.setInputSuccess(key);
        }
        if (shouldValidateReject === true) {
          reject();
        }
        resolve()
      })
    },
    async sendToServer (formInput = {}) {
      try {
        await this.validateInputs(formInput);
        const server = import.meta.env.VITE_EMAIL_SERVER;
        const response = await fetch(server, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formInput)
        })
        if (response.status != 200) {
          throw new Error('server responded with status other than 200');
        }
        this.$router.push('/');
        window.alert('Thank you for reaching out! I will be sure to get back to you asap!');
      }
      catch(err) {
        console.log(err.message);
      };
    }
  }
}
</script>

<template>
  <div id="contact-wrapper">
    <form id="email-form" @submit.prevent="sendToServer(formValues)">
      <h1 class="headline">Want to get in touch?<br><br>Send me a message!</h1>
      <span class="input-control">
        <label class="paragraph" for="name">Name</label>
        <input type="text" name="name" id="name-input" v-model="formValues.name">
        <div class="error paragraph"></div>
      </span>
      <span class="input-control">
        <label class="paragraph" for="email">Email</label>
        <input type="text" name="email" id="email-input" v-model="formValues.email">
        <div class="error paragraph"></div>
      </span>
      <span class="input-control">
        <label class="paragraph" for="name">Message</label>
        <textarea name="message" id="message-input" rows="10" v-model="formValues.message"></textarea>
        <div class="error paragraph"></div>
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
  margin-top: 2rem;
}
#email-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1.25rem;
  max-width: 700px;
  padding-inline: 0.5rem;
  margin-block: 3rem;
}
.input-control {
  display: flex;
  flex-direction: column;
}
.input-control input, .input-control textarea {
  padding: 0.5rem;
  border: 0.2rem solid #028090;
  border-radius: 5px;
  margin-top: 0.675rem;
}
.input-control textarea {
  resize: vertical;
}
.input-control input:focus, .input-control textarea:focus {
  outline: none;
}
.input-control.success input, .input-control.success textarea {
  border-color: #1DB954;
}
.input-control.error input, .input-control.error textarea {
  border-color: red;
}
.input-control .error {
  color: red;
  font-size: 1rem;
}
#email-form button {
  width: fit-content;
}

@media screen and (min-width: 800px) {
  #email-form {
    padding-inline: 0;
    margin-block: 5rem;

  }
}
</style>