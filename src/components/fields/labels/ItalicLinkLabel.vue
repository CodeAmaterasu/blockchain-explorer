<template>
  <a :href="url">
    <ItalicLabel :text="text"></ItalicLabel>
  </a>
</template>

<script>
import ItalicLabel from './ItalicLabel';

export default {
  name: "ItalicLinkLabel",
  components: {
    ItalicLabel
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
    color: #FFBF84;
    font-family: 'Poppins-Italic';
  }
</style>