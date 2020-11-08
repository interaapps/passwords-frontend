import { PrajaxClient } from "cajaxjs";
import store from "./store";
import helpers from "./helpers";
import CryptoJS from 'crypto-js'

export default class Passwords {
    constructor(baseUrl, session){
        this.apiClient = new PrajaxClient({baseUrl})
        this.apiClient.options = {json: true,header: {}}
        if (session)
            this.apiClient.options.header["X-Key"] = session
    }

    fetch(){
        if (!this.checkOnline())
            return this.fakeResponse("data.passwords")
        return this.apiClient.get("/fetch").then(res=>res.json())
    }

    fetchAndInsert(){
        return this.fetch().then(res=>{
            store.state.user      = res.user;
            store.state.passwords = res.passwords;
            store.state.keys      = res.keys;
            const keys = res.keys.reverse()
            for (let index in keys) {
                const element = keys[index];
                console.log(element)
                if (element.type == 'MASTER_PASSWORD')
                    store.state.masterPassword = element 
            }
            console.log(store.state)
        })
    }

    fakeResponse(entryName){
        return new Promise((then)=>{then(localStorage[entryName])})
    }

    putPassword(data){
        return this.apiClient.post("/password", data).then(res=>res.json())
    }

    deletePassword(){
        return this.apiClient.delete("/password").then(res=>res.json())
    }

    putFolder(data){
        return this.apiClient.put("/folder", data).then(res=>res.json())
    }

    deleteFolder(){
        return this.apiClient.delete("/folder").then(res=>res.json())
    }

    checkOnline(){
        return navigator.onLine || false
    }

    setMasterPassword(masterPassword){
        return this.apiClient.post("/user/masterpassword", {key: masterPassword}).then(res=>res.json())
    }

    decryptPasswords(passwords = null, key = null){
        if (passwords === null)
            passwords = store.state.passwords
        if (key === null)
            key       = store.state.encryptionKey

        console.log("DECRYPT: "+key);
        console.log(key)
        for (let password in passwords.passwords) {
            let element = passwords.passwords[password]
            try {
                console.log(".-.-.-.-SITE "+element.website);
                element.website     = CryptoJS.AES.decrypt(element.website,     key).toString(CryptoJS.enc.Utf8);
                element.websiteHost = helpers.getWebsiteHost(element.website)
                element.name        = CryptoJS.AES.decrypt(element.name,        key).toString(CryptoJS.enc.Utf8);
                element.username    = CryptoJS.AES.decrypt(element.username,    key).toString(CryptoJS.enc.Utf8);
                element.password    = CryptoJS.AES.decrypt(element.password,    key).toString(CryptoJS.enc.Utf8);
                element.description = CryptoJS.AES.decrypt(element.description, key).toString(CryptoJS.enc.Utf8);
                console.log(element)
            } catch(e){
                console.log("Error while decrypting")
            }
        }
    }
}