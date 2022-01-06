<template>
  <p>{{ this.text }}</p>
</template>

<script>
export default {
  name: "ItalicLabel",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
  font-style: italic;
}
</style>
