<template>
  <h1 class="title">{{ this.text }}</h1>
</template>

<script>
export default {
  name: "TitleLabel",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
h1 {
    font-family: 'Poppins-SemiBold';
    font-size: 25px;
}
</style>