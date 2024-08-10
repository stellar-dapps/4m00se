import { writable } from 'svelte/store';

interface AuthStore {
  isAuthenticated: boolean;
  user: string | null;
}

export const authStore = writable<AuthStore>({
  isAuthenticated: false,
  user: null
});
