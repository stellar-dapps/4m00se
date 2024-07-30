<script lang="ts">
  export let label;
  export let name;
  export let value;
  export let onChange;
</script>

<div class="form-group">
  <label for={name}>{label}</label>
  <input type="text" id={name} {name} {value} on:input={(event) => onChange(event?.target?.value)} />
</div>
