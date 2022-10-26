<template>
  <div class="row mx-2">
    <div class="col"><hr /></div>
    <div class="col align-self-center col-md-auto">{{ data }}</div>
    <div class="col"><hr /></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: String }>();
</script>
