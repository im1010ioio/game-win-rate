import '../scss/index.scss'

import { createApp } from 'vue';

createApp({
  setup() {
    const year = new Date().getFullYear();

    return {
      year
    };
  }
}).mount('#app');
