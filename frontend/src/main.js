import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

//  const publishableKey = import.meta.env.VITE_PUBLISHABLE_KEY
// // console.log(publishableKey)

// const clerk = new Clerk(publishableKey);
// await clerk.load({
//   // Set load options here...
// });

// async function loadClerk() {
//     const userButton = document.getElementById('user-button');
//     const signInButton = document.getElementById('sign-in-button');

//     await window.Clerk.load();

//     if (Clerk.user) {
//       Clerk.mountUserButton(userButton);
//       signInButton.hidden = true;
//     }
//   }


createApp(App).use(router).mount('#app')
