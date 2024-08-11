import type { FormConfig } from '$lib/models/form-config.model.js';
import type { FormSubmission } from '$lib/models/form-submission.model.js';

export interface FormConfigListPageData {
  formConfigurations: FormConfig[];
}

export interface FormSubmissionListPageData {
  formSubmissions: FormSubmission[];
}
