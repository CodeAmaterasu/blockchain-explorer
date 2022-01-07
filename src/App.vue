<template>
  <LinkLabel text="Link Label" url="https://www.google.ch"></LinkLabel>
  <TitleLabel text="Title Label" />
  <DefaultLabel text="Default Label" />
  <SubmitButton text="Rectangle Button" />
  <CancelButton text="Cancel Button" />
</template>

<script>
import LinkLabel from './components/fields/labels/LinkLabel.vue'
import TitleLabel from './components/fields/labels/TitleLabel.vue'
import DefaultLabel from './components/fields/labels/DefaultLabel.vue'
import SubmitButton from './components/fields/buttons/SubmitButton.vue'
import CancelButton from './components/fields/buttons/CancelButton.vue'

export default {
  name: 'App',
  components: {
    LinkLabel,
    TitleLabel,
    DefaultLabel,
    SubmitButton,
    CancelButton
  }
}
</script>

<style>
.primary-background {
  background-color: #239A98;
}

.primary-color {
  color: #239A98;
}

.secondary-background {
  background-color: #555555;
}

.secondary-color {
  color: #555555;
}

.warning-background {
  background-color: #F26F6F;
}

.warning-color {
  color: #F26F6F;
}

.white-background {
  background-color: #F1F1F1;
}

.white-color {
  color: #F1F1F1;
}

.title {
  font-family: 'Poppins-SemiBold';
  font-size: 25px;
}

.link {
    font-family: 'Poppins-LightItalic';
    font-size: 15px;
}

.button {
  font-family: 'Poppins-SemiBold';
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 4px #00000025;
}

.button:hover {
  cursor:pointer;
  background: #1d8583;
}

.regular {
    font-family: 'Poppins-Regular';
    font-size: 15px;
}

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
}

@font-face {
  font-family: "Poppins-SemiBold";
  src: local("Poppins-SemiBold"),   url(./fonts/Poppins-SemiBold.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins-LightItalic";
  src: local("Poppins-LightItalic"),   url(./fonts/Poppins-LightItalic.ttf) format("truetype");
}

</style>
