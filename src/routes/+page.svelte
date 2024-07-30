<script lang="ts">
  import '@picocss/pico/css/pico.css';
  import { Counter } from '$lib/index.ts';
  import { init } from '$lib/init.ts';
  import { onMount } from 'svelte';

  onMount(() => {
    init({
      container: 'form-widget-container',
      config: {
        fields: [
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'email', label: 'Email', type: 'email' }
        ],
        submitUrl: '#'
      },
      onSubmit: (data) => {
        console.log('Form submitted:', data);
        alert('Form submitted successfully!');
      }
    });
  });
</script>

<main>
  <h1>Welcome to your library project</h1>

  <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>

  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

  <Counter />

  <div id="form-widget-container"></div>
</main>
