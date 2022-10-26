<template>
  <div class="col col col-md-auto">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck2"
        checked
        disabled
        style="opacity: 1"
      />
      <label class="form-check-label" for="defaultCheck2" style="opacity: 1">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: String }>();
</script>
