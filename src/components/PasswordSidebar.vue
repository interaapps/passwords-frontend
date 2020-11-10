<template>
    <div id="password-sidebar" v-if="$store.state.currentPassword != null">
        <Modal :opened="passwordGeneratorOpened" >
            <svg @click="passwordGeneratorOpened = false" id="close-button" width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/></svg>
            <h1 id="user-name" style="font-size: 25px">Generate Password</h1>

            <span class="label">LENGTH</span>
            <input v-model="generatePasswordLength" @change="generatePassword" type="range" min="0" max="100" style="width: 100%">

            <span class="label">USE LETTERS:       <input @change="generatePassword" v-model="generatePasswordLetters" type="checkbox"></span>
            <span class="label">USE NUMBERS:       <input @change="generatePassword" v-model="generatePasswordNumbers" type="checkbox"></span>
            <span class="label">USE SPECIAL CHARS: <input @change="generatePassword" v-model="generatePasswordSpecialChars" type="checkbox"></span>

            <span class="label">OUTPUT</span>

            <input id="password-input" v-model="generatedPassword" readonly="true" type="text" class="input" style="width: 100%" >
            <br>
            <a @click="passwordGeneratorOpened = false; password = generatedPassword;" id="login-button" class="btn">USE THIS</a>
        </Modal> 
        <div id="action-buttons">
            <svg v-if="$store.state.currentPassword.id" width="25px" height="25px" style="float: right; color: #F13737" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
            <svg @click="$store.state.currentPassword = null" width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
            <span v-if="changed" id="unsaved-indicator">UNSAVED</span>
        </div>

        <span class="label">NAME</span>
        <div class="passwords-input-box">
            <input type="text" class="" v-model="name" autocomplete="nofill" aria-autocomplete="list" placeholder="name">
        </div>

        <span class="label">USERNAME</span>
        <div class="passwords-input-box">
            <div class="action-buttons">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clipboard" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>
            </div>
            <input style="padding-right: 30px;" type="text" class="" v-model="username" autocomplete="nofill" aria-autocomplete="list" placeholder="username">
        </div>

        <span class="label">PASSWORD</span>
        <div class="passwords-input-box">
            <div class="action-buttons">
                <svg @click="passwordGeneratorOpened = true" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="4" cy="12" r="1.5"/><circle cx="8" cy="8" r="1.5"/></svg>

                <svg v-if="passwordShown" @click="passwordShown = false" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
                <svg v-else @click="passwordShown = true" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-slash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/><path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z"/><path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"/></svg>
                <svg viewBox="0 0 16 16" class="bi bi-clipboard" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>
            </div>
            <input style="padding-right: 90px;" v-if="passwordShown" type="password" class="" v-model="password" autocomplete="new-password" aria-autocomplete="list" placeholder="password">
            <input style="padding-right: 90px;" v-else type="text" class="" v-model="password" autocomplete="new-password" aria-autocomplete="list" placeholder="password">
        </div>

        <span class="label">WEBSITE</span>
        <div class="passwords-input-box">
            <div class="action-buttons">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clipboard" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>
            </div>
            <input style="padding-right: 30px;" type="text" class="" v-model="website" autocomplete="nofill" aria-autocomplete="list" placeholder="website">
        </div>

        <span class="label">DESCRIPTION</span>
        <div class="passwords-input-box">
            <textarea style="resize: vertical; height: 100px" type="text" class="" v-model="description" autocomplete="nofill" aria-autocomplete="list" placeholder="description"></textarea>
        </div>
        <a id="login-button" style="float: right; margin-top: 20px" class="btn" @click="save">SAVE</a>
    </div>    
</template>
<script>
import Modal from "./Modal";
import helpers from "../helpers";

import CryptoJS from 'crypto-js'

export default {
    data: ()=>({
        name: '-',
        username: '-',
        website: '-',
        password: '-', 
        description: '-',
        passwordShown: false,

        generatePasswordLength: 15,
        generatePasswordLetters: true,
        generatePasswordNumbers: true,
        generatePasswordSpecialChars: false,
        generatedPassword: '-',
        passwordGeneratorOpened: false
    }),
    components: {
        Modal
    },
    mounted(){
        this.generatePassword()
    },
    watch: {
        '$store.state.currentPassword'(){
            this.name        = this.$store.state.currentPassword.name
            this.username    = this.$store.state.currentPassword.username
            this.website     = this.$store.state.currentPassword.website
            this.password    = this.$store.state.currentPassword.password
            this.description = this.$store.state.currentPassword.description
        }
    },
    methods: {
        save(){
            console.log("ENCRYPT: "+this.$store.state.encryptionKey);
            let data = {
                name: CryptoJS.AES.encrypt(this.name,               this.$store.state.encryptionKey).toString(),
                username: CryptoJS.AES.encrypt(this.username,       this.$store.state.encryptionKey).toString(),
                password: CryptoJS.AES.encrypt(this.password,       this.$store.state.encryptionKey).toString(),
                website: CryptoJS.AES.encrypt(this.website,         this.$store.state.encryptionKey).toString(),
                description: CryptoJS.AES.encrypt(this.description, this.$store.state.encryptionKey).toString()
            }
            console.log(this.username);
            if (this.$store.state.currentPassword.id)
                data.id = this.$store.state.currentPassword.id
            this.passwordsClient
                .putPassword(data)
                .then(res=>{
                    if (res.success)
                        this.$store.state.currentPassword = null;
                    this.passwordsClient
                        .fetchAndInsert()
                        .then(()=>{
                            this.passwordsClient.decryptPasswords()
                        })
                })
        },
        delete(){
            this.passwordsClient
        },
        generatePassword(){
            let letters = "";
            if (this.generatePasswordLetters)
                letters += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            if (this.generatePasswordNumbers)
                letters += "1234567890";
            if (this.generatePasswordSpecialChars)
                letters += "&!$/()=[]{}?+*#'~'";
            this.generatedPassword = helpers.randomString(this.generatePasswordLength, letters)
            console.log(this.generatedPassword);
        },
        changed(){
            return !(this.name       == this.$store.state.currentPassword.name
                  && this.username   == this.$store.state.currentPassword.username
                  && this.website    == this.$store.state.currentPassword.website
                  && this.password   == this.$store.state.currentPassword.password
                  && this.description == this.$store.state.currentPassword.description)
        }
    }
}
</script>
<style lang="scss" scoped>
#action-buttons {
    margin-top: 10px;
    margin-bottom: 20px;
    svg {
        vertical-align: middle;
        cursor: pointer;
    }

    #unsaved-indicator {
        margin-left: 13px;
        vertical-align: middle;
        display: inline-block;
        color: #F1373788;
    }
}

#password-sidebar {
    position: fixed;
    right: 0px;
    top: 65px;
    width: 320px;
    padding: 10px;
    height: 100%;
    overflow: auto;
    background: #F6F6F6EE;
    margin-bottom: 30px;

    .passwords-input-box {
        background: #FFF;
        border-radius: 5px;
        input, textarea {
            border: none;
            outline: none;
            background: none;
            padding: 8px 14px;
            display: block;
            width: 100%;
        }

        .action-buttons {
            position: absolute;
            right: 20px;
            margin-top: 7.5px;

            svg {
                cursor: pointer;
                height: 16px;
                width:  16px;
                margin-left: 10px;
            }
        }
    }
}

@media screen and (max-width: 720px) {
    
    #password-sidebar {
        width: 100%;
        z-index: 1000;
    }
}
</style>