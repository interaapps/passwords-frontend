<template>
    <div>
        <div id="sidenav">
            
            <router-link class="entry" :class="{selected: $route.name=='Home'}" to="/">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-key" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/><path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
            </router-link>

            <router-link class="entry" :class="{selected: $route.name=='SecurityCheck'}" to="/security-check">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-shield-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>
            </router-link>

            <router-link class="entry" :class="{selected: $route.name=='Notes'}" to="/notes">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-journal" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/></svg>
            </router-link>
        </div>
        <div id="nav">
            <router-link to="/" id="logo">
                <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M340 132C340 108.131 330.518 85.2387 313.64 68.3604C296.761 51.4821 273.869 42 250 42C226.131 42 203.239 51.4821 186.36 68.3604C169.482 85.2387 160 108.131 160 132L196 132C196 117.678 201.689 103.943 211.816 93.8162C221.943 83.6893 235.678 78 250 78C264.322 78 278.057 83.6893 288.184 93.8162C298.311 103.943 304 117.678 304 132H340Z" fill="#C4C4C4"/><rect x="160" y="128" width="36" height="71" fill="#C4C4C4"/><rect x="304" y="132" width="36" height="71" fill="#C4C4C4"/><circle cx="250.5" cy="306.5" r="152.5" fill="white"/><circle cx="312.5" cy="292.5" r="0.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="314.5" cy="298.5" r="0.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="320.5" cy="288.5" r="0.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="305.5" cy="302.5" r="0.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="290.5" cy="287.5" r="0.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="305" cy="326" r="1" fill="#4542F4" fill-opacity="0.32"/><circle cx="298.5" cy="316.5" r="1.5" fill="#4542F4" fill-opacity="0.32"/><path d="M363.979 392.102C355.423 393.422 346.669 392.403 338.645 389.153C330.621 385.903 323.625 380.544 318.398 373.643C313.172 366.741 309.909 358.555 308.955 349.95C308.001 341.346 309.393 332.643 312.982 324.765C316.57 316.887 322.223 310.125 329.341 305.198C336.459 300.27 344.777 297.359 353.414 296.773C362.052 296.187 370.687 297.948 378.405 301.87C386.123 305.791 392.637 311.727 397.257 319.048L380.903 329.368C378.144 324.996 374.255 321.451 369.646 319.11C365.037 316.768 359.881 315.717 354.723 316.067C349.566 316.416 344.599 318.155 340.348 321.097C336.098 324.04 332.723 328.077 330.58 332.781C328.437 337.486 327.606 342.682 328.175 347.82C328.745 352.958 330.693 357.847 333.814 361.968C336.935 366.089 341.113 369.289 345.904 371.229C350.696 373.17 355.923 373.778 361.032 372.99L363.979 392.102Z" fill="#4542F4" fill-opacity="0.32"/><path d="M132.5 215.5C157.5 231.5 202.8 279.6 184 344C165.2 408.4 241.167 431.833 281.5 435.5" stroke="#4542F4" stroke-opacity="0.32" stroke-width="16"/><circle cx="250.5" cy="306.5" r="139.5" stroke="#4542F4" stroke-width="26"/><circle cx="250.5" cy="260.5" r="38.5" fill="#4542F4"/><rect x="237" y="257" width="27" height="128" rx="13.5" fill="#4542F4"/><rect x="249.243" y="207.323" width="34" height="34" rx="6" transform="rotate(-45.0924 249.243 207.323)" stroke="#4542F4" stroke-opacity="0.32" stroke-width="6"/><rect x="233.828" y="174.271" width="20.3923" height="22.0988" rx="5" transform="rotate(-45.0924 233.828 174.271)" stroke="#4542F4" stroke-opacity="0.32" stroke-width="4"/><rect x="302.121" y="217.382" width="18.7228" height="18.7228" rx="3.5" transform="rotate(-45.0924 302.121 217.382)" stroke="#4542F4" stroke-opacity="0.32" stroke-width="3"/><rect x="288.414" y="228.694" width="11.6906" height="11.6906" rx="2" transform="rotate(-45.0924 288.414 228.694)" stroke="#4542F4" stroke-opacity="0.32" stroke-width="2"/><circle cx="317.934" cy="300.384" r="1.12941" transform="rotate(-15 317.934 300.384)" fill="#4542F4" fill-opacity="0.32"/><circle cx="310" cy="313" r="2" fill="#4542F4" fill-opacity="0.32"/><circle cx="331.5" cy="296.5" r="1.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="320.5" cy="285.5" r="2.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="302" cy="297" r="2" fill="#4542F4" fill-opacity="0.32"/><circle cx="300.5" cy="308.5" r="1.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="338" cy="291" r="2" fill="#4542F4" fill-opacity="0.32"/></svg>
            </router-link>
            <div id="search" :class="{focused: searchOpened}">
                <span v-if="!searchOpened" style="position: absolute; right: 20px; top: 10px; background: #00000009; padding: 2px 10px; font-size: 14px; border-radius: 5px">CTRL+F</span>
                <input @keydown="searchOpened = true" @focusout="leftFocus" type="search" v-model="search" placeholder="Search" autocomplete="off">
                <div id="result">
                    <span class="label">ACTIONS</span>

                    <div v-if="searchMatch('add-folder') || searchMatch('folder')"  @click="$store.state.folderModal = {opened: true}" class="result"> 
                        <svg viewBox="0 0 16 16" class="bi bi-folder-plus favicon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z"/><path fill-rule="evenodd" d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/></svg>
                        <span class="title">Add Folder</span> 
                    </div>

                    <div v-if="searchMatch('add-password') || searchMatch('password')" @click="createPassword" class="result"> 
                    <svg viewBox="0 0 16 16" class="bi bi-plus-circle favicon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
                        <span class="title">Add Password</span> 
                    </div>

                    <span class="label">PAGES</span>
                    
                    <router-link v-if="searchMatch('passwords')" to="/" class="result"> 
                        <svg  viewBox="0 0 16 16" class="bi bi-key favicon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/><path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                        <span class="title">Passwords</span> 
                    </router-link>

                    <router-link @click="alert('Yea')" v-if="searchMatch('security check')" to="/security-check" class="result"> 
                        <svg viewBox="0 0 16 16" class="bi bi-shield-exclamation favicon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>
                        <span class="title">Security Check</span> 
                    </router-link>

                    <router-link @click="alert('notes')" to="/notes" class="result"> 
                        <svg viewBox="0 0 16 16" class="bi bi-journal favicon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/></svg>
                        <span class="title">Notes</span> 
                    </router-link>

                    <router-link v-if="searchMatch('information') || searchMatch('about us') || searchMatch('about ia passwords') || searchMatch('help')" to="/info" class="result"> 
                        <svg viewBox="0 0 16 16" class="bi bi-info-circle favicon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>
                        <span class="title">About IA-Passwords & Help</span> 
                    </router-link>

                    <span class="label">PASSWORDS</span>
                    <div v-for="password in passwords" :key="password.id" >
                        <div class="result" v-if="searchMatch(password.name) || searchMatch(password.email) || searchMatch(password.username) || searchMatch(password.website)" @click="$store.state.currentPassword = password">
                            <img class="favicon" :src="'https://icons.duckduckgo.com/ip3/'+password.websiteHost+'.ico'">
                            <span class="title">{{password.name}}</span>
                        </div>
                    </div>

                    <span class="label">FOLDER</span>
                    <div v-for="folder in folders" :key="folder.id">
                        <div class="result" v-if="searchMatch(folder.name)">
                            <svg viewBox="0 0 16 16" class="bi bi-folder favicon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z"/><path fill-rule="evenodd" d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"/></svg>
                            <span class="title">{{folder.name}}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import helpers from "../helpers";
