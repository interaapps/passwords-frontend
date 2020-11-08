<template>
  <div id="app">
    <div style="height: 0px; width: 0px; overflow: hidden;"> <!-- Google Chromes autofill sucks -->
      <input style="opacity: 0;position: absolute;">
      <input type="password" style="opacity: 0;position: absolute;">
    </div>
    <Navigation />
    <PasswordSidebar />
    <CreateFolder />
    <Login />
    <router-view id="page" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import PasswordSidebar from "./components/PasswordSidebar";
import CreateFolder from "./components/CreateFolder";
import Login from "./components/Login";

export default {
    components: {
      Navigation,
      Login,
      CreateFolder,
      PasswordSidebar
    }
}
</script>

<style lang="scss">
#page {

}
</style>
