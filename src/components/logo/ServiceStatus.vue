<template>
<div id="service-status" class="red"></div>
</template>

<script>
export default {
  name: "ServiceStatus"
}
</script>

<style scoped>
#service-status {
  width: 20px;
  height: 20px;
  border-radius: 50px;

  box-shadow: inset 0 4px 4px #00000050;
}

.green {
  background-color: #B7FFAB;
}
.orange {
  background-color: #FF947C;
}
.red {
  background-color: #F26F6F;
}
</style>