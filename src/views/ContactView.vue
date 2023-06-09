
<script>
export default {
  data() {
    return {
      formValues: {
        'name': '',
        'email': '',
        'subject': '',
        'message': ''
      },
      showErrorState: {
        name: false,
        email: false,
        subject: false,
        message: false
      },
      errorMessages: {
        'name': '',
        'email': '',
        'subject': '',
        'message': ''
      },
      buttonDisabled: false,
      showTryAgainButton: false
    }
  },
  methods: {
    // asyncTester () {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve();
    //       // reject('Error thrown from reject');        
    //     }, 3000)
    //   })   
    // },

    async sendToServer (formInput = {}) {
      this.buttonDisabled = true;
      try {
        var popup = document.getElementById("confirmation-popup");
        var popupText = document.getElementById('popup-text');
        var spinner = document.getElementById('spinner');
        var faEnvelope = document.getElementById('fa-envelope');
        var faBan = document.getElementById('fa-ban');
        var popupButtonContainer = document.getElementById('popup-button-container');
      
        await this.validateInputs(formInput);
        popup.style.display = "block";
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
        const serverResponse = await response.text();
        if (response.status != 200) {
          throw new Error(serverResponse);
        }
        popupText.innerText = `${serverResponse}`;
        spinner.style.display = "none";
        faEnvelope.style.display = 'block';
        faEnvelope.style.color = '#1DB954';
        popupButtonContainer.style.display = 'flex';
      }
      catch(err) {
        popupText.innerText = err.message;
        spinner.style.display = 'none';
        faBan.style.display = 'block';
        faBan.style.color = 'red';
        popupButtonContainer.style.display = 'flex';
        this.showTryAgainButton = true;
      };
    },
        
    validateInputs (formInput = {}) {
      return new Promise((resolve, reject) => {
        let rejectValidation = false;
        let errorMessage = ''
        for (const [inputType, value] of Object.entries(formInput)) {
          // If statements run if input is bad
          if (value === '') {
            errorMessage = `${inputType} is required.`
            this.setInputErrorState(inputType, errorMessage);
            rejectValidation = true;
            continue;
          }
          // test against email regex
          if (inputType === 'email' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            errorMessage = `Please enter a valid email address.`
            this.setInputErrorState(inputType, errorMessage);
            rejectValidation = true;
            continue;
          }
        }
        if (rejectValidation === true) {
          this.buttonDisabled = false;
          reject('One or more inputs invalid');
        }
        resolve()
      })
    },
    setInputErrorState(inputName, message) {
      // Get input element and add error class
      const inputElement = document.getElementById(`${inputName}-input`);
      const inputContainer = inputElement.parentElement;
      inputContainer.classList.add('error');
      // Set the error message
      this.errorMessages[inputName] = message;
      // Render error message
      this.showErrorState[inputName] = true;
    },

    tryFormAgain() {
      // Enable Submit Button
      this.buttonDisabled = false;
      // Hide and reset submit popup
      document.getElementById('confirmation-popup').style.display = 'none';
      document.querySelectorAll('.fa-message-state-icon').forEach((element) => {
        element.style.display = 'none';
      })
      document.getElementById('popup-button-container').style.display = 'none';
      document.getElementById('spinner').style.display = 'block';
      document.getElementById('popup-text').innerText = 'Sending message...';
      this.showTryAgainButton = false;
    },

    backToHome () {
      this.$router.push('/');
    }
  }
}
</script>

<template>
  <div id="contact-wrapper">
    <h1 class="headline">Want to get in touch?<br><br>Send me a message!</h1>
    <form id="email-form" @submit.prevent="sendToServer(formValues)">
      <span class="input-grouping-container">
        <label class="paragraph" for="name">Name</label>
        <input type="text" name="name" id="name-input" v-model="formValues.name">
        <p class="error-message paragraph" id="name-error" v-if="showErrorState.name">{{ errorMessages.name }}</p>
      </span>
      <span class="input-grouping-container">
        <label class="paragraph" for="email">Email</label>
        <input type="text" name="email" id="email-input" v-model="formValues.email">
        <p class="error-message paragraph" id="email-error" v-if="showErrorState.email">{{ errorMessages.email }}</p>
      </span>
      <span class="input-grouping-container">
        <label class="paragraph" for="subject">Subject</label>
        <input type="text" name="subject" id="subject-input" v-model="formValues.subject">
        <p class="error-message paragraph" id="subject-error" v-if="showErrorState.subject">{{ errorMessages.subject }}</p>
      </span>
      <span class="input-grouping-container">
        <label class="paragraph" for="name">Message</label>
        <textarea name="message" id="message-input" rows="10" v-model="formValues.message"></textarea>
        <p class="error-message paragraph" id="message-error" v-if="showErrorState.message">{{ errorMessages.message }}</p>
      </span>
      <button id="form-submit-button" class="nav-button" type="submit" :disabled="buttonDisabled">Send Message</button>
    </form>
  </div>
  <div id="confirmation-popup">
    <dialog id="popup-content-container">
      <div id="spinner"></div>
      <font-awesome-icon class="fa-message-state-icon" id="fa-envelope" :icon="['fas', 'envelope-circle-check']"/>
      <font-awesome-icon class="fa-message-state-icon" id="fa-ban" :icon="['fas', 'ban']"/>
      <p id="popup-text" class="headline">Sending message...</p>
      <div id="popup-button-container">
        <button
          id="reset-form-button"
          class="nav-button popup-button"
          type="reset"
          v-if="showTryAgainButton"
          @click.prevent="tryFormAgain()"
        >Try Again</button>
        <button
          id="back-home-button"
          class="nav-button popup-button"
          type="reset"
          @click.prevent="backToHome()"
        >Back to Home</button>
      </div>
    </dialog>
  </div>
</template>

<style>
#contact-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block: 5rem;
}
#email-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1rem;
  max-width: 700px;
  padding-inline: 0.5rem;
  margin-block: 1rem;
}
.input-grouping-container {
  display: flex;
  flex-direction: column;
}
.input-grouping-container textarea {
  resize: vertical;
}
.input-grouping-container input,
.input-grouping-container textarea {
  padding: 0.5rem;
  border: 0.2rem solid #028090;
  border-radius: 5px;
  margin-block: 1rem;
}
.input-grouping-container input:focus,
.input-grouping-container textarea:focus {
  outline: none;
}
.input-grouping-container.error input,
.input-grouping-container.error textarea {
  border-color: red;
}
.error-message {
  color: red;
  font-size: 1rem;
  margin-bottom: 1rem;
}
#form-submit-button {
  text-align: center;
  align-self: center;
  width: 100%;
  padding-inline: 0;
}

/* Send Confirmation Popup */
#confirmation-popup {
  display: none;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: #40404060;
}
#popup-content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #404040;
  color: #ffffff;
  border: 0.3rem solid #028090; 
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px #028090;
}
#spinner {
  border: 0.3rem solid #028090;
  border-top: 0.3rem solid #1DB954;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  margin-bottom: 10px;
}
.fa-message-state-icon {
  display: none;
  height: 2.5rem;
}
#popup-button-container {
  display: none;
  flex-direction: row;
  justify-content: center;
  row-gap: 1rem;
  position: relative;
  bottom: 0;
  right: 0;
  flex-wrap: wrap;
  width: 50%;
}
.popup-button {
  width: 8.62rem;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media screen and (min-width: 800px) {
  #email-form {
    padding-inline: 0;
    margin-block: 5rem;
  }
  #popup-content-container {
    width: 48%;
  }
  #popup-button-container {
    width: 25rem;
    column-gap: 1rem;
    
  }
}
</style>