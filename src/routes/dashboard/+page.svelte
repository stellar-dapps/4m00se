<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { authStore } from '$lib/stores/auth.store.ts';

  onMount(() => {
    let isAuthenticated;

    authStore.subscribe((value) => {
      isAuthenticated = value.isAuthenticated;
    });

    if (!isAuthenticated) {
      goto('/');
    }
  });
</script>

<svelte:head>
  <title>4m00se — Dashboard</title>
</svelte:head>

<h1>Welcome to your <strong>4m00se</strong> Dashboard</h1>
