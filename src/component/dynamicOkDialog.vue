<template>
    <transition name="modal" v-on:after-leave="onAfterLeave">
        <div class="modal-mask" v-if="isShow">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">default header</div>

                    <div class="modal-body">default body</div>

                    <div class="modal-footer">
                        default footer
                        <button class="modal-default-button" v-on:click="onOkClick">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class DynamicOkDialog extends Vue {
        isShow = false;

        mounted() {
            this.isShow = true;
        }

        onOkClick() {
            this.isShow = false;
        }

        onAfterLeave() {
            this.$emit("close");
        }
    }
</script>
