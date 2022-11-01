<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Button label="Test"></Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Button from 'primevue/button';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    Button,
  },
});
</script>
