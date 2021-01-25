<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/fetchget">Fetch Get</router-link> |
      <router-link to="/axiosget">Axios Get</router-link> |
      <router-link to="/vfor">V For</router-link> |
      <router-link to="/fetchvfor">Fetch v-for</router-link> |
      <router-link to="/vif">V If</router-link> |
      <router-link to="/vshow">V Show</router-link> |
      <router-link to="/slot">Slot</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
