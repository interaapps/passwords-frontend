<template>
    <div>
        <div id="sidenav">
            
            <router-link class="entry" :class="{selected: $route.name=='Home'}" to="/">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-key" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
            </router-link>

            <router-link class="entry" :class="{selected: $route.name=='SecurityCheck'}" to="/security-check">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-shield-exclamation" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                </svg>
            </router-link>
        </div>
        <div id="nav">
            <router-link to="/" id="logo">
                <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M340 132C340 108.131 330.518 85.2387 313.64 68.3604C296.761 51.4821 273.869 42 250 42C226.131 42 203.239 51.4821 186.36 68.3604C169.482 85.2387 160 108.131 160 132L196 132C196 117.678 201.689 103.943 211.816 93.8162C221.943 83.6893 235.678 78 250 78C264.322 78 278.057 83.6893 288.184 93.8162C298.311 103.943 304 117.678 304 132H340Z" fill="#C4C4C4"/><rect x="160" y="128" width="36" height="71" fill="#C4C4C4"/><rect x="304" y="132" width="36" height="71" fill="#C4C4C4"/><circle cx="250.5" cy="306.5" r="152.5" fill="white"/><circle cx="312.5" cy="292.5" r="0.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="314.5" cy="298.5" r="0.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="320.5" cy="288.5" r="0.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="305.5" cy="302.5" r="0.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="290.5" cy="287.5" r="0.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="305" cy="326" r="1" fill="#4542F4" fill-opacity="0.32"/><circle cx="298.5" cy="316.5" r="1.5" fill="#4542F4" fill-opacity="0.32"/><path d="M363.979 392.102C355.423 393.422 346.669 392.403 338.645 389.153C330.621 385.903 323.625 380.544 318.398 373.643C313.172 366.741 309.909 358.555 308.955 349.95C308.001 341.346 309.393 332.643 312.982 324.765C316.57 316.887 322.223 310.125 329.341 305.198C336.459 300.27 344.777 297.359 353.414 296.773C362.052 296.187 370.687 297.948 378.405 301.87C386.123 305.791 392.637 311.727 397.257 319.048L380.903 329.368C378.144 324.996 374.255 321.451 369.646 319.11C365.037 316.768 359.881 315.717 354.723 316.067C349.566 316.416 344.599 318.155 340.348 321.097C336.098 324.04 332.723 328.077 330.58 332.781C328.437 337.486 327.606 342.682 328.175 347.82C328.745 352.958 330.693 357.847 333.814 361.968C336.935 366.089 341.113 369.289 345.904 371.229C350.696 373.17 355.923 373.778 361.032 372.99L363.979 392.102Z" fill="#4542F4" fill-opacity="0.32"/><path d="M132.5 215.5C157.5 231.5 202.8 279.6 184 344C165.2 408.4 241.167 431.833 281.5 435.5" stroke="#4542F4" stroke-opacity="0.32" stroke-width="16"/><circle cx="250.5" cy="306.5" r="139.5" stroke="#4542F4" stroke-width="26"/><circle cx="250.5" cy="260.5" r="38.5" fill="#4542F4"/><rect x="237" y="257" width="27" height="128" rx="13.5" fill="#4542F4"/><rect x="249.243" y="207.323" width="34" height="34" rx="6" transform="rotate(-45.0924 249.243 207.323)" stroke="#4542F4" stroke-opacity="0.32" stroke-width="6"/><rect x="233.828" y="174.271" width="20.3923" height="22.0988" rx="5" transform="rotate(-45.0924 233.828 174.271)" stroke="#4542F4" stroke-opacity="0.32" stroke-width="4"/><rect x="302.121" y="217.382" width="18.7228" height="18.7228" rx="3.5" transform="rotate(-45.0924 302.121 217.382)" stroke="#4542F4" stroke-opacity="0.32" stroke-width="3"/><rect x="288.414" y="228.694" width="11.6906" height="11.6906" rx="2" transform="rotate(-45.0924 288.414 228.694)" stroke="#4542F4" stroke-opacity="0.32" stroke-width="2"/><circle cx="317.934" cy="300.384" r="1.12941" transform="rotate(-15 317.934 300.384)" fill="#4542F4" fill-opacity="0.32"/><circle cx="310" cy="313" r="2" fill="#4542F4" fill-opacity="0.32"/><circle cx="331.5" cy="296.5" r="1.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="320.5" cy="285.5" r="2.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="302" cy="297" r="2" fill="#4542F4" fill-opacity="0.32"/><circle cx="300.5" cy="308.5" r="1.5" fill="#4542F4" fill-opacity="0.32"/><circle cx="338" cy="291" r="2" fill="#4542F4" fill-opacity="0.32"/></svg>
            </router-link>
            <div id="search">
                <input type="search" v-model="search" placeholder="Search" autocomplete="off">
                <div id="result">
                    <span class="label">APP</span>
                    
                    <router-link v-if="searchMatch('passwords')" to="/" class="result"> 
                        <svg  viewBox="0 0 16 16" class="bi bi-key favicon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/><path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                        <span class="title">Passwords</span> 
                    </router-link>

                    <router-link v-if="searchMatch('security check')" to="/security-check" class="result"> 
                        <svg viewBox="0 0 16 16" class="bi bi-shield-exclamation favicon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>
                        <span class="title">Security Check</span> 
                    </router-link>

                    <span class="label">FOLDER</span>
                    <span class="label">PASSWORDS</span>
                    <div class="result">
                        <img class="favicon" :src="'https://icons.duckduckgo.com/ip3/'+'pastefy.ga'+'.ico'">
                        <span class="title">
                            Hello world
                        </span>
                    </div>
                    <div class="result">
                        <img class="favicon" :src="'https://icons.duckduckgo.com/ip3/'+'interaapps.de'+'.ico'">
                        <span class="title">
                            Test 2
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data: ()=>({
        search: ""
    }),
    methods: {
        searchMatch(match){
            return match.trim().replaceAll(" ", "").toLowerCase().includes(this.search.toLowerCase().trim().replaceAll(" ", ""))
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

        input:focus + #result {
            display: block;
        }

        #result {
            background: #FFF;
            border-radius: 5px;
            display: none;
            max-height: 300px;
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