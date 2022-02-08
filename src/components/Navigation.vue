<template>
  <div id="nav" class="background-color-primary">
    <div id="logo-container">
        <router-link tag="li" class="color-background no-underline"  to="/">
          <ApplicationLogo />
        </router-link>
    </div>
    <div id="nav-items">
      <router-link tag="li" class="color-background nav-item"  to="/">Home</router-link>
      <router-link tag="li" class="color-background nav-item"  to="/wallets">Wallets</router-link>
    </div>
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
  padding: 10px 20px;
  display: flex;
  align-items: center;
}
#nav-items {
  display: flex;
  align-items: center;
}
.nav-item {
  font-family: "Poppins-SemiBold";
  margin-left: 20px;
}
.nav-item:first-child {
  margin-left: 30px;
}
.no-underline {
  text-decoration: none !important;
}
a {
  margin: 0;
}
.nav-item:hover {
  color: #7ebab8;
}
.router-link-active {
  text-decoration: underline #F1F1F1;
}
</style>