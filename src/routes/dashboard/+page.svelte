<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { authStore } from '$lib/stores/auth.store.ts';
  import { toggleModal } from '$lib/utils/modal.js';

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

<button class="contrast" data-target="modal-example" on:click={toggleModal}> Build your first form </button>

<dialog id="modal-example">
  <article>
    <header>
      <!-- rel is necessary here for the close button -->
      <button aria-label="Close" rel="prev" data-target="modal-example" on:click={toggleModal}></button>
      <h3>Confirm your action!</h3>
    </header>
    <p>
      Cras sit amet maximus risus. Pellentesque sodales odio sit amet augue finibus pellentesque. Nullam finibus risus
      non semper euismod.
    </p>
    <footer>
      <button class="secondary" data-target="modal-example" on:click={toggleModal}>Cancel</button>
      <button autofocus data-target="modal-example" on:click={toggleModal}> Confirm </button>
    </footer>
  </article>
</dialog>

<style>
  #modal-example header,
  #modal-example footer {
    background-color: transparent;
    border: none;
  }
</style>
