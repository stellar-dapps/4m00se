<script lang="ts">
  import type { FormConfig } from './models/form-config.model.ts';

  export let config: FormConfig;
  export let onSubmit;

  let formData = {};

  function handleChange(event) {
    formData[event.target.name] = event.target.value;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(config.submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        onSubmit && onSubmit(formData);
      } else {
        console.error('Error submitting form:', await response.text());
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
</script>

<form on:submit={handleSubmit}>
  {#each config.fields as field}
    <div>
      <label>{field.label}</label>
      <input type={field.type} name={field.name} on:input={handleChange} />
    </div>
  {/each}
  <button type="submit">Submit</button>
</form>