export default {
    data: ()=>({
        search: "",
        searchOpened: false,

        passwords: [],
        folders: []
    }),
    mounted(){
        window.addEventListener("keydown", (event) => {
            //console.log(event.key)
            if (event.ctrlKey && event.key == 'f') {
                this.searchOpened = true
                event.preventDefault()
                const element = document.querySelector("#search input")

                if (element) {
                    element.focus()
                    element.select()
                } else console.log("search element not found!");
            }
            if (this.searchOpened){
                if (event.key == 'Escape') {
                    this.searchOpened = false
                }
            }
        })
    },
    watch:{
      '$store.state.passwords'(to){
          this.folders = []
          this.passwords = []
          this.initPasswordSearch(to)
      }
    },
    methods: {
        initPasswordSearch(passwords){
            for (const password of passwords.passwords){
                this.passwords.push(password)
            }
            for (const folder of passwords.folders){
                this.folders.push(folder.folder)
                this.initPasswordSearch(folder)
            }
        },
        searchMatch(match){
            if (match)
                return match.trim()
                    .replaceAll(" ", "")
                    .replaceAll("-", "")
                    .toLowerCase()
                    .includes(this.search
                                .toLowerCase()
                                .trim()
                                .replaceAll(" ", "")
                                .replaceAll("-", ""))
            return false
        },
        leftFocus(){
            setTimeout(()=>{this.searchOpened = false; this.search = "";}, 110)
        },
        createPassword(){
            this.$store.state.currentPassword = {
                name: "Example",
                username: this.$store.state.user.username,
                password: helpers.randomString(15),
                website: "https://",
                description: ``
            }
        }
    }
}
</script>
<style lang="scss" scoped>
#sidenav {
    background: #ADADAD22;
    backdrop-filter: blur(14px);
    position: fixed;
    top: 65px;
    left: 0px;
    position: fixed;
    height: 100%;
    width: 65px;

    .entry,
    .entry:visited {
        color: #434343;
        width: 100%;
        display: block;
        margin-top: 10px;
        &.selected {
            background: #4542F411;
            color: #4542F4;
        }
        &.selected::before {
            content: "";
            background: #4542F4;
            left: 0px;
            position: absolute;
            width: 4px;
            border-radius: 0px 10px 10px 0px;
            height: 22px;
            z-index: 10000;
            margin-top: 9px;
            display: block;
        }
        &:hover {
            background: #0000000A;
        }
        svg {
            margin: auto;
            display: block;
            width:  30px;
            height: 40px;
        }
    }

}

