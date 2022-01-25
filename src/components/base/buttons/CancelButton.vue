<template>
  <button class="background-color-red color-white button">{{ this.text }}</button>
</template>

<script>
export default {
  name: "CancelButton",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.button:hover {
  background: #d92d2d;
}
</style>