<script lang="ts">
  export let label;
  export let name;
  export let checked;
  export let onChange;
</script>

<div class="form-group">
  <label>
    <input type="checkbox" {name} {checked} on:change={(event) => onChange(event?.target?.checked)} />
    {label}
  </label>
</div>
