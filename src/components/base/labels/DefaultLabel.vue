<template>
  <p class="regular color-lightgrey">{{ this.text }} </p>
</template>

<script>
export default {
  name: "DefaultLabel",
  components: {
  },
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
    font-family: 'Poppins-Regular';
    font-size: 15px;
    white-space: nowrap;
  }
</style>