#nav {
    background: #ADADAD22;
    backdrop-filter: blur(14px);
    position: fixed;
    top: 0px;
    left: 0px;
    position: fixed;
    width: 100%;
    height: 65px;

    #logo {
        svg {
            width:  55px;
            height: 55px;
        }
        display: inline-block;
        margin: 5px;
    }

    #search {
        background: #FFF;
        position: fixed;
        z-index: 10000;
        top: 10px;
        width: 650px;
        max-width: calc(100% - 200px);
        left: 50%;
        transform: translateX(-50%);
        transition: 0.3s;
        border-radius: 5px;

        input {
            border: none;
            background: none;
            outline: none;
            height: 44px;
            width: 100%;
            padding: 0px 15px;
        }

        &:focus-within {
            box-shadow: 0px 0px 4px 1px #00000011;
        }

        &.focused{ 
            width: 700px;
            #result {
                display: block;
            }
        }

        #result {
            background: #FFF;
            border-radius: 5px;
            display: none;
            height: 275px;
            max-height: 100%;
            overflow: auto;
            .label {
                margin-left: 17px;
                font-size: 16px;
            }
            a.result, a.result:visited {
                display: block;
                text-decoration: none;
                color: #323232;
            }
            .result {
                padding: 10px 15px;
                cursor: pointer;
                border-radius: 4px;
                margin: 3px;
                .title {
                    font-weight: 600;
                    color: #323232;
                    vertical-align: middle;
                }
                .favicon {
                    width:  28px;
                    height: 28px;
                    vertical-align: middle;
                    margin-right: 10px;
                    color: #656565;
                }
                &:hover {
                    background: #00000007;
                }
            }
        }
    }
}
</style>