<template>
  <Navigation  />
  <div id="site-container">
    <WhiteboardHome/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import WhiteboardHome from './components/whiteboard/WhiteboardHome.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    WhiteboardHome,
  }
}
</script>

<style>
.color-primary {
    color: #555;
}

.background-color-primary {
  background: #555;
}

.color-secondary {
  color: #239A98;
}

.background-color-secondary {
  background: #239A98;
}

.color-grey {
  color: #E8E8E8;
}

.background-color-lightgrey {
  background: #7D7D7D;
}

.color-lightgrey {
  color: #7D7D7D;
}

.background-color-grey {
  background: #E8E8E8;
}

.color-background {
  color: #F1F1F1;
}

.background-color-background {
  background: #F1F1F1;
}

.color-white {
  color: #FFF;
}

.background-color-white {
  background: #FFF;
}

.color-green {
  color: #B7FFAB;
}

.background-color-green {
  background: #B7FFAB;
}

.color-red {
  color: #F26F6F;
}

.background-color-red {
  background: #F26F6F;
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
  height: 100%;
}

#site-container {
  display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */

  flex-direction: column;
  align-items: center;
}

body {
  margin: 0;
  background: #F1F1F1;
}

.box-shadow {
  box-shadow: 0 4px 4px #00000025;
}

.border-radius {
  border-radius: 10px;
}

html {
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
  font-family: "Poppins-Bold";
  src: local("Poppins-Bold"),   url(./fonts/Poppins-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins-LightItalic";
  src: local("Poppins-LightItalic"),   url(./fonts/Poppins-LightItalic.ttf) format("truetype");
}

</style>
