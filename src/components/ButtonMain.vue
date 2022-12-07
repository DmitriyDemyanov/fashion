<template>
  <button :style=buttonStyles>
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'ButtonBlack',
  props: {
    buttonStyles: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      reqired: true,
    }
  }
}
</script>

<style scoped>

</style>