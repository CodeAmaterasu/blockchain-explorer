<template>
  <button type="submit" action="submit" class="background-color-secondary color-white button">{{ this.text }}</button>
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
button {
  height: 50px;
}
</style>