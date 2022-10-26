<template>
  <div class="row">
    <div class="col">
      <div class="text-end">{{ label }}</div>
    </div>
    <div class="col">
      <div class="text-start">{{ value }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: String; value: String }>();
</script>
