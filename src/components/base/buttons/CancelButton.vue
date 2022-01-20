<template>
  <button class="warning-background white-color button">{{ this.text }}</button>
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

</style>