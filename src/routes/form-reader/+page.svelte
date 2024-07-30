<script lang="ts">
  import { initFormWidget } from '$lib/init-form-widget.ts';
  import { onMount } from 'svelte';

  onMount(() => {
    initFormWidget({
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
  <h1>Form Reader</h1>

  <a href="/">Back to Home</a>

  <div id="form-widget-container"></div>
</main>
