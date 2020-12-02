<template>
    <div>
        <div id="notes-list" :class="{'closed': sideBarClosed, fullscreen: $store.state.app.fullScreenOnNotes}">
            <div id="actions">
                <svg id="open" @click="sideBarClosed = !sideBarClosed" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                <svg @click="newNote()" v-if="!sideBarClosed" id="add" viewBox="0 0 16 16" class="bi bi-journal-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/><path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/></svg>
                <svg id="fullscreen" @click="$store.state.app.fullScreenOnNotes = true" v-if="!$store.state.app.fullScreenOnNotes" viewBox="0 0 16 16" class="bi bi-arrows-fullscreen" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/></svg>
                <svg id="fullscreen" @click="$store.state.app.fullScreenOnNotes = false" v-else viewBox="0 0 16 16" class="bi bi-fullscreen-exit" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/></svg>
            </div>
            <div id="list" v-if="!sideBarClosed">
                <div class="entry" v-for="note in $store.state.notes" :key="note.id" @click="selectNote(note)" :class="{selected: selected == note.id}">
                    <h1>{{note.title}}</h1>
                    <h2>{{note.content.substring(0, 35)}}</h2>
                </div>
            </div>
        </div>
        <div id="current-note" :class="{'sidebar-closed': sideBarClosed, fullscreen: $store.state.app.fullScreenOnNotes}">
            <div id="inner">
                <div id="right">
                    <div id="badges">
                        <svg @click="save()" v-if="unsaved" style="color: #43EE43" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>
                        
                        <svg @click="switchMarkdown" id="markdown-switch" v-if="!markdownEditor" viewBox="0 0 16 16" class="bi bi-markdown" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/><path fill-rule="evenodd" d="M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708z"/><path fill-rule="evenodd" d="M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"/><path d="M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z"/></svg>
                        <svg @click="switchMarkdown" id="markdown-switch" v-else viewBox="0 0 16 16" class="bi bi-markdown-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.5 1a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L11 9.293V5.5a.5.5 0 0 1 .5-.5zM3.56 7.01V11H2.5V5.001h1.208l1.71 3.894h.04l1.709-3.894h1.2V11H7.294V7.01h-.057l-1.42 3.239h-.773l-1.428-3.24H3.56z"/></svg>
                        
                        <svg v-if="selected" width="25px" @click="deleteNote" height="25px" style="color: #F13737; cursor: pointer" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                    </div>
                </div>
                <input    @keyup="unsaved = true" @keydown.ctrl="keyboardEvents" type="text" id="title-input" v-model="title" placeholder="Title">
                <h4 id="date">Updated: {{updated}}</h4>
                <!-- @keypress="markdown" contenteditable="" -->
                <div ref="noteContents" v-if="markdownEditor" @keydown.ctrl="keyboardEvents" id="content-input" class="markdown-contents" v-html="contentsHTML" >
                </div>
                
                <textarea v-else ref="noteContents" @keyup="unsaved = true" @keydown.ctrl="keyboardEvents" id="content-input" v-model="contents" placeholder="Just write in here :)"></textarea>
                
            </div>
        </div>
    </div>
</template>
<script>
import CryptoJS from 'crypto-js'
import { $ } from "jdomjs";

var md = require('markdown-it')({
    typographer:  true,
    breaks: true
});

