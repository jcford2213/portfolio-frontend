import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

// Font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faCircle, faSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faLinkedin, faGithub, faBars, faTimes, faCircle, faSquare );


const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('font-awesome-layers', FontAwesomeLayers)
.use(router)
.mount('#app');
