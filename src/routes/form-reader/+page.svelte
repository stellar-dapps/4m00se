<script lang="ts">
  import { initFormWidget } from '../../widget/init-form-widget.ts';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { authStore } from '$lib/stores/auth.store.ts';
  import { StellarConfig } from '$lib/content/mocks/stellar-config.ts';

  onMount(() => {
    let isAuthenticated;

    authStore.subscribe((value) => {
      isAuthenticated = value.isAuthenticated;
    });

    if (!isAuthenticated) {
      goto('/');
    }

    initFormWidget({
      container: 'form-widget-container',
      config: StellarConfig,
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
