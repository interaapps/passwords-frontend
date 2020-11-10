import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Passwords from "./Passwords";
require("./assets/scss/app.scss")

Vue.config.productionTip = false

const passwordsClient = new Passwords(process.env.VUE_APP_API_BASE, localStorage["session"])

if (localStorage["session"])
  passwordsClient.apiClient.options.header["X-Key"] = localStorage["session"]

Vue.mixin({
  data: function(){return{
    passwordsClient
  }}
})

passwordsClient.fetchAndInsert()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



export default {$passwordsClient: passwordsClient}