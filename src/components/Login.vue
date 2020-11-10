<template>
    <div>
        <Modal :opened="!$store.state.encryptionKey" >
            <div v-if="!$store.state.fetched">
                <br>
                <h1>Loading...</h1><br>
                <h3>Please wait a few seconds.</h3>
                <br>
            </div>
            <div v-else-if="$store.state.user !== null">
                <div v-if="$store.state.masterPassword === null">
                    <img id="profile-picture" :src="$store.state.user.profilepic || 'https://accounts.interaapps.de/nopb.png'">
                    <h1 id="user-name">Welcome {{$store.state.user.username || 'Not logged in'}},</h1>
                    <h3 style="text-align: center; color: #434343; margin-top: 10px">Welcome to InteraApps-Passwords! You have to enter a secure password. This will be used to encrypt every password.</h3>
                    <input id="password-input" v-model="password" type="password" class="input" style="width: 100%" placeholder="Password">
                    <a @click="register" id="login-button" class="btn">CREATE</a>
                </div>
                <div v-else>
                    <img id="profile-picture" :src="$store.state.user.profilepic || 'https://accounts.interaapps.de/nopb.png'">
                    <h1 id="user-name">{{$store.state.user.username || 'Not logged in'}}</h1>
                    <input id="password-input" v-model="password" type="password" class="input" style="width: 100%" placeholder="Password">
                    <a @click="login" id="login-button" class="btn">LOGIN</a>
                    <span v-if="incorrectPassword">Incorrect Password</span>
                </div>
            </div>
        </Modal>
    </div>
</template>
<script>
import Modal from "./Modal";

import CryptoJS from 'crypto-js'
import helpers from '../helpers';

export default {
    data: ()=>({
        password: "",
        incorrectPassword: false
    }),
    components: {
        Modal
    },
    methods:{
        login(){
            let masterKey = CryptoJS.AES.decrypt(this.$store.state.masterPassword.key, this.password).toString(CryptoJS.enc.Utf8);
            if (masterKey.startsWith(":MASTER:")) {
                this.passwordsClient.decryptPasswords(this.$store.state.passwords, masterKey)
                this.$store.state.encryptionKey = masterKey
                console.log(this.passwordsClient.getKey("FOLDER:9"));
            } else {
                this.incorrectPassword = true
            }
        },
        register(){
                this.passwordsClient
                .setMasterPassword(CryptoJS.AES.encrypt(/*MASTERKEY*/":MASTER:"+helpers.randomString(100), this.password).toString())
                .then(()=>{
                    this.passwordsClient.fetchAndInsert();
                });
        }
    }
}
</script>

<style lang="scss" scoped>
#profile-picture {
    width: 100px;
    height: 100px;
    display: block;
    margin: auto;
    border: #fb1740 solid 4px;
    border-radius: 50%;
    margin-top: 40px;
}

#user-name {
    margin-top: 30px;
    text-align: center;
    color: #434343;

}

#password-input {
    margin-top: 30px;
    margin-bottom: 20px;
}

#login-button {
    margin-top: 20px;
    margin-bottom: 40px;
    float: right;
}
</style>