export default {
    data: function(){return{
        selected: null,
        title:    "",
        contents: "",
        contentsHTML: "",
        updated:  "now",
        unsaved:  false,
        sideBarClosed: false,

        markdownEditor: false
    }},
    methods:{
        selectNote(note){
            this.selected = note.id
            this.title    = note.title
            this.contents = note.content
            this.updated  = note.updated_at
            this.unsaved  = false
            this.markdownEditor = false
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
            if (e.ctrlKey || e.key == 'Control') {
                if (e.code == 'KeyS'){
                    this.save()
                    e.preventDefault()
                }
            } else if(e.key == 'Shift' || e.shiftKey) {
                //
            }
        },
         saveCaretPosition(context){
            var selection = window.getSelection();
            var range = selection.getRangeAt(0);
            range.setStart(  context, 0 );
            var len = range.toString().length;

            return ()=>{
                var pos = this.getTextNodeAtPosition(context, len);
                selection.removeAllRanges();
                var range = new Range();
                range.setStart(pos.node ,pos.position);
                selection.addRange(range);

            }
        },
        getTextNodeAtPosition(root, index){
            const NODE_TYPE = NodeFilter.SHOW_TEXT;
            var treeWalker = document.createTreeWalker(root, NODE_TYPE, function next(elem) {
                if(index > elem.textContent.length){
                    index -= elem.textContent.length;
                    return NodeFilter.FILTER_REJECT
                }
                return NodeFilter.FILTER_ACCEPT;
            });
            var c = treeWalker.nextNode();
            return {
                node: c? c: root,
                position: index
            };
        },
        markdown(e){
            if (e.code && !e.code.includes("Arrow") && e.code != 'Enter') {
                let restore = this.saveCaretPosition(this.$refs.noteContents);

                const beforeEl = $(this.$refs.noteContents);
                beforeEl.$("li").each((el)=>{
                    $(el).text("- "+$(el).text())
                })
                
                this.$refs.noteContents.innerHTML = this.$refs.noteContents.innerHTML
                    .replaceAll("\n", "<br>").replaceAll("&nbsp;", "++++++")

                this.$refs.noteContents.innerHTML = md.render(this.$refs.noteContents.innerText)
                    md;  
                const el = $(this.$refs.noteContents);
                el.$("h1").each((el)=>{
                    $(el).text("# "+$(el).text())
                })
                el.$("em").each((el)=>{
                    $(el).text("*"+$(el).text()+"*")
                })

                el.html(el.html().replaceAll("++++++", "&nbsp"))

                restore();
            }
        },
        switchMarkdown(){
            this.markdownEditor = !this.markdownEditor

            if (this.markdownEditor) {
                this.contentsHTML = md.render(this.contents)
                this.markdown()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
#notes-list {
    overflow-y: auto;
    height: 100%;
    width: 280px;
    background: #F9F9F9;
    position: fixed;
    left: 65px;
    top: 65px;
    transition: 0.3s;

    #actions {
        padding: 5px 10px;
        min-height: 40px;
        #add,
        #open,
        #fullscreen {
            color: #545454;
            height: 24px;
            width:  24px;
            cursor: pointer;
        }
        #add {
            float: right;
            margin-top: 3px;
            margin-right: 14px;
        }

        #open {
            float: right;
            margin-top: 3px;
            transform: rotate(180deg);
            transition: 0.3s;
        }

        #fullscreen {
            margin-left: 6px;
            margin-top: 3px;
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
                white-space: nowrap;
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
    &.closed {
        width: 45px;
        padding-top: 5px;

        #actions {
            #open {
                transform: rotate(0deg);
            }

            #fullscreen {
                margin-top: 15px;
                margin-left: 4px;
                width:  20px;
                height: 20px;
            }
        }
    }

    &.fullscreen {
        left: 0px;
        top: 0px;
    }
}

#current-note {
    margin-left: 300px;
    margin-top:  110px;
    display: block;
    height: 100%;

    padding-left:  20px;
    padding-right: 20px;
    
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
        display: inline-block;
    }

    #content-input {
        width: 100%;
        font-size: 24px;
        min-height: calc(100vh - 200px);
        resize: vertical;
        outline: none !important;
        color: #434343;

        &.markdown-contents {
            font-size: 24px;
        }
    }

    #right {
        position: absolute;
        right: 0px;
        
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
                cursor: pointer;
                height: 27px;
                margin-left: 9.5px;
            }

            #markdown-switch {
                color: #545454;
            }
        }
    }


    #inner {
        max-width: 1000px;
        margin: auto;
        position: relative;
    }

    &.sidebar-closed {
        margin-left: 60px;
        padding-left:  0px;
        padding-right: 0px;
        #right #badges #markdown-switch {
            position: fixed;
            left: 65px;
            bottom: 10px;    
        }
    }

    &.fullscreen {
        margin-top: 30px;
    }

    &.sidebar-closed.fullscreen {
        padding-top: 50px;
    }

}

@media screen and (max-width: 720px){
    #current-note {
        margin-left: 300px;
        padding-left:  10px;
        padding-right: 10px;

        #date {
            font-size: 14.5px;
        }

        #title-input {
            font-size: 33px;
        }

        #content-input {
            font-size: 19.5px;
        }
    }
}

</style>