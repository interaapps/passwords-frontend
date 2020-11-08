<template>
  <div class="home">
    <br>
    <div>
      <div v-if="passwords.parent" class="folder" :style="{background: '#EEEEEE', color: '#434343'}" @click="passwords = $store.state.passwords">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/><path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/></svg>
        <span>Home</span>
      </div>

      <div class="folder" v-for="(folder, id) in passwords.folders" :key="id" :style="{background: folder.color}" @click="passwords = folder">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-folder" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z"/>
          <path fill-rule="evenodd" d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"/>
        </svg>
        <span>{{folder.name}}</span>
      </div>

      <div class="folder add">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </div>
    </div>
    <br><br>
    <div>

      <div class="password" v-for="(password, id) in passwords.passwords" :key="id" @click="$store.state.currentPassword = password" :style="{display: password.name === '%$test$%' ? 'none':'' }">
          <div class="password-head">
            <img :src="'https://icons.duckduckgo.com/ip3/'+password.websiteHost+'.ico'">
            <h1>{{password.name}}</h1>
          </div>
          <h2 class="password-username">{{password.username}}</h2>
          <h4 class="password-website">{{password.websiteHost}}</h4>
      </div>
      
      <div class="password add" @click="createPassword">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from "../helpers";
export default {
  name: 'Home',
  data: function(){
      return {
          passwords: this.$store.state.passwords,
          key: this.$store.state.encryptionKey
      }
  },
  watch:{
      '$store.state.passwords'(to){
          this.passwords = to
      }
  },
  methods:{
      createPassword(){
          this.$store.state.currentPassword = {
              name: "Example",
              username: this.$store.state.user.username,
              password: helpers.randomString(15),
              website: "https://",
              description: `
  `
          }
      }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
.password {
  background: #EFEFEF;
  width: 340px;
  overflow: hidden;
  vertical-align: top;
  min-height: 119px;
  padding: 14px;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: inline-block;
  cursor: pointer;
  .password-username {
    color: #595959;
    margin-top: 7px;
    font-size: 23px;
    max-width: 100%;
    overflow: hidden;
  }
  .password-website {
    color: #969696;
    font-size: 14.5px;
    margin-top: 5px;
  }
  .password-head {
    h1 {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      font-size: 18px;
      color: #3B3B3B;
    }
    img {
      display: inline-block;
      vertical-align: middle;
      width:  23px;
      height: 23px;
    }
  }
  &:hover {
    background: #EAEAEA;
  }
  &.add {
    vertical-align: middle;
    min-width: 0px;
    width:87px;
    min-height: 0px;
    svg {
      display: block;
      width:  60px;
      height: 60px;
      color: #545454;
    }
    margin-left: 10px;
    margin-top: 16px;
  }
}
.folder {
  background: #EA5555;
  color: #FFF;
  display: inline-block;
  padding: 10px;
  margin-right: 20px;
  width: 120px;
  height: 120px;
  border-radius: 14px;
  text-align: center;
  cursor: pointer;
  svg {
    width:  60px;
    height: 60px;
    display: block;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  span {
    font-weight: 600;
  }

  &.add {
    background: #EFEFEF;
    color: #545454;
    width:  86px;
    height: 86px;
    margin-left: 10px;
    svg {
      height: 55px;
      widows: 55px;
      display: block;
    }
  }
}

@media screen and (max-width: 1000px) {
  .folder {
    width: 100%;
    margin: 0px;
    margin-bottom: 15px;
    &.add {
      width: 100%;
      height: initial;
      padding: 4px;
      svg {
        margin: auto;
        width:  40px;
        height: 40px;
      }
      margin-left: 0px;
      margin-top: 10px;
    }
  }
  .password {
    width: 100%;
    margin: 0px;
    margin-bottom: 15px;
    .password-username {
      font-size: 17px;
    }
    .password-website {
      font-size: 15px;
    }
    .password-head {
      h1 {
        font-size: 15px
      }
      img {
        width:  20px;
        height: 20px;
      }
    }
    &.add {
      width: 100%;
      padding: 4px;
      svg {
        margin: auto;
        width:  40px;
        height: 40px;
      }
      margin-left: 0px;
      margin-top: 10px;
    }
  }
}
</style>
