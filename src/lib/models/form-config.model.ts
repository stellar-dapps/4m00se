interface FormField {
  name: string;
  label: string;
  type?: string; // default = 'text'
  required?: boolean; // default = false
  placeholder?: string; // default = ''
}

interface FormStyles {
  isRounded?: boolean; // default = false
}

export interface FormConfig {
  fields: FormField[];
  submitUrl: string;
  submitButtonTitle?: string; // default = 'Submit'
  consent?: string; // default = '', markdown allowed
  styles?: FormStyles;
}
