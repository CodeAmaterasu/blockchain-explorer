<template>
  <div id="nav" class="background-color-primary">
    <ApplicationLogo />
  </div>
</template>

<script>
import ApplicationLogo from './logo/Logo.vue'

export default {
  name: "Navigation",
  components: {
    ApplicationLogo
  }
}
</script>
 
<style scoped> 
#nav {
  width: 100%;
}
</style>