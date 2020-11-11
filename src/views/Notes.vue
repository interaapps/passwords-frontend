<template>
    <div>
        <div id="notes-list">
            <div id="actions">
                <svg id="add" viewBox="0 0 16 16" class="bi bi-journal-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/><path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/></svg>
            </div>
            <div id="list">
                <div class="entry">
                    <h1>New Note</h1>
                    <h2>New Note</h2>
                </div>
            </div>
        </div>
        <div id="current-note">

        </div>
    </div>
</template>
<script>
export default {
    
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
            background: #00000005;
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
                color: #545454;
            }
        }
    }
}
</style>