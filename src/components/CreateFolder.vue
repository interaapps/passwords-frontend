<template>
    <div>
        <Modal :opened="$store.state.folderModal != null" >
            <svg @click="$store.state.folderModal = null" id="close-button" width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/></svg>
            <h3 class="title">Create Folder</h3>

            <span class="label">NAME</span>
            <input type="text" v-model="name" class="input" style="width: 100%" autocomplete="off" placeholder="name">
            <span class="label">FOLDER</span>
            <div id="color-picker">
                <div v-for="color in colors" :key="color" @click="selectedColor = color" :style="{'background-color': color}">
                    <svg v-if="selectedColor == color" width="30px" height="30px" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M89.073 40.3597C90.2101 39.2326 91.7451 38.5982 93.3462 38.5938C94.9473 38.5894 96.4858 39.2152 97.6291 40.3361C98.7724 41.457 99.4286 42.9828 99.4559 44.5837C99.4832 46.1845 98.8793 47.7318 97.7749 48.891L65.3399 89.4347C64.7824 90.0351 64.1096 90.517 63.3617 90.8514C62.6138 91.1859 61.8061 91.3661 60.9869 91.3813C60.1678 91.3965 59.354 91.2463 58.5942 90.9397C57.8344 90.6332 57.1442 90.1766 56.5649 89.5972L35.0743 68.0985C34.4756 67.5406 33.9954 66.8678 33.6623 66.1203C33.3292 65.3729 33.1502 64.5659 33.1357 63.7477C33.1213 62.9295 33.2718 62.1168 33.5783 61.358C33.8848 60.5992 34.3409 59.9099 34.9196 59.3313C35.4982 58.7526 36.1875 58.2965 36.9463 57.99C37.7051 57.6835 38.5178 57.533 39.336 57.5474C40.1542 57.5619 40.9611 57.7409 41.7086 58.074C42.4561 58.4071 43.1289 58.8873 43.6868 59.486L60.7005 76.4916L88.9186 40.5385C88.969 40.4755 89.0233 40.4158 89.0811 40.3597H89.073Z" fill="white"/></svg>
                </div>
            </div>
            <a id="login-button" @click="save" class="btn">CREATE FOLDER</a>
        </Modal>
    </div>
</template>
<script>
import Modal from "./Modal";
import helpers from "../helpers";
export default {
    data: ()=>({
        colors: [
            "#EA5555",
            "#58EA55",
            "#5576EA"
        ],
        name: "",
        selectedColor: '#EA5555'
    }),
    props: {
        modalOpened: {}
    },
    components: {
        Modal
    },
    methods: {
        save(){
            let data = {
                name: this.name,
                color: this.selectedColor
            }

            if (this.passwordsClient.getCurrentFolder()) {
                data.parent = this.passwordsClient.getCurrentFolder().folder.id
                console.log("PARENTED: "+data.parent);
            }
            this.passwordsClient.putFolder(data).then(res=>{
                if (res.success && !res.extra.updated) {
                    this.passwordsClient
                        .putKey("FOLDER:"+res.extra.id, 'FOLDER', helpers.randomString(50))
                        .then(()=>{
                            this.passwordsClient
                                .fetchAndDecrypt()
                        })
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
#color-picker {
    margin-top: 15px;
    margin-bottom: 10px;
    
    div {
        display: inline-block;
        margin-right: 10px;
        height: 33px;
        width:  33px;
        border-radius: 50%;
        cursor: pointer;

        svg {
            margin: 1.45px;
            display: block;
        }
    }
}
</style>