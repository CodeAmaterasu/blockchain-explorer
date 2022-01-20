<template>
  <p><a :href="url" class="primary-color link">
  {{ this.text }}
  </a></p>
</template>

<script>
export default {
  name: "LinkLabel",
  components: {
  },
  props: {
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  a {
    font-family: 'Poppins-LightItalic';
    font-size: 15px;
  }
</style>