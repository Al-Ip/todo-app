<template>
  <header class="bg-indigo-600">
    <nav class="px-6 mx-auto max-w-7xl lg:px-8" aria-label="Top">
      <div class="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <a href="/">
            <span class="sr-only">Your Company</span>
            <img class="w-auto h-10" src="./assets/logo.svg" alt="" />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">{{ link.name }}</a>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <a id="sign-in-button" onclick="Clerk.openSignIn()" href="#" class="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75">Sign in</a>
          <a href="#" class="inline-block px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50">Sign up</a>
        
        </div>
      </div>
      <div class="flex flex-wrap justify-center py-4 gap-x-6 lg:hidden">
        <router-link v-for="link in navigation" :to="link.href" :key="link.name" class="text-base font-medium text-white hover:text-indigo-50">{{ link.name }}</router-link>
      </div>
    </nav>
  </header>
  <router-view/>
</template>

<script setup lang="ts">
  // Get this URL from the Clerk Dashboard
  const frontendApi = 'clerk.[pk_test_YWRqdXN0ZWQtb3JjYS03NC5jbGVyay5hY2NvdW50cy5kZXYk].com';
  const version = '@latest'; // Set to appropriate version

  // Creates asyncronous script
  const script = document.createElement('script');
  script.setAttribute('data-clerk-frontend-api', frontendApi);
  script.async = true;
  script.src = `https://${frontendApi}/npm/@clerk/clerk-js${version}/dist/clerk.browser.js`;

  // Adds listener to initialize ClerkJS after it's loaded
  script.addEventListener('load', async function () {
    await window.Clerk.load({
      // Set load options here...
    });
  });
  document.body.appendChild(script);
  
  const navigation = [
    { name: 'Todos', href: '/todos' },
    { name: 'About', href: '/about' },
  ] 

  // [...] Installation code
</script>
