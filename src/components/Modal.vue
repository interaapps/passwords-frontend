<template>
    <div id="modal-bg" :class="{active: opened}" @click='close'>
        <div id="modal" @click.stop="">
            <!-- <h3 v-if="modalTitle !== null" class="title">{{modalTitle}}</h3> -->
            <slot />
        </div>
    </div>
</template>
<script>
export default {
    name: "Modal",
    props: {
        opened: {type: Boolean, default: true},
        closeOnBackgroundClick: {type: Boolean, default: true},
        modalTitle: {type: String, default: null}
    },
    methods: {
        close(){
            /*
            if (this.closeOnBackgroundClick)
                this.opened = false;
                */
        }
    }
}
</script>
<style lang="scss" scoped>

    #modal-bg {
        background: #00000020;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 100000;
        top: 0;
        left: 0;
        transition: 0.3s;
        display: none;
        backdrop-filter: blur(0px);
    }

    #modal-bg.active {
        display: block;
        backdrop-filter: blur(2px);
    }

    #modal {
        background: #FFFFFFF1;
        backdrop-filter: blur(10px);
        display: inline-block;
        width: 400px;
        max-width: 100%;
        max-height: 100%;
        box-shadow: 2px 0px 7px 1px #00000022;
        border-radius: 7px;
        padding: 10px;
        margin: auto;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);

        .title {
            font-weight: 400;
            font-size: 27px;
            margin-bottom: 12px;
        }

        #close-button {
            width:  35px;
            height: 35px;
            float: right;
            margin: 1px;
            padding: 6px;
            border-radius: 20px;
        }

        #close-button:hover {
            background: #00000019;
            cursor: pointer;
        }

        #buttons {
            margin-top: 20px;
            .btn {
                margin-right: 10px;
                font-size: 15px;;
            }
        }
    }
    @media screen and (max-width: 720px) {
        #modal {
            top: initial;
            transform: none;
            left: initial;
            bottom: 0px;
            width: 100%;
            min-height: 80%;
            height: 100vh;
            overflow: auto;
            border-radius: 20px 20px 0px 0px;
        }
    }
</style>