import type { PageLoad } from './$types.js';
import { fetchFormConfigurations } from '$lib/api/form-configurations.api.ts';

export const load: PageLoad = async ({ params }) => {
  const userId = '123'; // Example user ID, you can get this from params or context
  const formConfigurations = await fetchFormConfigurations(userId);
  return {
    props: {
      formConfigurations
    }
  };
};
