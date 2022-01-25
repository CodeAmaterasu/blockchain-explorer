<template>
  <div>
    <p id="upper-part">Blockchain</p>
    <div id="test">
      <div id="status">
        <ServiceStatus/>
      </div>
      <p id="lower-part">explorer</p>
    </div>
  </div>
</template>

<script>
import ServiceStatus from './ServiceStatus.vue'

export default {
  name: "ApplicationLogo",
  components: {
    ServiceStatus
  }
  
}
</script>

<style scoped>
#upper-part {
  color: #F1F1F1;
  font-size:35px;
  font-family: "Poppins-Bold";
  margin: 0;
  padding: 0;
  width: fit-content;
  block-size: fit-content;
}
#lower-part {
  color: #D7D7D7;
  font-size: 29px;
  font-family: "Poppins-Bold";
  margin: 0 0 0 93px;
  width: fit-content;
  block-size: fit-content;
  float: left;
} 
#status {
  float: left;
}
#test {
    display: flex;
    align-items: center;
    margin-top: -20px;
}

</style>