<script lang="ts">
  import { initFormWidget } from '../../widget/init-form-widget.ts';
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

<svelte:head>
  <title>4m00se — Form Reader</title>
</svelte:head>

<h1>Form Reader</h1>

<div id="form-widget-container"></div>
