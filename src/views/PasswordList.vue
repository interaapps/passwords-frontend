<template>
  <div class="home">
    <br>
    <h1 class="section-title">Folder</h1>
    <div>
      <div v-if="passwords.parent !== -1" class="folder" :style="{background: '#EEEEEE', color: '#434343'}" @click="changeFolder($store.state.passwords); $router.push('/')">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/><path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/></svg>
        <span>Home</span>
      </div>

      <div class="folder" v-for="(folder, id) in passwords.folders" :key="id" :style="{background: folder.folder.color}" @click="$router.push('/f/'+folder.folder.id)" @contextmenu.prevent="openedFolderMenu = folder" :class="{opened: openedFolderMenu == folder}">
        <div  @click.prevent.stop="openedFolderMenu = null" @contextmenu.prevent.stop="openedFolderMenu = null" class="contextmenu" v-if="openedFolderMenu === folder"></div>
        
        <!-- Folder Context-Menu -->
        <div @click.prevent.stop v-if="openedFolderMenu === folder" class="contextmenu-menu">
            <div class="contextmenu-menu-entry" @click="passwords = folder">
               <svg viewBox="0 0 16 16" class="bi bi-folder2-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/></svg>
               <span>Open</span>
            </div>
            <div style="color: #F13737" class="contextmenu-menu-entry" @click="deleteFolder(folder)">
               <svg viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
               <span>
                 Delete
               </span>
            </div>
        </div>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-folder" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z"/>
          <path fill-rule="evenodd" d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"/>
        </svg>
        <span>{{folder.folder.name}}</span>
      </div>

      <!-- Add-Button -->
      <div class="folder add" @click="$store.state.folderModal = {opened: true}">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </div>
    </div>
    <br><br>

    <h1 class="section-title">Passwords</h1>

    <div>
      <div class="password" v-for="(password, id) in passwords.passwords" :key="id" @click="$store.state.currentPassword = password" @contextmenu.prevent="openedFolderMenu = 'p-'+password.id"> 
          <svg style="float: right; color: #878787; width: 25px; height: 25px;" v-if="password.totp" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg>
      
          <div class="password-head">
            <img :src="'https://icons.duckduckgo.com/ip3/'+password.websiteHost+'.ico'">
            <h1>{{password.name}}</h1>
          </div>
          <h2 class="password-username">{{password.username}}</h2>
          <h4 class="password-website">{{password.websiteHost}}</h4>

          <div  @click.prevent.stop="openedFolderMenu = null" @contextmenu.prevent.stop="openedFolderMenu = null" class="contextmenu" v-if="openedFolderMenu === 'p-'+password.id"></div>
          <div @click.prevent.stop v-if="openedFolderMenu === 'p-'+password.id" class="contextmenu-menu" style="margin-top: -90px; margin-left: 216px;">
              <div @click="$store.state.currentPassword = password; openedFolderMenu = null" class="contextmenu-menu-entry" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                <span>Open</span>
              </div>
              <div @click="openURL(password.website); openedFolderMenu = null" class="contextmenu-menu-entry" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg>
                <span>Open URL</span>
              </div>
              <div @click="helpers.copyStringToClipboard(password.password); openedFolderMenu = null" class="contextmenu-menu-entry" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>
                <span>Copy to Clipboard</span>
              </div>
              <div v-if="password.totp" @click="copyTOTP(password); openedFolderMenu = null" class="contextmenu-menu-entry" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg>
                <span>Copy TOTP-Code</span>
              </div>
              <div style="color: #F13737" class="contextmenu-menu-entry" @click="
                passwordsClient.deletePassword(password.id)
                  .then(()=>{
                      passwordsClient.fetchAndDecrypt(); $store.state.currentPassword = null; openedFolderMenu = null
                  })">
                <svg viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                <span>Delete</span>
              </div>
          </div>

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
const jsotp = require('jsotp');
export default {
  name: 'Home',
  data: function(){
      return {
          passwords: this.$store.state.passwords,
          key: this.$store.state.encryptionKey,

          openedFolderMenu: null,
          helpers
      }
  },
  mounted(){
    this.openCurrentFolder(this.$route.params.folderId)
  },
  watch:{
      '$store.state.passwords'(to){
        this.passwords = to
        if (this.$route.params.folderId)
          this.openCurrentFolder(this.$route.params.folderId)
      },
      '$route'(to) {
        this.openCurrentFolder(to.params.folderId)
      }
  },
  beforeDestroy(){
      this.$store.state.currentFolder = null
  },
  methods:{
      createPassword(){
          this.$store.state.currentPassword = {
              name: "Example",
              username: this.$store.state.user.username,
              password: helpers.randomString(15),
              website: "https://",
              description: ``
          }
      },
      deleteFolder(folder){
          this.passwordsClient.deleteFolder(folder.folder.id)
              .then(()=>{
                  this.passwordsClient
                        .fetchAndDecrypt()
              })
      },
      changeFolder(folder){
        this.$store.state.currentFolder = folder
        this.passwords = folder
      },
      openCurrentFolder(folderId){
        const folder = this.findFolder(this.passwords, folderId)

        if (folder) {
          this.changeFolder(folder)
        } else {
          this.changeFolder(this.$store.state.passwords)
        }
      },
      findFolder(parent, folder){
        if (parent.parent != -1 && parent.folder && parent.folder.id == folder)
          return parent
        if (parent.folders) {
          for (const dir of parent.folders) {
            const f = this.findFolder(dir, folder)
            if (f)
              return f
          }
        }
        return null
      },
      openURL(a){
        window.open(a)
      },
      copyTOTP(password){
        helpers.copyStringToClipboard(jsotp.TOTP(password.totp).now())
    
      }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
.section-title {
  margin-bottom: 23px;
  color: #767676;
  font-size: 32px;
}

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
    text-overflow: ellipsis;
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
      max-width: calc(100% - 40px);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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


  &.opened {
    position: relative;
    z-index: 1000;
  }
}

.contextmenu {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background: #AAAAAA11;
    backdrop-filter: blur(1.2px);
    z-index: 100;
    cursor: default;
  }

  .contextmenu-menu {
    vertical-align: top;
    margin-top: -10px;
    width: 240px;
    min-height: 100px;
    cursor: default;
    color: #434343;
    position: absolute;
    background: #FFFFFFE0;
    backdrop-filter: blur(2px);
    border-radius: 6px;
    margin-left: 120px;
    box-shadow: 0px 1px 10px 0px #00000011;
    z-index: 100;
    padding: 3px;
    .contextmenu-menu-entry {
      text-align: left;
      padding: 10px;
      border-radius: 6px;
      cursor: pointer;
      svg {
          width: 24px;
          height: 24px;
          display: inline-block;
          vertical-align: middle;
          margin: 0px;
      }
      span {
        vertical-align: middle;
        display: inline-block;
        margin: 0px;
        margin-left: 10px;
      }
      &:hover {
        background: #00000011;
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
