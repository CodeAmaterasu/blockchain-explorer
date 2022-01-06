<template>
  <ItalicLinkLabel text="Link Label" url="https://www.google.ch"></ItalicLinkLabel>
  <TitleLabel text="Title Label" />
</template>

<script>
import ItalicLinkLabel from './components/fields/labels/ItalicLinkLabel.vue'
import TitleLabel from './components/fields/labels/TitleLabel'

export default {
  name: 'App',
  components: {
    ItalicLinkLabel,
    TitleLabel
  }
}
</script>

<style>
#app {
  font-family: 'Poppins-Regular','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #F1F1F1;
}
@font-face {
  font-family: "Poppins-Regular";
  src: local("Poppins-Regular"),   url(./fonts/Poppins-Regular.ttf) format("truetype");

  font-family: "Poppins-SemiBold";
  src: local("Poppins-SemiBold"),   url(./fonts/Poppins-SemiBold.ttf) format("truetype");

  font-family: "Poppins-Italic";
  src: local("Poppins-Italic"),   url(./fonts/Poppins-Italic.ttf) format("truetype");
}

</style>
