import type { PageLoad } from './$types.js';
import { fetchFormSubmissions } from '$lib/api/form-submissions.api.ts';

export const load: PageLoad = async ({ params, fetch }) => {
  const formId = '1'; // Example form ID, you can get this from params or context
  const formSubmissions = await fetchFormSubmissions(formId, fetch);
  return {
    props: {
      formSubmissions
    }
  };
};
