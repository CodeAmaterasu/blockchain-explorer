<template>
  <button type="submit" action="submit" class="primary-background white-color button">{{ this.text }}</button>
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

</style>