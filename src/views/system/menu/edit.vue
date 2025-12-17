<script setup lang="ts">
  const [value, toggle] = useToggle()
  function open() {
    toggle()
  }

  defineExpose({ open })
</script>

<template>
  <ArtDialog v-model:visible="value" />
</template>

<style scoped lang="scss"></style>
