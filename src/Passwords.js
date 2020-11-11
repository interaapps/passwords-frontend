import { PrajaxClient } from "cajaxjs";
import store from "./store";
import helpers from "./helpers";
import CryptoJS from 'crypto-js'
import Router from './router'; 


export default class Passwords {
    constructor(baseUrl, session){
        this.keys = {}
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
            console.log(Router.currentRoute);
            store.state.fetched = true
            if (res.error && Router.currentRoute.name != "Authentication") {
                window.location = process.env.VUE_APP_API_BASE+"/auth/ia/login"
            }
            store.state.user      = res.user;
            store.state.passwords = res.passwords;
            store.state.keys      = res.keys;
            const keys = res.keys.reverse()
            for (let index in keys) {
                const element = keys[index];
                this.keys[element.name] = element
                if (element.type == 'MASTER_PASSWORD')
                    store.state.masterPassword = element 
            }
        })
    }

    fakeResponse(entryName){
        return new Promise((then)=>{then(localStorage[entryName])})
    }

    putPassword(data){
        return this.apiClient.put("/password", data).then(res=>res.json())
    }

    deletePassword(password){
        return this.apiClient.delete("/password/"+password).then(res=>res.json())
    }

    putFolder(data){
        return this.apiClient.put("/folder", data).then(res=>res.json())
    }

    deleteFolder(folder){
        return this.apiClient.delete("/folder/"+folder).then(res=>res.json())
    }

    checkOnline(){
        return navigator.onLine || false
    }

    getKey(name){
        console.log(store.state.encryptionKey);
        return CryptoJS.AES.decrypt(this.keys[name].key, store.state.encryptionKey).toString(CryptoJS.enc.Utf8);
    }

    hasKey(name){
        console.log(this.keys[name]);
        return typeof this.keys[name] !== 'undefined';
    }

    putKey(name, type, key){
        return this.apiClient.put("/key", {name, type, key: CryptoJS.AES.encrypt(key, store.state.encryptionKey).toString()}).then(res=>res.json())
    }

    setMasterPassword(masterPassword){
        return this.apiClient.put("/key", {name: "APP.MASTER", type: 'MASTER_PASSWORD', key: masterPassword}).then(res=>res.json())
    }

    getCurrentFolder(){
        return store.state.currentFolder || store.state.passwords
    }

    decryptPasswords(passwords = null, key = null){
        if (passwords === null)
            passwords = store.state.passwords
        let keyGiven = true
        if (key === null) {
            keyGiven = false
            key      = store.state.encryptionKey
        }

        console.log(passwords);

        for (let folder in passwords.folders) {
            let element = passwords.folders[folder]
            if (element.folder) {
                if (this.hasKey("FOLDER:"+element.folder.id)) {
                    element.encryptionKey = this.getKey("FOLDER:"+element.folder.id)
                } else if (keyGiven && key) {
                    element.encryptionKey = key
                } else
                    console.log("Couldn't get Encryption-Key");
            }
            this.decryptPasswords(element, element.encryptionKey)
        }

        for (let password in passwords.passwords) {
            let element = passwords.passwords[password]
            try {
                element.website     = CryptoJS.AES.decrypt(element.website,     key).toString(CryptoJS.enc.Utf8);
                element.websiteHost = helpers.getWebsiteHost(element.website)
                element.name        = CryptoJS.AES.decrypt(element.name,        key).toString(CryptoJS.enc.Utf8);
                element.username    = CryptoJS.AES.decrypt(element.username,    key).toString(CryptoJS.enc.Utf8);
                element.password    = CryptoJS.AES.decrypt(element.password,    key).toString(CryptoJS.enc.Utf8);
                element.description = CryptoJS.AES.decrypt(element.description, key).toString(CryptoJS.enc.Utf8);
                
                element.key = key;
                console.log(element)
            } catch(e){
                console.log("Error while decrypting")
            }
        }
    }
}