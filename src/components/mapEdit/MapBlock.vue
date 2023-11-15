<template>
  <div class="h-[35px] w-[35px] bg-[red] border border-sky-500">
    {{ props.type }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: [Number, String]
})
</script>

<style scoped></style>
