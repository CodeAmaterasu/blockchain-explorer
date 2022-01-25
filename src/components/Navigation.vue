<template>
  <div id="nav" class="background-color-primary">
    <div id="logo-container">
      <a href="/" @click="storeIndex('0')">
        <ApplicationLogo />
      </a>
    </div>
    <div id="nav-items">
      <a href="/" :class="{selected : getSiteIndex === '0'}" @click="storeIndex('0')"><ul class="color-background nav-item">Home</ul></a>
      <a href="/wallets" :class="{selected : getSiteIndex === '1'}" @click="storeIndex('1')"><ul class="color-background nav-item">Wallets</ul></a>
    </div>
  </div>
</template>

<script>
import ApplicationLogo from './logo/Logo.vue'

export default {
  name: "Navigation",
  components: {
    ApplicationLogo
  },
  methods: {
    storeIndex(index) {
      localStorage.setItem("siteIndex", index)
    }
  },
  computed: {
    getSiteIndex() {
      return localStorage.getItem("siteIndex")
    }
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
  margin: 0;
}
.nav-item:hover {
  color: #7ebab8;
}

.selected {
  text-decoration: underline #F1F1F1;
}
</style>