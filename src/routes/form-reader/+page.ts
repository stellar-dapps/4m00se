import type { PageLoad } from './$types.js';
import { fetchFormSubmissions } from '$lib/api/form-submissions.api.ts';

export const load: PageLoad = async ({ params }) => {
  const formId = '456'; // Example form ID, you can get this from params or context
  const formSubmissions = await fetchFormSubmissions(formId);
  return {
    props: {
      formSubmissions
    }
  };
};
