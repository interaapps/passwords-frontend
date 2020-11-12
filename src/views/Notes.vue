<template>
    <div>
        <div id="notes-list" >
            <div id="actions">
                <svg @click="newNote()" id="add" viewBox="0 0 16 16" class="bi bi-journal-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/><path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/></svg>
            </div>
            <div id="list">
                <div class="entry" v-for="note in $store.state.notes" :key="note.id" @click="selectNote(note)" :class="{selected: selected == note.id}">
                    <h1>{{note.title}}</h1>
                    <h2>{{note.content.substring(0, 35)}}</h2>
                </div>
            </div>
        </div>
        <div id="current-note">
            <div id="right">
                <div id="badges">

                    <span v-if="unsaved" style="background: #EE4343" class="badge">UNSAVED</span>
                    <span v-if="!selected" class="badge">NEW</span>
                    <svg v-else width="25px" @click="deleteNote" height="25px" style="color: #F13737; cursor: pointer" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                </div>
            </div>
            <input    @keypress="unsaved = true" @keydown.ctrl="keyboardEvents" type="text" id="title-input" v-model="title" placeholder="Title">
            <h4 id="date">Updated: {{updated}}</h4>
            <textarea @keypress="unsaved = true" @keydown.ctrl="keyboardEvents" id="content-input" v-model="contents" placeholder="Just write in here :)"></textarea>
        </div>
    </div>
</template>
<script>
import CryptoJS from 'crypto-js'

export default {
    data: ()=>({
        selected: null,
        title:    "",
        contents: "",
        updated:  "now",
        unsaved:  false
    }),
    methods:{
        selectNote(note){
            this.selected = note.id
            this.title    = note.title
            this.contents = note.content
            this.updated  = note.updated_at
            this.unsaved  = false
        },
        newNote(){
            this.selected = null
            this.title    = ""
            this.contents = ""
            this.updated  = "now"
            this.unsaved  = true
        },
        deleteNote(){
            this.passwordsClient
                .deleteNote(this.selected)
                .then(res=>{
                    if (res.success) {
                        this.newNote()
                        this.passwordsClient.fetchAndDecrypt()
                    }
                })
        },
        save(){
            let data = {
                title:   CryptoJS.AES.encrypt(this.title,    this.$store.state.encryptionKey).toString(),
                content: CryptoJS.AES.encrypt(this.contents, this.$store.state.encryptionKey).toString()
            }
            if (this.selected)
                data.id = this.selected

            console.log(this.selected);

            this.passwordsClient
                .putNote(data).then(res=>{
                    if (res.success) {
                        if (!res.extra.updated) {
                            this.selected = res.extra.id
                        }
                        this.unsaved  = false
                        this.passwordsClient.fetchAndDecrypt()
                    }
                })
        },
        keyboardEvents(e){
            if (e.code == 'KeyS'){
                this.save()
                e.preventDefault()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
#notes-list {
    height: 100%;
    width: 280px;
    background: #F9F9F9;
    position: fixed;
    left: 65px;
    top: 65px;

    #actions {
        padding: 5px 10px;
        min-height: 40px;
        #add {
            color: #545454;
            height: 24px;
            width:  24px;
            float: right;
            margin-top: 3px;
            cursor: pointer;
        }
    }

    #list {
        .entry {
            padding: 10px 14px;
            cursor: pointer;
            h1 {
                font-size: 23px;
                font-weight: 700;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #434343;
            }
            h2 {
                font-size: 20px;
                font-weight: 600;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #545454;
            }

            &.selected {
                background: #00000006;
            }

            &:hover {
                background: #00000004;
            }
        }
    }
}

#current-note {
    margin-left: 300px;
    margin-top:  110px;
    display: block;
    height: 100%;

    input,
    textarea {
        border: none;
        outline: none;
        display: block;
    }

    #date {
        margin-top: 18px;
        margin-bottom: 34px;
        color: #787878;
    }

    #title-input {
        width: 100%;
        font-size: 40px;
        font-weight: 600;
        color: #3A3A3A;
    }

    #content-input {
        width: 100%;
        font-size: 24px;
        min-height: calc(100vh - 200px);
        resize: vertical;
        color: #434343;
    }

    #right {
        float: right;
        position: absolute;
        right: 50px;
        #badges {
            .badge {
                background: #7aec38;
                color: #FFF;
                padding: 2px 15px;
                border-radius: 4.5px; 
                margin-right: 10px;
                display: inline-block;
                vertical-align: middle;
                margin-top: 15px;
            }

            svg {
                vertical-align: middle;
                margin-top: 15px;
                width:  27px;
                height: 27px;
            }
        }
    }
}
</style>