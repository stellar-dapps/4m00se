interface FormField {
  name: string;
  label: string;
  type: string;
}

export interface FormConfig {
  fields: FormField[];
  submitUrl: string;
}
